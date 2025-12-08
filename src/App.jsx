import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Database, Layers, CheckCircle2, Calendar, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

// Import images
import profileImage from './assets/profile.jpg';
import fsImage from './assets/FS.png';
import rositaImage from './assets/rosita.png';
import gbcImage from './assets/gbc.png';
import coverboxImage from './assets/coverbox.png';
import saychese from './assets/saychese.png';
import hrimage from './assets/hr.png';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.75;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const skills = {
    'Languages & Frameworks': [
      'PHP', 'JavaScript', 'React.js', 'Next.js', 'jQuery', 
      'Python', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'
    ],
    'Platforms & CMS': ['WordPress', 'Magento', 'Shopify', 'WooCommerce'],
    'Databases': ['MySQL', 'MongoDB'],
    'Specialized Skills': ['API Integration', 'Plugin Development', 'REST APIs', 'Theme Customization'],
    'DevOps & Tools': ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile Development'],
    'Project Management': ['ClickUp', 'Jira', 'Trello']
  };

  const experiences = [
    {
      company: 'DOTCOM VALLEY',
      location: 'Dhaka, Bangladesh',
      role: 'Full Stack Web Developer',
      period: 'Oct 2025 – Present',
      achievements: [
        'Developing and maintaining WordPress and Shopify websites',
        'Providing website consultancy including technical strategy, UI/UX, and structure',
        'Managing hosting, DNS, SSL, and site operations',
        'Building high-converting funnels using Convertri and WordPress',
        'Conducting code reviews and optimization to improve website speed and responsiveness'
      ]
    },
    {
      company: 'BW IP Holdings LTD',
      location: 'London, UK (Remote)',
      role: 'Full Stack Web Developer',
      period: 'Jan 2021 – Nov 2025 (4 years 9 months)',
      achievements: [
        'Developed and managed 3 multi-store e-commerce platforms (WordPress & Magento)',
        'Designed custom WordPress plugins and Magento modules for payments, shipping, and HR',
        'Integrated third-party shipping and payment APIs, streamlining checkout and order fulfillment',
        'Created child themes ensuring brand consistency and scalability',
        'Enhanced user experience through performance tuning and UI improvements'
      ]
    }
  ];

  const projects = [
    {
      name: 'Functional Self',
      url: 'https://functionalself.co.uk',
      description: 'Multi-store e-commerce platform built with WordPress/WooCommerce',
      tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'API Integration'],
      image: fsImage
    },
    {
      name: 'Rosita Real Foods',
      url: 'https://rositarealfoods.co.uk',
      description: 'E-commerce platform for natural food products with custom features',
      tech: ['WordPress', 'WooCommerce', 'Custom Plugins', 'Payment Gateway'],
      image: rositaImage
    },
    {
      name: 'GBC Wellness',
      url: 'https://gbcwellness.eu',
      description: 'B2B wellness products platform with advanced inventory management',
      tech: ['WordPress', 'WooCommerce', 'B2B Features', 'Bulk Ordering'],
      image: gbcImage
    },
    {
      name: 'Covervox',
      url: 'https://covervox.com/',
      description: 'Professional service platform with custom booking system',
      tech: ['WordPress', 'Custom Development', 'Booking System', 'CRM Integration'],
      image: coverboxImage
    },
    {
      name: 'SayChese',
      url: 'https://saycheese-8902.myshopify.com/',
      description: 'A shopify store for selling teeth whitening products',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'Custom Theme Development'],
      image: saychese
    },
    {
      name: 'BWIP HR System',
      url: 'https://github.com/Imran4191/Hr-Project',
      description: 'Internal HR management system with payroll, leave tracking, time tracking, and role-based dashboards',
      tech: ['PHP', 'MySQL','Role-Based Access','Custom Development'],
      image: hrimage
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Md Imran Hossain
            </button>
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 relative group ${
                    activeSection === section 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-[fadeInLeft_0.8s_ease-out]">
              <div className="inline-block animate-[bounce_2s_ease-in-out_infinite]">
                <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                  <span className="text-blue-600 font-medium text-sm">Available for Opportunities</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="inline-block animate-[fadeInUp_0.6s_ease-out]">Full Stack Web</span>
                <br />
                <span className="inline-block animate-[fadeInUp_0.6s_ease-out_0.2s] bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-[fadeInUp_0.6s_ease-out_0.3s]">
                WordPress & Magento Specialist
              </p>
              <p className="text-lg text-gray-600 animate-[fadeInUp_0.6s_ease-out_0.4s]">
                4.5+ years building scalable e-commerce platforms and custom web solutions
              </p>
              
              <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.6s_ease-out_0.5s]">
                <a
                  href="mailto:mihasan4191@gmail.com"
                  className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Mail size={20} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Me
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View Projects
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-600 animate-[fadeInUp_0.6s_ease-out_0.6s]">
                <a href="mailto:mihasan4191@gmail.com" className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1">
                  <Mail size={18} className="mr-2" />
                  mihasan4191@gmail.com
                </a>
                <a href="tel:+8801632320355" className="flex items-center hover:text-blue-600 transition-all duration-300 hover:translate-x-1">
                  <Phone size={18} className="mr-2" />
                  +880 1632 320355
                </a>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  Dhaka, Bangladesh
                </div>
              </div>

              <div className="flex gap-4 animate-[fadeInUp_0.6s_ease-out_0.7s]">
                <a
                  href="https://github.com/Imran4191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110 hover:-rotate-6"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/md-imran-hossain-079584111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center animate-[fadeInRight_0.8s_ease-out]">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-all duration-500 opacity-20"></div>
                <div className="absolute inset-0 bg-blue-200 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Md Imran Hossain"
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 lg:px-8 bg-white transition-all duration-1000 ${
        isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Code2, title: 'E-commerce Expert', desc: 'Built and maintained 3+ multi-store platforms handling high-volume transactions', delay: '0s' },
              { icon: Layers, title: 'Full Stack Development', desc: 'Expertise in both backend architecture and frontend user experience', delay: '0.1s' },
              { icon: Database, title: 'Custom Solutions', desc: 'Developed custom plugins and modules integrating complex third-party APIs', delay: '0.2s' }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="text-blue-600 group-hover:text-blue-700" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 lg:p-12 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Full Stack Developer with 4.5+ years of experience across the full software lifecycle, e-commerce platforms, and custom application development. Strong expertise in API integrations, plugin development, and scalable system architecture.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skilled in both backend and frontend technologies with a proven ability to troubleshoot complex issues and deliver high-performance solutions. Experienced in working with international teams remotely, managing complete project lifecycles from conception to deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${
        isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{exp.role}</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <div className="p-3 bg-blue-50 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Briefcase className="text-blue-600" size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle2 className="text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" size={18} />
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-start">
              <div className="p-3 bg-blue-50 rounded-lg mr-6 hover:scale-110 hover:rotate-6 transition-all duration-300">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-xl text-gray-700 mb-1">BSc in Computer Science & Engineering</p>
                <p className="text-gray-600 mb-2">Bangladesh University (2015–2019)</p>
                <p className="text-blue-600 font-semibold">CGPA: 3.86/4.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 lg:px-8 bg-white transition-all duration-1000 ${
        isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <div 
                key={category} 
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-300 group-hover:text-blue-600 transition-colors duration-300">
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center group/skill hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover/skill:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover/skill:text-blue-600 transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${
        isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.image ? (
                  <div className="h-48 bg-gray-100 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-500">
                    <Code2 className="text-blue-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={48} />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group/link"
                    >
                      Visit Website
                      <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </a>
                  )}
                  {!project.url && (
                    <span className="inline-flex items-center text-gray-500 text-sm italic">
                      Internal Project
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 lg:px-8 bg-white transition-all duration-1000 ${
        isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:mihasan4191@gmail.com"
              className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="text-gray-600 group-hover:text-blue-600 mr-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-300">mihasan4191@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+8801632320355"
              className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-500 hover:scale-105 hover:shadow-lg"
            >
              <Phone className="text-gray-600 group-hover:text-blue-600 mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-300">+880 1632 320355</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Imran4191"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-xl"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/md-imran-hossain-079584111"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-xl"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            © 2025 Md Imran Hossain. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}