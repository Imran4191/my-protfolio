import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Briefcase, Award } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const skills = {
    languages: ['PHP', 'JavaScript (jQuery, React.js, Next.js)', 'Python', 'HTML5', 'CSS3'],
    platforms: ['WordPress', 'Magento'],
    frameworks: ['Tailwind CSS', 'Bootstrap'],
    databases: ['MySQL', 'MongoDB'],
    specialized: ['API Integration', 'Plugin Development', 'REST APIs'],
    tools: ['Git', 'Docker', 'ClickUp', 'Jira', 'Trello']
  };

  const projects = [
    { name: 'Functional Self', url: 'https://functionalself.co.uk', type: 'E-commerce Platform' },
    { name: 'Rosita Real Foods', url: 'https://rositarealfoods.co.uk', type: 'E-commerce Platform' },
    { name: 'GBC Wellness', url: 'https://gbcwellness.eu', type: 'E-commerce Platform' },
    { name: 'BWIP HR System', url: null, type: 'Internal HR Management System' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Imran Hossain
            </h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Full Stack Web Developer
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            WordPress & Magento Specialist | 4.5+ Years Experience
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:mihasan4191@gmail.com" className="hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Imran4191" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/md-imran-hossain-079584111" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Full Stack Developer with 4.5+ years of experience across the full software lifecycle, e-commerce platforms, and custom application development. Strong expertise in API integrations, plugin development, and scalable system architecture.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Skilled in both backend and frontend technologies with a proven ability to troubleshoot complex issues and deliver high-performance solutions. Currently working remotely with BW IP Holdings LTD in London, UK.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <Code className="mx-auto mb-2 text-cyan-400" size={32} />
                <h4 className="font-semibold">Multi-Store E-commerce</h4>
                <p className="text-sm text-slate-400 mt-2">Built & maintained 3 platforms</p>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <Database className="mx-auto mb-2 text-cyan-400" size={32} />
                <h4 className="font-semibold">Custom Development</h4>
                <p className="text-sm text-slate-400 mt-2">Plugins & API integrations</p>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <Briefcase className="mx-auto mb-2 text-cyan-400" size={32} />
                <h4 className="font-semibold">4.5+ Years</h4>
                <p className="text-sm text-slate-400 mt-2">Professional experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h3 className="text-4xl font-bold mb-12 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400 capitalize">{category}</h4>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h3 className="text-4xl font-bold mb-12 text-center">Professional Experience</h3>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-start mb-6">
              <Briefcase className="text-cyan-400 mr-4 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-2xl font-bold text-cyan-400">Full Stack Developer</h4>
                <p className="text-lg text-slate-300">BW IP Holdings LTD</p>
                <p className="text-slate-400">London, UK (Remote) | Jan 2021 – Present</p>
              </div>
            </div>
            <ul className="space-y-3 ml-12">
              <li className="text-slate-300 flex items-start">
                <span className="text-cyan-400 mr-2">▹</span>
                Developed and managed three multi-store e-commerce websites across WordPress and Magento
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-cyan-400 mr-2">▹</span>
                Designed and implemented custom WordPress plugins and Magento modules for payments, shipping, and HR
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-cyan-400 mr-2">▹</span>
                Customized and created child themes to ensure brand consistency and scalability
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-cyan-400 mr-2">▹</span>
                Integrated third-party shipping and payment APIs, streamlining checkout and order fulfillment
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-cyan-400 mr-2">▹</span>
                Conducted code reviews, debugging, and optimization to improve website speed and responsiveness
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-cyan-400 mr-2">▹</span>
                Enhanced overall user experience through performance tuning and UI improvements
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-start mb-4">
              <Award className="text-cyan-400 mr-4 flex-shrink-0" size={28} />
              <div>
                <h4 className="text-2xl font-bold">Education</h4>
                <p className="text-lg text-slate-300 mt-2">BSc in Computer Science & Engineering</p>
                <p className="text-slate-400">Bangladesh University (2015–2019)</p>
                <p className="text-cyan-400 font-semibold">CGPA: 3.86/4.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h3 className="text-4xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h4>
                <p className="text-slate-400 mb-4">{project.type}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Visit Site <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
                {!project.url && (
                  <p className="text-slate-500 italic">Internal project with payroll, leave tracking, and role-based dashboards</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
          <p className="text-xl text-slate-300 mb-12">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-6">
            <a
              href="mailto:mihasan4191@gmail.com"
              className="flex items-center justify-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <Mail className="text-cyan-400" size={24} />
              <span className="text-lg">mihasan4191@gmail.com</span>
            </a>
            <a
              href="tel:+8801632320355"
              className="flex items-center justify-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <Phone className="text-cyan-400" size={24} />
              <span className="text-lg">+880 1632 320355</span>
            </a>
          </div>
          <div className="flex justify-center space-x-8 mt-12">
            <a
              href="https://github.com/Imran4191"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/md-imran-hossain-079584111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        <p>© 2025 Md Imran Hossain. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}