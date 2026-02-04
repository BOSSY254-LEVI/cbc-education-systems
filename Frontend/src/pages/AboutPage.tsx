import { GraduationCap, Users, Award, Globe, Target, Heart, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const values = [
  {
    icon: GraduationCap,
    title: 'Excellence in Education',
    description: 'We believe every student deserves access to world-class education that prepares them for the future.'
  },
  
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Building strong partnerships between students, teachers, and parents for better outcomes.'
  },
  {
    icon: Award,
    title: 'Innovation First',
    description: 'Continuously evolving our platform with the latest educational technology and research.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Supporting educational institutions worldwide in their journey toward competency-based education.'
  }
];

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Education Officer',
    bio: 'Former curriculum director with 15+ years in educational innovation.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Tech veteran with experience in edtech platforms serving millions of users.'
  },
  {
    name: 'Dr. Amina Hassan',
    role: 'Head of Research',
    bio: 'Educational researcher specializing in competency-based learning systems.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header/>
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6"
            >
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">Our Story</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">EduStack CBC</span> Systems
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Transforming education through innovative competency-based learning platforms
              that empower students, teachers, and schools to achieve excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Empowering the Future of <span className="text-blue-600">Education</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                  At <span className="font-bold text-blue-600">EduStack</span>, we believe that education should be personalized, mastery-focused, and
                  future-ready. Our Competency-Based Education (CBE) platform empowers schools to
                  shift from traditional time-based learning to outcomes-based education where
                  students progress when they demonstrate mastery of skills and knowledge.
                </p>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  Founded in 2020, we've partnered with over <span className="font-bold text-blue-600">150 schools</span> across Kenya and East Africa,
                  helping them implement modern educational practices that prepare students for the
                  challenges of the 21st century.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              The Principles That <span className="text-blue-600">Guide Us</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Our core values shape everything we do
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full text-center border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 group cursor-pointer">
                    <CardHeader>
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Meet the Experts Driving <span className="text-blue-600">Innovation</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Passionate leaders committed to transforming education
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="h-full text-center border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 group cursor-pointer overflow-hidden">
                  <CardHeader>
                    <motion.div 
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="font-semibold text-blue-600 dark:text-blue-400 mt-2">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Award className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Making a Real Difference
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {[
              { value: "150+", label: "Partner Schools", delay: 0 },
              { value: "50K+", label: "Students Served", delay: 0.1 },
              { value: "92%", label: "Mastery Growth", delay: 0.2 },
              { value: "4.9/5", label: "User Satisfaction", delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <motion.div 
                    className="text-5xl md:text-6xl font-extrabold text-white mb-3 group-hover:scale-110 transition-transform duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: stat.delay + 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/90 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
