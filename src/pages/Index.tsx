import { Github, ExternalLink, Mail, Linkedin, Code, Brain, Database, Smartphone, GraduationCap, Award, Star, ChevronRight, ArrowDown, Menu, X, Users, Zap, Shield, Clock, Quote, CheckCircle, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fullStackProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration, inventory management, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      icon: <Database className="w-6 h-6" />,
      category: "Full Stack",
      gradient: "from-blue-500 to-purple-600",
      image: "photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "WhatsApp Clone",
      description: "Real-time messaging application with group chats, media sharing, and online status",
      tech: ["React", "Socket.io", "Express", "PostgreSQL", "Redis"],
      icon: <Smartphone className="w-6 h-6" />,
      category: "Full Stack",
      gradient: "from-green-500 to-teal-600",
      image: "photo-1611224923853-80b023f02d71"
    }
  ];

  const aiProjects = [
    {
      title: "Deepfake Detection System",
      description: "Advanced AI model to detect manipulated videos and images using deep learning techniques",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML",
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1677442136019-21780ecad995"
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn rates and retention strategies",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Data Analytics"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML",
      gradient: "from-orange-500 to-red-600",
      image: "photo-1551288049-bebda4e38f71"
    }
  ];

  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development with modern technologies",
      icon: <Code className="w-8 h-8" />,
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI technologies",
      icon: <Brain className="w-8 h-8" />,
      features: ["Deep Learning", "Computer Vision", "NLP Processing", "Predictive Analytics"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment solutions",
      icon: <Globe className="w-8 h-8" />,
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Consulting & Strategy",
      description: "Technical guidance and strategic planning for your projects",
      icon: <Users className="w-8 h-8" />,
      features: ["Architecture Design", "Code Reviews", "Team Training", "Best Practices"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: "Outstanding work on our AI-powered platform. The quality and attention to detail exceeded our expectations.",
      rating: 5,
      image: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Michael Chen",
      role: "Product Manager at StartupXYZ",
      content: "Delivered a complex full-stack application on time and within budget. Highly recommend!",
      rating: 5,
      image: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder at InnovateLab",
      content: "The machine learning model transformed our business operations. Incredible technical expertise.",
      rating: 5,
      image: "photo-1438761681033-6461ffad8d80"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "30+", label: "Happy Clients", icon: <Heart className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Zap className="w-6 h-6" /> }
  ];

  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    ai: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas"],
    tools: ["Docker", "AWS", "Git", "Redis", "Socket.io"]
  };

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2020-2022",
      specialization: "Artificial Intelligence & Machine Learning",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "MIT",
      year: "2016-2020",
      specialization: "Software Engineering",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      level: "Professional",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2023",
      level: "Professional",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2022",
      level: "Certification",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera - Stanford",
      year: "2022",
      level: "Specialization",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">Portfolio</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-blue-400 transition-colors duration-300 story-link"
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="flex flex-col space-y-4 p-4">
              {['Home', 'About', 'Services', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Enhanced Parallax Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        
        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`
              }}
            />
          ))}
        </div>

        {/* Enhanced Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
          />
          <div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${-scrollY * 0.1}deg)` }}
          />
          <div 
            className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
            style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.15}deg)` }}
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8 animate-bounce-slow">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              Full Stack &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                AI Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-300">
              Building intelligent web applications and machine learning solutions that solve real-world problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
        
        {/* Enhanced Floating Elements with More Parallax */}
        <div 
          className="absolute top-20 left-10 animate-float"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        >
          <Code className="w-8 h-8 text-blue-400/30" />
        </div>
        <div 
          className="absolute bottom-20 right-10 animate-float animation-delay-1000"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${-scrollY * 0.05}deg)` }}
        >
          <Brain className="w-8 h-8 text-purple-400/30" />
        </div>
        <div 
          className="absolute top-1/2 left-20 animate-float animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.08}deg)` }}
        >
          <Database className="w-6 h-6 text-green-400/30" />
        </div>
        <div 
          className="absolute top-1/3 right-1/4 animate-float animation-delay-3000"
          style={{ transform: `translateY(${scrollY * 0.12}px) rotate(${-scrollY * 0.06}deg)` }}
        >
          <Smartphone className="w-7 h-7 text-cyan-400/30" />
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <section className="py-20 px-4 bg-black/30 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-up group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20 relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate developer who bridges the gap between traditional web development and cutting-edge AI technology. 
                With expertise in both full-stack development and machine learning, I create comprehensive solutions that are both 
                user-friendly and intelligent.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from building scalable web applications to developing sophisticated AI models for real-world applications. 
                I thrive on solving complex problems and turning innovative ideas into reality.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                  <Star className="w-3 h-3 mr-1" />
                  5+ Years Experience
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110">
                  <Star className="w-3 h-3 mr-1" />
                  50+ Projects
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:rotate-12">
                    <Code className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
                  <p className="text-gray-300">End-to-end web solutions</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-all duration-300 group-hover:rotate-12">
                    <Brain className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
                  <p className="text-gray-300">Intelligent systems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Parallax */}
      <section id="services" className="py-20 px-4 relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group overflow-hidden animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-20 group-hover:rotate-12 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300 mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">Education</h2>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white/5 border-white/10 mb-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-slide-in-up group" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-400 font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-400 mb-2">{edu.year}</p>
                      <Badge variant="outline" className="border-purple-400/30 text-purple-300 hover:scale-105 transition-transform duration-300">
                        {edu.specialization}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group animate-slide-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                      <p className="text-orange-400 text-sm mb-1">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">{cert.year}</span>
                        <Badge variant="outline" className="border-orange-400/30 text-orange-300 text-xs hover:scale-105 transition-transform duration-300">
                          {cert.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">Featured Projects</h2>
          
          {/* Full Stack Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-400 mb-8 flex items-center animate-slide-in-left">
              <Code className="w-6 h-6 mr-2" />
              Full Stack Development
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {fullStackProjects.map((project, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group overflow-hidden animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="relative overflow-hidden">
                    <div 
                      className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 group-hover:rotate-12 transition-transform duration-300`}>
                          {project.icon}
                        </div>
                        <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 hover:scale-105 transition-transform duration-300">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 group-hover:border-blue-400 hover:scale-105">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 group-hover:border-blue-400 hover:scale-105">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-8 flex items-center animate-slide-in-left">
              <Brain className="w-6 h-6 mr-2" />
              AI & Machine Learning
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 group overflow-hidden animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="relative overflow-hidden">
                    <div 
                      className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&q=80)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 group-hover:rotate-12 transition-transform duration-300`}>
                          {project.icon}
                        </div>
                        <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">{project.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 hover:scale-105 transition-transform duration-300">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 group-hover:border-purple-400 hover:scale-105">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 group-hover:border-purple-400 hover:scale-105">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-slide-in-up group">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center group-hover:text-blue-300 transition-colors duration-300">
                  <ChevronRight className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-blue-400/30 text-blue-300 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-slide-in-up animation-delay-200 group">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center group-hover:text-green-300 transition-colors duration-300">
                  <ChevronRight className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-green-400/30 text-green-300 hover:bg-green-500/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 animate-slide-in-up animation-delay-400 group">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center group-hover:text-purple-300 transition-colors duration-300">
                  <ChevronRight className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  AI/ML
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-slide-in-up animation-delay-600 group">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center group-hover:text-orange-300 transition-colors duration-300">
                  <ChevronRight className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-orange-400/30 text-orange-300 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in-up">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-in-up animation-delay-300">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need a full-stack application or an AI solution, let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-600">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/20 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.01}deg)`
          }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fade-in-up">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-400/50 mb-4" />
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-blue-400/30 group-hover:border-blue-400 transition-colors duration-300"
                      style={{ backgroundImage: `url(https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=100&q=80)` }}
                    />
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Full Stack & AI Developer. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
