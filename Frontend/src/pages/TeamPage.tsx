import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TeamMembersPage = () => {

  const teamMembers = [
    {
      id: 1,
      name: 'Joseph Wanjau',
      title: 'Chief Executive Officer (CEO)',
      image: '/api/placeholder/200/200'
    },
    {
      id: 2,
      name: 'Ann Njoki',
      title: 'Chief Operations Officer (COO)',
      image: '/api/placeholder/200/200'
    },
    {
      id: 3,
      name: "Grace Ndung'u",
      title: 'Head of Business Development',
      image: '/api/placeholder/200/200'
    },
    {
      id: 4,
      name: 'Brian Kiprop',
      title: 'Chief Technology Officer (CTO)',
      image: '/api/placeholder/200/200'
    },
    {
      id: 5,
      name: 'Caroline Wambui',
      title: 'Senior Accountant',
      image: '/api/placeholder/200/200'
    },
    {
      id: 6,
      name: 'Salome Maina',
      title: 'Head of Customer Service',
      image: '/api/placeholder/200/200'
    }
  ];

  return (
    
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#e8eef3',
      padding: '40px 20px'
    }}>
        <Header/>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px'
      }}>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '40px 30px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              margin: '0 auto 20px',
              overflow: 'hidden',
              backgroundColor: '#f0f0f0'
            }}>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#2c5f8d',
              margin: '0 0 8px 0',
              fontFamily: 'Arial, sans-serif'
            }}>
              {member.name}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#5a7a95',
              margin: 0,
              fontFamily: 'Arial, sans-serif'
            }}>
              {member.title}
            </p>
          </div>
        ))}
      </div>
          <Footer/>
    </div>

  );
};

export default TeamMembersPage;