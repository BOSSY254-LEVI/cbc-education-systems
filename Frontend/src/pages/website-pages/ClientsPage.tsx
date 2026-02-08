// src/pages/website-pages/ClientsPage.tsx
import React, { useState } from 'react';
import { clients, clientStats } from '@/data/clients';
import ClientCard from '@/components/ClientCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ClientsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Schools', count: clientStats.totalSchools },
    { id: 'primary', name: 'Primary Schools', count: clientStats.primarySchools },
    { id: 'secondary', name: 'Secondary Schools', count: clientStats.secondarySchools },
    { id: 'international', name: 'International Schools', count: clientStats.internationalSchools },
    { id: 'private', name: 'Private Schools', count: clientStats.privateSchools },
  ];

  const filteredClients = activeCategory === 'all' 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  return (
    <>
    <Header/>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f1729] via-[#1e3a8a] to-[#0891b2] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-300">
              Trusted by leading educational institutions across Kenya implementing the CBC curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2563eb] mb-2">
                {clientStats.totalSchools}+
              </div>
              <div className="text-gray-600">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0891b2] mb-2">
                {(clientStats.totalStudents / 1000).toFixed(1)}K+
              </div>
              <div className="text-gray-600">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2563eb] mb-2">
                8+
              </div>
              <div className="text-gray-600">Counties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0891b2] mb-2">
                100%
              </div>
              <div className="text-gray-600">CBC Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0f1729] mb-4">
              Schools Using EduStack CBC Kenya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From primary to secondary, local to international - diverse institutions trust our platform
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#2563eb] to-[#0891b2] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f1729] to-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Hear from our partner schools about their experience with EduStack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "EduStack has transformed how we implement CBC. The curriculum management tools are exceptional."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#0891b2] flex items-center justify-center text-white font-bold">
                  MK
                </div>
                <div>
                  <div className="text-white font-semibold">Dr. Mary Kamau</div>
                  <div className="text-gray-400 text-sm">Principal, Makini School</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Outstanding platform! Progress tracking and analytics have made assessment so much easier."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#0891b2] flex items-center justify-center text-white font-bold">
                  JO
                </div>
                <div>
                  <div className="text-white font-semibold">John Omondi</div>
                  <div className="text-gray-400 text-sm">Head Teacher, Alliance High</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The perfect solution for CBC implementation. Highly recommend to any school in Kenya."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#0891b2] flex items-center justify-center text-white font-bold">
                  SW
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Wanjiru</div>
                  <div className="text-gray-400 text-sm">Director, ISK Nairobi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#0891b2] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Network</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            Become part of Kenya's leading schools implementing CBC with EduStack. 
            Transform your institution's educational delivery today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-[#1e3a8a] font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:transform hover:-translate-y-1"
            >
              Request a Demo
            </a>
            <a 
              href="/pricing" 
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-4 px-10 rounded-lg hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ClientsPage;