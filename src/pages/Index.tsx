import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, MapPin, GraduationCap, Users, Beaker, FileText, Calendar, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-quantum.jpg";
import zizweChase from "@/assets/pi-profile.jpg";
import saraMetwalli from "@/assets/team-member-3.jpg";
import hessamShahbazi from "@/assets/team-member-2.jpg";
import mohsenBagheri from "@/assets/team-member-1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-quantum-light to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <a className="flex items-center space-x-2" href="/">
              <span className="inline-block font-bold text-xl">Chase Research Group</span>
            </a>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#research" className="transition-colors hover:text-primary">Research</a>
            <a href="#publications" className="transition-colors hover:text-primary">Publications</a>
            <a href="#team" className="transition-colors hover:text-primary">Team</a>
            <a href="#news" className="transition-colors hover:text-primary">News</a>
            <a href="#openings" className="transition-colors hover:text-primary">Openings</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Quantum research visualization" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-quantum-blue/80 to-quantum-teal/80" />
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Chase Research Group
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
              Exploring the frontiers of quantum technologies through innovative research in quantum materials and devices, quantum computing algorithms, and quantum information theory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Explore Research <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-quantum-blue">
                View Publications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our interdisciplinary approach combines theoretical foundations with experimental breakthroughs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-quantum-blue/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-quantum-blue text-white">
                    <Beaker className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Quantum Computing</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Developing quantum algorithms, quantum information theory, and exploring applications in optimization and machine learning for quantum systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Quantum Algorithms</Badge>
                  <Badge variant="secondary">Quantum Information</Badge>
                  <Badge variant="secondary">Quantum ML</Badge>
                  <Badge variant="secondary">Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-quantum-teal/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-quantum-teal text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Quantum Materials</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Investigating quantum materials and devices, nanoscale interfacial dynamics, and quantum photonic systems for next-generation quantum technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Quantum Materials</Badge>
                  <Badge variant="secondary">Quantum Devices</Badge>
                  <Badge variant="secondary">Quantum Photonics</Badge>
                  <Badge variant="secondary">Energy Materials</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Recent Publications</h2>
            <p className="text-xl text-muted-foreground">Latest research contributions to the field</p>
          </div>
          <div className="grid gap-6">
            {[
              {
                title: "Quantum Photonic Devices for Next-Generation Computing",
                authors: "Chase, Z., Bagheri Tabar, M., & Shahbazi, H.",
                journal: "Advanced Quantum Technologies",
                year: "2024",
                doi: "10.1002/qute.202400xxx"
              },
              {
                title: "Machine Learning-Driven Design of Quantum Materials",
                authors: "Metwalli, S., Chase, Z., & Bagheri Tabar, M.",
                journal: "npj Quantum Materials",
                year: "2024",
                doi: "10.1038/s41535-024-xxxx"
              },
              {
                title: "Interfacial Electrochemistry in Quantum Energy Systems",
                authors: "Shahbazi, H., Chase, Z., & Walsh, R.",
                journal: "Nature Energy",
                year: "2023",
                doi: "10.1038/s41560-023-xxxx"
              }
            ].map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-quantum-blue">{pub.title}</h3>
                      <p className="text-muted-foreground mb-2">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">{pub.journal}</span> ({pub.year})
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="shrink-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              View All Publications
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">Meet our researchers and collaborators</p>
          </div>

          {/* Principal Investigator */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Principal Investigator</h3>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <img 
                    src={zizweChase} 
                    alt="Dr. Zizwe Chase" 
                    className="w-48 h-48 rounded-lg object-cover"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-bold mb-2">Dr. Zizwe Chase</h4>
                    <p className="text-quantum-blue font-medium mb-4">Assistant Professor of Electrical & Computer Engineering</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Dr. Chase is an Assistant Professor in the Electrical and Computer Engineering Department at the University of Illinois Chicago. He earned his Ph.D. in Chemical Engineering from Washington State University. His research spans from interfacial electrochemistry and CO₂ reduction to quantum technologies, where he investigates quantum materials, device architectures, and nanoscale interfacial dynamics for next-generation quantum photonic and energy systems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Button variant="outline" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        CV & Publications
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Research Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Sara Metwalli",
                  role: "Postdoctoral Researcher",
                  image: saraMetwalli,
                  bio: "Quantum computing researcher with M.Sc. from Tokyo Institute of Technology. Former lecturer at Keio University and instructor at Tokyo Coding Club.",
                  research: "Quantum computing, quantum mechanics applications"
                },
                {
                  name: "Hessam Shahbazi",
                  role: "Ph.D. Student",
                  image: hessamShahbazi,
                  bio: "Researcher specializing in quantum materials and energy applications. Leads quantum-mechanical modeling and experimental investigations of energy materials with experience at Tesla.",
                  research: "Quantum materials, CO₂ reduction, energy storage, 2D materials"
                },
                {
                  name: "Mohsen Bagheri Tabar",
                  role: "Ph.D. Student",
                  image: mohsenBagheri,
                  bio: "Ph.D. student in ECE focusing on quantum photonic devices and nanoelectronics. M.Sc. in Micro & Nanoelectronic Devices from K. N. Toosi University.",
                  research: "Quantum photonic devices, nanoelectronics, ML-driven materials design"
                },
                {
                  name: "Ryan Walsh",
                  role: "M.Sc. Student",
                  image: mohsenBagheri,
                  bio: "Master's student contributing to quantum energy systems research and interfacial electrochemistry investigations.",
                  research: "Quantum energy systems, electrochemical interfaces"
                }
              ].map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                    <p className="text-quantum-blue font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Research:</strong> {member.research}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-xl text-muted-foreground">Recent developments and achievements</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                date: "Fall 2023",
                title: "New Faculty Position",
                content: "Dr. Zizwe Chase joined UIC as Assistant Professor in the Electrical and Computer Engineering Department, establishing the Chase Research Group."
              },
              {
                date: "2024",
                title: "DOE ReACT-QISE Grant",
                content: "Awarded Department of Energy grant for 'Reaching an Advanced Computing Technologies Workforce through Education Initiatives in Quantum Information Science and Engineering' as Co-PI."
              },
              {
                date: "2024",
                title: "Research Expansion",
                content: "Research group expands focus on quantum photonic devices and machine learning-driven materials design with new Ph.D. students joining the team."
              },
              {
                date: "2024",
                title: "International Collaboration",
                content: "Continuing research collaborations from previous work at NIMS Japan on interfacial electrochemistry and CO₂ reduction in quantum systems."
              },
              {
                date: "2023",
                title: "Team Growth",
                content: "Dr. Sara Metwalli joins as postdoctoral researcher, bringing expertise in quantum computing and international research experience from Tokyo Institute of Technology."
              },
              {
                date: "2023",
                title: "Lab Establishment",
                content: "Chase Research Group lab facilities established at UIC with focus on quantum materials characterization and quantum photonic device development."
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-quantum-blue font-medium">
                    <Calendar className="h-4 w-4" />
                    {news.date}
                  </div>
                  <CardTitle className="text-lg leading-tight">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{news.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section id="openings" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">Join our research team</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-quantum-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-quantum-blue" />
                  PhD Positions
                </CardTitle>
                <CardDescription>
                  Multiple PhD positions available in quantum computing and quantum materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Full funding available through research assistantships</li>
                  <li>• Opportunities for internships at leading tech companies</li>
                  <li>• Collaborative environment with access to state-of-the-art facilities</li>
                  <li>• Strong track record of graduate placement in academia and industry</li>
                </ul>
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Apply for PhD Position
                </Button>
              </CardContent>
            </Card>

            <Card className="border-quantum-teal/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-quantum-teal" />
                  Postdoctoral Fellowship
                </CardTitle>
                <CardDescription>
                  Seeking postdocs with expertise in quantum algorithms or materials science
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Competitive salary and benefits package</li>
                  <li>• 2-3 year positions with possibility of extension</li>
                  <li>• Access to national laboratory facilities</li>
                  <li>• Mentorship for career development in academia or industry</li>
                </ul>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Postdoc Application
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Interested in joining our team? We encourage applications from candidates of all backgrounds.
            </p>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Chase Research Group</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exploring the frontiers of quantum technologies through innovative research in quantum materials and devices, quantum computing algorithms, and quantum information theory.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  ECE Department, University of Illinois Chicago
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  1011 SEO, 851 S. Morgan St, Chicago, IL 60607
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  zchase@uic.edu
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#research" className="block text-muted-foreground hover:text-primary transition-colors">Research Areas</a>
                <a href="#publications" className="block text-muted-foreground hover:text-primary transition-colors">Publications</a>
                <a href="#team" className="block text-muted-foreground hover:text-primary transition-colors">Team</a>
                <a href="#openings" className="block text-muted-foreground hover:text-primary transition-colors">Open Positions</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Chase Research Group, University of Illinois Chicago. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;