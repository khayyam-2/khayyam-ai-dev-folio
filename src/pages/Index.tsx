import { Github, Linkedin, Mail, Brain, Code2, Smartphone, Database, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const skills = [
    { icon: Brain, label: "Machine Learning & Deep Learning", color: "text-primary" },
    { icon: Code2, label: "Python, Java, XML", color: "text-secondary" },
    { icon: Smartphone, label: "Android Studio & Firebase", color: "text-accent" },
    { icon: Database, label: "TensorFlow, Keras, CNNs", color: "text-primary" },
  ];

  const projects = [
    {
      title: "Plant Disease Detection",
      description: "Android app predicting plant diseases offline using Deep Learning (CNN) and TensorFlow Lite",
      tags: ["Deep Learning", "Android", "TensorFlow Lite", "CNN"],
      icon: "🌿",
    },
    {
      title: "Musculoskeletal Radiography Classification",
      description: "Deep learning model detecting fractures from X-ray images using advanced image classification",
      tags: ["Deep Learning", "Medical AI", "Image Classification"],
      icon: "🧠",
    },
    {
      title: "Speed Meter Bowling App",
      description: "Measures cricket ball speed using Java and device sensors with real-time calculations",
      tags: ["Android", "Java", "Sensors", "Real-time"],
      icon: "📱",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-hero-bg/95 via-background/90 to-hero-bg/95" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <Badge variant="outline" className="text-lg px-6 py-2 border-primary/50 bg-primary/10">
              <Trophy className="w-4 h-4 mr-2 inline" />
              BS Computer Science Student
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
            Hi, I'm Khayyam Abbasi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Passionate about <span className="text-primary font-semibold">Machine Learning</span>, 
            <span className="text-secondary font-semibold"> Deep Learning</span>, and 
            <span className="text-accent font-semibold"> Android Development</span>
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Building intelligent, data-driven solutions and user-friendly applications that make an impact
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Github className="w-5 h-5" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary/50 hover:bg-primary/10">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card hover:bg-card-hover transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardContent className="p-6 text-center">
                  <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
                  <p className="font-medium">{skill.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Badge variant="secondary" className="text-base px-6 py-2">
              Currently Learning: React Native for cross-platform development
            </Badge>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Turning ideas into intelligent solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border/50 bg-card hover:bg-card-hover transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group"
              >
                <CardHeader>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Goal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To become an <span className="text-primary font-semibold">AI-driven mobile app developer</span>, 
            combining intelligence and design to create smart solutions for everyday life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://github.com/khayyam-2/khayyam-project" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-secondary/50 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/khayyam-abbasi-035aa6361/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-accent/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              asChild
            >
              <a href="mailto:abbasikhayyam37@gmail.com">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
          </div>
          
          <p className="text-muted-foreground">
            Open to opportunities and collaborations in AI/ML and Mobile Development
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Khayyam Abbasi. Built with passion for AI and innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;