import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Github, ExternalLink, User, Globe, Award, Briefcase } from 'lucide-react';

interface TeamMember {
  id: number | string;
  name: string;
  role: string;
  department?: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  email?: string;
  github?: string;
  portfolio?: string;
  expertise?: string[];
  joinedDate?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'default' | 'compact' | 'detailed';
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  member, 
  variant = 'default' 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate initials with fallback
  const initials = member.name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();

  // Color scheme based on role/department
  const getColorScheme = () => {
    const role = member.role.toLowerCase();
    const department = member.department?.toLowerCase();
    
    if (role.includes('lead') || role.includes('director')) {
      return {
        primary: 'from-purple-500 to-purple-700',
        light: 'bg-purple-50 dark:bg-purple-900/20',
        text: 'text-purple-600 dark:text-purple-400',
        icon: 'text-purple-500'
      };
    }
    if (department?.includes('engineer') || role.includes('developer')) {
      return {
        primary: 'from-blue-500 to-cyan-500',
        light: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
        icon: 'text-blue-500'
      };
    }
    if (department?.includes('design') || role.includes('designer')) {
      return {
        primary: 'from-pink-500 to-rose-500',
        light: 'bg-pink-50 dark:bg-pink-900/20',
        text: 'text-pink-600 dark:text-pink-400',
        icon: 'text-pink-500'
      };
    }
    return {
      primary: 'from-slate-600 to-slate-700',
      light: 'bg-slate-50 dark:bg-slate-800',
      text: 'text-slate-600 dark:text-slate-400',
      icon: 'text-slate-500'
    };
  };

  const colors = getColorScheme();

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => variant === 'detailed' && setIsExpanded(!isExpanded)}
      className={`relative group cursor-pointer ${
        variant === 'compact' ? 'max-w-xs' : 'max-w-sm'
      } bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-700 -z-10`} />
      
      {/* Animated floating elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -z-10"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Circular Avatar Container */}
      <div className="relative mb-8">
        <motion.div 
          className="w-40 h-40 mx-auto relative"
          whileHover={{ scale: 1.05 }}
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          {/* Outer ring */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.primary} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
          
          {/* Main circular container */}
          <div className="absolute inset-4 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900 shadow-2xl z-10">
            {member.image && !imageError ? (
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={handleImageError}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <motion.div 
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <User className="w-16 h-16 text-gray-400 dark:text-gray-600" />
              </motion.div>
            )}
          </div>
          
          {/* Status indicator */}
          <motion.div 
            className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-green-500 ring-4 ring-white dark:ring-gray-900 z-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Expertise badge */}
          {member.expertise && member.expertise.length > 0 && variant !== 'compact' && (
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`px-4 py-1.5 rounded-full ${colors.light} backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-lg`}>
                <span className={`text-xs font-bold ${colors.text}`}>
                  {member.expertise[0]}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="text-center space-y-3">
        <motion.h3 
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"
          layoutId={`name-${member.id}`}
        >
          {member.name}
        </motion.h3>
        
        <div className="space-y-1">
          <motion.span 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.light} ${colors.text} text-sm font-semibold uppercase tracking-wider`}
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            {member.role}
          </motion.span>
          
          {member.department && variant !== 'compact' && (
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {member.department}
            </p>
          )}
          
          {member.joinedDate && variant !== 'compact' && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Joined {new Date(member.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          )}
        </div>

        {/* Expandable Bio Section */}
        <AnimatePresence>
          {(member.bio && (variant === 'detailed' || isExpanded)) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Expertise tags */}
                {member.expertise && member.expertise.length > 1 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.expertise.slice(1).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Social Actions */}
      <motion.div 
        className="flex justify-center items-center gap-3 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <SocialIcon 
          href={member.linkedin} 
          icon={<Linkedin size={18} />} 
          label={`Connect with ${member.name} on LinkedIn`}
          color={colors.icon}
        />
        <SocialIcon 
          href={member.github} 
          icon={<Github size={18} />} 
          label={`View ${member.name}'s GitHub profile`}
          color={colors.icon}
        />
        <SocialIcon 
          href={member.email ? `mailto:${member.email}` : undefined} 
          icon={<Mail size={18} />} 
          label={`Email ${member.name}`}
          color={colors.icon}
        />
        {member.portfolio && (
          <SocialIcon 
            href={member.portfolio} 
            icon={<Globe size={18} />} 
            label={`Visit ${member.name}'s portfolio`}
            color={colors.icon}
          />
        )}
        {variant === 'detailed' && member.bio && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            aria-label={isExpanded ? "Show less" : "Show more"}
            className={`p-2.5 rounded-xl ${colors.light} ${colors.text} hover:bg-opacity-80 transition-all duration-300`}
          >
            <ExternalLink className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </motion.div>

      {/* Hover effect line */}
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent w-0 group-hover:w-32 transition-all duration-500"
        layoutId={`underline-${member.id}`}
      />
    </motion.div>
  );
};

// Enhanced Social Icon Component
const SocialIcon = ({ 
  href, 
  icon, 
  label, 
  color 
}: { 
  href?: string; 
  icon: React.ReactNode; 
  label: string;
  color?: string;
}) => {
  if (!href) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden group`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color?.replace('text-', 'from-')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
      <div className="relative z-10">{icon}</div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {label}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </motion.a>
  );
};

export default TeamMemberCard;

// Example usage component
export const TeamShowcase: React.FC<{ members: TeamMember[] }> = ({ members }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse group of passionate professionals driving innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TeamMemberCard member={member} variant="default" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};