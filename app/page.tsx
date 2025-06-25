"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, LinkedinIcon as LinkedIn, Download } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

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
                Testimonials
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
            <img
              src="/profile.jpg"
              alt="Ujwal Kumar - Profile picture"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 shadow-lg object-cover w-[200px] h-[200px]"
            />
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Hello, I'm Ujwal</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Partnership specialist & Fintech enthusiast with a passion for launching Go-to-Market strategies, fostering
            collaborations, and helping guide the development of innovative solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/ujwal-resume.pdf"
                link.download = "Ujwal_Kumar_Resume.pdf"
                link.target = "_blank"
                link.rel = "noopener noreferrer"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-primary border-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
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
                I'm a passionate business professional with expertise in modern financial technology. I thrive in
                utilizing consultative selling to solve complex organizational problems through strategic partnerships
                and joint product offerings.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                When I'm not working, you'll find me keeping myself active, capturing moments through photography, or
                getting hands-on with the latest tech trends.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-primary border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/ujwal-kumar98" target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$800,000</div>
                  <div className="text-sm text-slate-600">Lifetime Revenue Generated</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-slate-600">Successful Market Expansions</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
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
                      <CardTitle>Director of Channel Sales - Middle East and Africa</CardTitle>
                      <CardDescription>Signzy Technologies Private Limited. • December 2021 - May 2025</CardDescription>
                    </div>
                    <Badge variant="default">Full-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-4 text-slate-600">
                    <li>
                      Directed the full sales cycle for every client, including the creation of customized PowerPoint
                      presentations, gathering and analyzing customer requirements, delivering tailored solutions, and
                      preparing commercial proposals aligned with customer budgets and needs
                    </li>
                    <li>
                      Owned the Mastercard partner account at a global scale. Responsibilities include:
                      <ol className="ml-6 mt-2 space-y-1 list-decimal">
                        <li>Evangelise Signzy's value proposition across various Mastercard geographies and teams</li>
                        <li>Submit quarterly revenue-sharing figures of Signzy and Mastercard customers</li>
                        <li>Identify and lead co-selling opportunities to Mastercard customers</li>
                        <li>Address gaps in Signzy offerings by procuring and reselling Mastercard services</li>
                      </ol>
                    </li>
                    <li>
                      Served as the primary point of contact at Signzy in collaboration with Mastercard and a Mobile
                      Point-of-Sale provider to develop Mastercard's All-in-One Merchant Solution. Sathapana Bank, a
                      leading merchant acquirer in Cambodia, became the first customer.
                      <ol className="ml-6 mt-2 space-y-1 list-decimal">
                        <li>
                          Led internal efforts to secure development resources by aligning project priorities with
                          senior management
                        </li>
                        <li>
                          Coordinated the drafting and finalization of tri-party legal agreements and co-branded
                          marketing collateral
                        </li>
                        <li>
                          Represented Signzy in discussions with Sathapana Bank's leadership to articulate the strategic
                          benefits of being an early adopter of the AIO Merchant Solution
                        </li>
                      </ol>
                    </li>
                    <li>
                      Led the fastest closure of an enterprise customer in Signzy, the Middle East's leading payment
                      facilitator, with a TCV of $250,000
                      <ol className="ml-6 mt-2 space-y-1 list-decimal">
                        <li>
                          Coordinated with Legal, Information Security, Product, Engineering, and Architecture teams to
                          successfully submit the RFP within 3 days of release
                        </li>
                        <li>Led multiple successful platform demonstrations for C-Suite executives</li>
                        <li>
                          Drafted the commercial proposal by working with multiple internal stakeholders, including
                          company management
                        </li>
                      </ol>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        Founder's Staff - Business Development and Strategy Associate - North America
                      </CardTitle>
                      <CardDescription>
                        Signzy Technologies Private Limited • December 2020 - December 2021
                      </CardDescription>
                    </div>
                    <Badge variant="default">Full-time</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                    <li>
                      Sourced, engaged, and closed the company's first U.S. deal, View Trade Securities, with a
                      sales-cycle period of 2 months and an LCV of over $100,000
                      <ol className="ml-6 mt-2 space-y-1 list-decimal">
                        <li>
                          Hosted biweekly client success calls to support use case expansion and track client KPIs
                        </li>
                        <li>
                          Directed the development team on the prioritization of 5+ product requirements necessary to
                          sign the customer successfully
                        </li>
                      </ol>
                    </li>
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
                  <CardTitle className="text-lg">Software Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="info">Hunter.io</Badge>
                    <Badge variant="info">HubSpot CRM</Badge>
                    <Badge variant="info">Salesforce CRM</Badge>
                    <Badge variant="info">Excel Pivot Tables</Badge>
                    <Badge variant="info">Excel vLookup</Badge>
                    <Badge variant="info">SAP GUI</Badge>
                    <Badge variant="info">SAP Lumira</Badge>
                    <Badge variant="info">IBM SPSS</Badge>
                    <Badge variant="info">FactSet</Badge>
                    <Badge variant="info">LinkedIn Sales Navigator</Badge>
                    <Badge variant="info">HubSpot Automation</Badge>
                    <Badge variant="info">Lucid Charts</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sales Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success">Stakeholder Management</Badge>
                    <Badge variant="success">Commercial Negotiations</Badge>
                    <Badge variant="success">Account Management</Badge>
                    <Badge variant="success">Upsell & Cross-sell</Badge>
                    <Badge variant="success">Solution-based Sales</Badge>
                    <Badge variant="success">RFP Submissions</Badge>
                    <Badge variant="success">API Demonstrations</Badge>
                    <Badge variant="success">MQL to SQL Conversion</Badge>
                    <Badge variant="success">Funnel Management</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI & Tech Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="warning">Front-end Development</Badge>
                    <Badge variant="warning">Back-end Development</Badge>
                    <Badge variant="warning">Process Automation</Badge>
                    <Badge variant="warning">Content Writing</Badge>
                    <Badge variant="warning">Infographic Design</Badge>
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
                    <CardTitle>Bachelor of Science in Management, minor in Corporate Finance</CardTitle>
                    <CardDescription>Bentley University • 2016 - 2020</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">
                    Degree
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-slate-600">
                  <p>Dean's list - 2017, 2019.</p>
                  <div className="mt-2">
                    <strong>Relevant Coursework:</strong>
                    <ol className="ml-6 mt-1 space-y-1 list-decimal">
                      <li>Organizational, Societal, and Responsible Management (3.7/4.0)</li>
                      <li>New Venture Planning and Financing (3.3/4.0)</li>
                      <li>Advanced Managerial Finance (3.3/4.0)</li>
                      <li>Management of International Operations (3.3/4.0)</li>
                      <li>Global Strategy (3.3/4.0)</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 italic text-slate-600 mb-4">"[Testimonial Placeholder]"</blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold">[Client Name Placeholder]</p>
                    <p className="text-sm text-slate-500">[Client Position Placeholder], [Company Name Placeholder]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-accent">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 italic text-slate-600 mb-4">"[Testimonial Placeholder]"</blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold">[Client Name Placeholder]</p>
                    <p className="text-sm text-slate-500">
                      [Client Job Title Placeholder], [Client Company Placeholder]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 italic text-slate-600 mb-4">"[Testimonial Placeholder]"</blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold">[Client Name Placeholder]</p>
                    <p className="text-sm text-slate-500">[Job Title Placeholder],[Company Name Placeholder]</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Get in Touch</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>ujwalkkumar9@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+971-585788959</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Dubai, U.A.E</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Ujwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
