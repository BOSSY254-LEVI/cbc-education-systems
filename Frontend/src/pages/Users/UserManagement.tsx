import React, { useState, useMemo, useEffect } from 'react';
import { Search, UserPlus, Mail, MoreVertical, Trash2, Edit3, Shield, User, ChevronDown, Download, RefreshCw, Check, X, Loader2 } from 'lucide-react';
import { supabase, DatabaseUser, formatUserForUI } from '../../lib/supabase';

interface UserForUI {
  id: string;
  username: string;
  name: string;
  email: string;
  role: string;
  posts: number;
  status: string;
  joinedDate: string;
  lastActive: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<UserForUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('username');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState<UserForUI | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch users from Supabase
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error: supabaseError } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      if (data) {
        const formattedUsers = data.map((user: DatabaseUser) => formatUserForUI(user));
        setUsers(formattedUsers);
      }
    } catch (err: any) {
      console.error('Error fetching users:', err);
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  // Add new user to Supabase
  const addUser = async (userData: Partial<UserForUI>) => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('users')
        .insert([
          {
            username: userData.username,
            email: userData.email,
            full_name: userData.name || userData.username,
            role: userData.role || 'Subscriber',
            status: userData.status || 'pending',
            posts_count: 0,
          }
        ])
        .select();

      if (supabaseError) {
        throw supabaseError;
      }

      if (data) {
        const newUser = formatUserForUI(data[0] as DatabaseUser);
        setUsers([newUser, ...users]);
      }
    } catch (err: any) {
      console.error('Error adding user:', err);
      alert(err.message || 'Failed to add user');
    }
  };

  // Update user in Supabase
  const updateUser = async (userId: string, userData: Partial<UserForUI>) => {
    try {
      const { error: supabaseError } = await supabase
        .from('users')
        .update({
          username: userData.username,
          email: userData.email,
          full_name: userData.name || userData.username,
          role: userData.role,
          status: userData.status,
        })
        .eq('id', userId);

      if (supabaseError) {
        throw supabaseError;
      }

      // Refresh users from database
      await fetchUsers();
    } catch (err: any) {
      console.error('Error updating user:', err);
      alert(err.message || 'Failed to update user');
    }
  };

  // Delete user from Supabase
  const deleteUser = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }
    
    try {
      const { error: supabaseError } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (supabaseError) {
        throw supabaseError;
      }

      setUsers(users.filter(u => u.id !== userId));
      const newSelected = new Set(selectedUsers);
      newSelected.delete(userId);
      setSelectedUsers(newSelected);
    } catch (err: any) {
      console.error('Error deleting user:', err);
      alert(err.message || 'Failed to delete user');
    }
  };

  // Bulk delete users
  const bulkDeleteUsers = async () => {
    if (!window.confirm(`Are you sure you want to delete ${selectedUsers.size} user(s)?`)) {
      return;
    }
    
    try {
      const { error: supabaseError } = await supabase
        .from('users')
        .delete()
        .in('id', Array.from(selectedUsers));

      if (supabaseError) {
        throw supabaseError;
      }

      setUsers(users.filter(u => !selectedUsers.has(u.id)));
      setSelectedUsers(new Set());
    } catch (err: any) {
      console.error('Error bulk deleting users:', err);
      alert(err.message || 'Failed to delete users');
    }
  };

  const roles = ['Administrator', 'Editor', 'Author', 'Contributor', 'Subscriber'];
  const statuses = ['active', 'inactive', 'pending'];

  // Filtered and sorted users
  const filteredUsers = useMemo(() => {
    let filtered = users.filter(user => {
      const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesRole = filterRole === 'all' || user.role === filterRole;
      const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });

    filtered.sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      if (sortBy === 'posts') {
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
      }
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });

    return filtered;
  }, [users, searchTerm, filterRole, filterStatus, sortBy, sortOrder]);

  const toggleSelectUser = (userId) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedUsers.size === filteredUsers.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(filteredUsers.map(u => u.id)));
    }
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-emerald-100 text-emerald-700';
      case 'inactive': return 'bg-slate-100 text-slate-700';
      case 'pending': return 'bg-amber-100 text-amber-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const exportToCSV = () => {
    const headers = ['Username', 'Name', 'Email', 'Role', 'Status', 'Posts', 'Joined Date', 'Last Active'];
    const csvData = filteredUsers.map(user => [
      user.username,
      user.name || '',
      user.email,
      user.role,
      user.status,
      user.posts,
      user.joinedDate,
      user.lastActive
    ]);
    
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users-export-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">User Management</h1>
            <p className="text-slate-600 text-base">Manage your team members and their permissions</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            <UserPlus size={18} />
            Add User
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Users', value: users.length, icon: User, bgColor: 'bg-blue-600' },
            { label: 'Administrators', value: users.filter(u => u.role === 'Administrator').length, icon: Shield, bgColor: 'bg-purple-600' },
            { label: 'Active Users', value: users.filter(u => u.status === 'active').length, icon: Check, bgColor: 'bg-emerald-600' },
            { label: 'Pending', value: users.filter(u => u.status === 'pending').length, icon: RefreshCw, bgColor: 'bg-orange-600' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-sm text-slate-600 mb-2">{stat.label}</div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className="text-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by username, email, or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Role Filter */}
            <div className="relative">
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[180px] text-sm font-medium text-slate-700"
              >
                <option value="all">All Roles</option>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[180px] text-sm font-medium text-slate-700"
              >
                <option value="all">All Statuses</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            </div>

            {/* Export Button */}
            <button 
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Download size={18} className="text-slate-600" />
              <span className="text-slate-700 font-medium text-sm">Export</span>
            </button>
          </div>

          {/* Bulk Actions */}
          {selectedUsers.size > 0 && (
            <div className="mt-4 flex items-center gap-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="text-blue-900 font-medium text-sm">{selectedUsers.size} user{selectedUsers.size > 1 ? 's' : ''} selected</span>
              <button
                onClick={bulkDeleteUsers}
                className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
              >
                <Trash2 size={14} />
                Delete Selected
              </button>
              <button
                onClick={() => setSelectedUsers(new Set())}
                className="flex items-center gap-2 px-3 py-1.5 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left w-12">
                    <input
                      type="checkbox"
                      checked={selectedUsers.size === filteredUsers.length && filteredUsers.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-semibold text-slate-700 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => handleSort('username')}
                  >
                    <div className="flex items-center gap-2">
                      User
                      {sortBy === 'username' && (
                        <span className="text-blue-600">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-semibold text-slate-700 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => handleSort('email')}
                  >
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Posts</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Last Active</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.has(user.id)}
                        onChange={() => toggleSelectUser(user.id)}
                        className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Mail size={14} className="text-slate-400" />
                        {user.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Shield size={14} className="text-slate-400" />
                        <span className="text-slate-700 text-sm">{user.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-slate-700 text-sm">{user.posts}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-500">{user.lastActive}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setEditingUser(user)}
                          className="p-2 hover:bg-blue-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                          title="Edit user"
                        >
                          <Edit3 size={16} className="text-blue-600" />
                        </button>
                        <button 
                          onClick={() => deleteUser(user.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                          title="Delete user"
                        >
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                        <button 
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          title="More options"
                        >
                          <MoreVertical size={16} className="text-slate-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 text-base mb-2">No users found</div>
              <div className="text-slate-500 text-sm">Try adjusting your search or filters</div>
            </div>
          )}

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              Showing <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{users.length}</span> users
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                {currentPage}
              </button>
              <button 
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Add New User</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={18} className="text-slate-600" />
                </button>
              </div>
            </div>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const newUser = {
                  id: Math.max(...users.map(u => u.id), 0) + 1,
                  username: formData.get('username') as string,
                  name: (formData.get('name') as string) || (formData.get('username') as string),
                  email: formData.get('email') as string,
                  role: formData.get('role') as string,
                  posts: 0,
                  status: formData.get('status') as string,
                  joinedDate: new Date().toISOString().split('T')[0],
                  lastActive: 'Just now'
                };
                setUsers([...users, newUser]);
                setShowAddModal(false);
                (e.target as HTMLFormElement).reset();
              }}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="johndoe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Role *
                </label>
                <select
                  name="role"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Status *
                </label>
                <select
                  name="status"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Edit User</h2>
                <button
                  onClick={() => setEditingUser(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={18} className="text-slate-600" />
                </button>
              </div>
            </div>
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const updatedUsers = users.map(u => 
                  u.id === editingUser.id
                    ? {
                        ...u,
                        username: formData.get('username') as string,
                        name: (formData.get('name') as string) || (formData.get('username') as string),
                        email: formData.get('email') as string,
                        role: formData.get('role') as string,
                        status: formData.get('status') as string
                      }
                    : u
                );
                setUsers(updatedUsers);
                setEditingUser(null);
              }}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  defaultValue={editingUser.username}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingUser.name}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  defaultValue={editingUser.email}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Role *
                </label>
                <select
                  name="role"
                  required
                  defaultValue={editingUser.role}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Status *
                </label>
                <select
                  name="status"
                  required
                  defaultValue={editingUser.status}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Update User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default UserManagement;