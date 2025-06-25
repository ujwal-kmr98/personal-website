import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, LinkedinIcon as LinkedIn, Github, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">Ujwal</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                About
              </Button>
              <Button variant="ghost" size="sm">
                Resume
              </Button>
              <Button variant="ghost" size="sm">
                Gallery
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile picture"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 shadow-lg"
            />
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Hello, I'm Ujwal</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Software Developer & Creative Professional passionate about building innovative solutions and capturing
            life's moments.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                I'm a passionate software developer with expertise in modern web technologies. I love creating
                user-friendly applications and solving complex problems through code.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                When I'm not coding, you'll find me exploring new places, capturing moments through photography, or
                learning about the latest tech trends.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <LinkedIn className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-sm text-slate-600">Technologies</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Resume</h3>

          {/* Experience */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6">Experience</h4>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Senior Software Developer</CardTitle>
                      <CardDescription>Tech Company Inc. • 2022 - Present</CardDescription>
                    </div>
                    <Badge variant="secondary">Full-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Led development of web applications using React, Next.js, and TypeScript</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Developer</CardTitle>
                      <CardDescription>Startup Solutions • 2020 - 2022</CardDescription>
                    </div>
                    <Badge variant="secondary">Full-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>Developed and maintained web applications using modern JavaScript frameworks</li>
                    <li>Implemented responsive designs and optimized application performance</li>
                    <li>Worked closely with designers to create intuitive user interfaces</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6">Skills</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>HTML/CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>REST APIs</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Vercel</Badge>
                    <Badge>Figma</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Education</h4>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription>University Name • 2016 - 2020</CardDescription>
                  </div>
                  <Badge variant="outline">Degree</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Graduated with honors. Relevant coursework: Data Structures, Algorithms, Software Engineering,
                  Database Systems, Web Development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Gallery image ${i}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Get in Touch</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-600" />
                  <span>hello@ujwal.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-600" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'd love to hear from you!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <input className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md h-24"></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Ujwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
