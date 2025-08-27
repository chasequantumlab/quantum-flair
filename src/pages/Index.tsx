import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, MapPin, GraduationCap, Users, Beaker, FileText, Calendar, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-quantum.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import piProfile from "@/assets/pi-profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-quantum-light to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <a className="flex items-center space-x-2" href="/">
              <span className="inline-block font-bold text-xl">Quantum Research Group</span>
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
              Advancing Quantum Computing & Materials Science
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed">
              Exploring the frontiers of quantum technologies through innovative research in quantum computing algorithms, quantum materials, and quantum information theory.
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
                  Developing quantum algorithms, error correction methods, and exploring applications in optimization, cryptography, and machine learning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Quantum Algorithms</Badge>
                  <Badge variant="secondary">Error Correction</Badge>
                  <Badge variant="secondary">Quantum ML</Badge>
                  <Badge variant="secondary">Cryptography</Badge>
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
                  Investigating novel quantum materials, topological phases, and strongly correlated electron systems for next-generation quantum devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Topological Materials</Badge>
                  <Badge variant="secondary">2D Materials</Badge>
                  <Badge variant="secondary">Superconductors</Badge>
                  <Badge variant="secondary">Spin Systems</Badge>
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
                title: "Quantum Error Correction in Noisy Intermediate-Scale Quantum Devices",
                authors: "Smith, J., Johnson, A., & Lee, K.",
                journal: "Nature Quantum Information",
                year: "2024",
                doi: "10.1038/s41534-024-00xxx"
              },
              {
                title: "Topological Phase Transitions in Two-Dimensional Quantum Materials",
                authors: "Johnson, A., Chen, L., & Smith, J.",
                journal: "Physical Review Letters",
                year: "2024",
                doi: "10.1103/PhysRevLett.132.xxx"
              },
              {
                title: "Machine Learning Enhanced Quantum State Tomography",
                authors: "Lee, K., Smith, J., & Wilson, M.",
                journal: "Quantum Science and Technology",
                year: "2023",
                doi: "10.1088/2058-9565/abxxxx"
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
                    src={piProfile} 
                    alt="Dr. Sarah Johnson" 
                    className="w-48 h-48 rounded-lg object-cover"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-bold mb-2">Dr. Sarah Johnson</h4>
                    <p className="text-quantum-blue font-medium mb-4">Professor of Physics & Computer Science</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Dr. Johnson leads our quantum research initiatives with over 15 years of experience in quantum computing and materials science. Her work focuses on quantum error correction and the development of fault-tolerant quantum algorithms. She has published over 80 peer-reviewed articles and holds several patents in quantum technologies.
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
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Alex Chen",
                  role: "Postdoctoral Researcher",
                  image: teamMember1,
                  bio: "Specializes in quantum materials synthesis and characterization. PhD in Condensed Matter Physics from MIT.",
                  research: "2D quantum materials, topological insulators"
                },
                {
                  name: "Dr. Michael Rodriguez",
                  role: "Research Scientist",
                  image: teamMember2,
                  bio: "Expert in quantum algorithms and computational methods. Former quantum software engineer at IBM.",
                  research: "Quantum algorithms, optimization, machine learning"
                },
                {
                  name: "Dr. Emily Zhang",
                  role: "Postdoctoral Fellow",
                  image: teamMember3,
                  bio: "Focuses on quantum error correction and fault-tolerant quantum computing protocols.",
                  research: "Error correction, quantum codes, fault tolerance"
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
                date: "March 2024",
                title: "NSF Grant Awarded",
                content: "Our group received a $2.5M NSF grant to develop quantum error correction protocols for near-term quantum devices."
              },
              {
                date: "February 2024",
                title: "Nature Publication",
                content: "New breakthrough in quantum error correction published in Nature Quantum Information, showing 99.9% fidelity in logical qubit operations."
              },
              {
                date: "January 2024",
                title: "New Team Member",
                content: "Dr. Emily Zhang joins our team as a postdoctoral fellow, bringing expertise in fault-tolerant quantum computing."
              },
              {
                date: "December 2023",
                title: "Conference Award",
                content: "Best Paper Award at Quantum Computing Conference 2023 for work on topological quantum materials."
              },
              {
                date: "November 2023",
                title: "Industry Collaboration",
                content: "Partnership established with leading quantum computing company for hardware validation of our algorithms."
              },
              {
                date: "October 2023",
                title: "PhD Defense",
                content: "Congratulations to our PhD student Mark Wilson for successfully defending his thesis on quantum machine learning."
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
              <h3 className="font-bold text-lg mb-4">Quantum Research Group</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Advancing the frontiers of quantum computing and materials science through innovative research and collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Department of Physics, University Campus
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@quantumresearch.edu
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
            © 2024 Quantum Research Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;