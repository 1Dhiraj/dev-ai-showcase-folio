
import { Github, ExternalLink, Mail, Linkedin, Code, Brain, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const fullStackProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration, inventory management, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      icon: <Database className="w-6 h-6" />,
      category: "Full Stack"
    },
    {
      title: "WhatsApp Clone",
      description: "Real-time messaging application with group chats, media sharing, and online status",
      tech: ["React", "Socket.io", "Express", "PostgreSQL", "Redis"],
      icon: <Smartphone className="w-6 h-6" />,
      category: "Full Stack"
    }
  ];

  const aiProjects = [
    {
      title: "Deepfake Detection System",
      description: "Advanced AI model to detect manipulated videos and images using deep learning techniques",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn rates and retention strategies",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Data Analytics"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML"
    }
  ];

  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    ai: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas"],
    tools: ["Docker", "AWS", "Git", "Redis", "Socket.io"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Full Stack &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building intelligent web applications and machine learning solutions that solve real-world problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Code className="w-8 h-8 text-blue-400/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <Brain className="w-8 h-8 text-purple-400/30" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate developer who bridges the gap between traditional web development and cutting-edge AI technology. 
                With expertise in both full-stack development and machine learning, I create comprehensive solutions that are both 
                user-friendly and intelligent.
              </p>
              <p className="text-lg text-gray-300">
                My journey spans from building scalable web applications to developing sophisticated AI models for real-world applications. 
                I thrive on solving complex problems and turning innovative ideas into reality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
                  <p className="text-gray-300">End-to-end web solutions</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
                  <p className="text-gray-300">Intelligent systems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          
          {/* Full Stack Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-blue-400 mb-8 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Full Stack Development
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {fullStackProjects.map((project, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {project.icon}
                        <CardTitle className="text-white">{project.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-white/20 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
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
            <h3 className="text-2xl font-semibold text-purple-400 mb-8 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              AI & Machine Learning
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {project.icon}
                        <CardTitle className="text-white">{project.title}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-white/20 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
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

      {/* Skills Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-blue-400">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-blue-400/30 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-green-400">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-green-400/30 text-green-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-purple-400">AI/ML</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-purple-400/30 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-orange-400">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-orange-400/30 text-orange-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you need a full-stack application or an AI solution, let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
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
