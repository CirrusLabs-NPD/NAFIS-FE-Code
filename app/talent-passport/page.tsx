"use client"

import { useState } from "react"
import {
  Check,
  Download,
  Edit,
  FileText,
  GraduationCap,
  BadgeIcon as IdCard,
  Linkedin,
  MapPin,
  RefreshCw,
  Shield,
  Star,
  Briefcase,
  Award,
  Calendar,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TalentPassportPage() {
  const [passportCompletion, setPassportCompletion] = useState(78)
  const [syncStatus, setSyncStatus] = useState({
    linkedin: "synced",
    government: "synced",
    lms: "pending",
  })

  const educationHistory = [
    {
      degree: "Bachelor of Computer Science",
      institution: "United Arab Emirates University",
      year: "2018-2022",
      grade: "3.8 GPA",
      verified: true,
    },
    {
      degree: "High School Diploma",
      institution: "Al Ain English Speaking School",
      year: "2016-2018",
      grade: "95%",
      verified: true,
    },
  ]

  const employmentHistory = [
    {
      title: "Frontend Developer",
      company: "Emirates NBD",
      period: "2022 - Present",
      location: "Dubai, UAE",
      description: "Developing digital banking solutions using React and TypeScript",
      verified: true,
    },
    {
      title: "Junior Developer Intern",
      company: "Etisalat Digital",
      period: "Summer 2021",
      location: "Abu Dhabi, UAE",
      description: "Mobile app development and UI/UX design",
      verified: true,
    },
  ]

  const skills = [
    { name: "JavaScript", level: "Expert", verified: true },
    { name: "React", level: "Advanced", verified: true },
    { name: "TypeScript", level: "Intermediate", verified: false },
    { name: "Arabic (Native)", level: "Native", verified: true },
    { name: "English", level: "Fluent", verified: true },
    { name: "Project Management", level: "Intermediate", verified: false },
  ]

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      verified: true,
    },
    {
      name: "React Professional Certificate",
      issuer: "Meta",
      date: "2022",
      verified: true,
    },
  ]

  return (
    <div className="wrapper max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg mb-1 flex items-center gap-2">
            <IdCard className="h-6 w-6 text-primary" />
            Digital Talent Passport
          </h1>
          <p className="text-muted-foreground">Your verified career profile powered by CirrusLabs</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export UAE CV
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Edit className="h-4 w-4" />
                Update Info
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Update Profile Information</DialogTitle>
                <DialogDescription>
                  Update your talent passport information. Changes will be verified before being added to your profile.
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="employment">Employment</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Ahmed" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Al Mansouri" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" defaultValue="Frontend Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select defaultValue="dubai">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dubai">Dubai, UAE</SelectItem>
                        <SelectItem value="abudhabi">Abu Dhabi, UAE</SelectItem>
                        <SelectItem value="sharjah">Sharjah, UAE</SelectItem>
                        <SelectItem value="ajman">Ajman, UAE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="degree">Degree/Certificate</Label>
                    <Input id="degree" placeholder="e.g. Bachelor of Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input id="institution" placeholder="e.g. UAE University" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startYear">Start Year</Label>
                      <Input id="startYear" placeholder="2018" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endYear">End Year</Label>
                      <Input id="endYear" placeholder="2022" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="employment" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" placeholder="e.g. Frontend Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="e.g. Emirates NBD" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Job Description</Label>
                    <Textarea id="description" placeholder="Describe your role and responsibilities" />
                  </div>
                </TabsContent>
                <TabsContent value="skills" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="skillName">Skill Name</Label>
                    <Input id="skillName" placeholder="e.g. JavaScript" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skillLevel">Proficiency Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Ahmed Al Mansouri" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">Ahmed Al Mansouri</h2>
                    <p className="text-muted-foreground">Frontend Developer</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Dubai, UAE</span>
                      <Badge variant="secondary" className="ml-2">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Emirates ID</div>
                  <div className="font-mono text-sm">784-****-*******-1</div>
                  <Badge variant="outline" className="mt-1">
                    <Check className="h-3 w-3 mr-1" />
                    Gov. Verified
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Experienced Frontend Developer with 2+ years in the UAE banking sector. Passionate about creating
                user-friendly digital solutions that serve the UAE's vision for digital transformation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Arabic</Badge>
                <Badge>English</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Education History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {educationHistory.map((edu, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="rounded-full p-2 bg-primary/10">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{edu.degree}</h3>
                        {edu.verified && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <Check className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{edu.year}</span>
                        <span>Grade: {edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Employment History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Employment History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employmentHistory.map((job, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className="rounded-full p-2 bg-primary/10">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{job.title}</h3>
                        {job.verified && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <Check className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{job.company}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>
                      <p className="text-sm mt-2">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Inventory */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Skills Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        {skill.verified && <Check className="h-4 w-4 text-green-600" />}
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full ${
                            i <
                            (
                              skill.level === "Expert"
                                ? 4
                                : skill.level === "Advanced"
                                  ? 3
                                  : skill.level === "Intermediate"
                                    ? 2
                                    : 1
                            )
                              ? "bg-primary"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full p-2 bg-primary/10">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                    {cert.verified && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Passport Completion */}
          <Card>
            <CardHeader>
              <CardTitle>Passport Completion</CardTitle>
              <CardDescription>Complete your profile to unlock more opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{passportCompletion}%</span>
                </div>
                <Progress value={passportCompletion} className="h-2" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Remaining Tasks</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: "Add professional photo", completed: true },
                    { label: "Verify government ID", completed: true },
                    { label: "Add 2 more certifications", completed: false },
                    { label: "Complete skill assessments", completed: false },
                    { label: "Add portfolio projects", completed: false },
                  ].map((task, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div
                        className={`rounded-full p-0.5 ${
                          task.completed ? "bg-primary text-primary-foreground" : "border border-muted"
                        }`}
                      >
                        {task.completed ? <Check className="h-3 w-3" /> : <div className="h-3 w-3" />}
                      </div>
                      <span className={task.completed ? "text-muted-foreground line-through" : ""}>{task.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* API Sync Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Data Sync Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">LinkedIn</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <Check className="h-3 w-3 mr-1" />
                    Synced
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Government DB</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <Check className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">LMS Platform</span>
                  </div>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Pending
                  </Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <RefreshCw className="h-4 w-4" />
                Sync All Data
              </Button>
            </CardContent>
          </Card>

          {/* Resume Builder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                UAE Resume Builder
              </CardTitle>
              <CardDescription>Generate UAE-standard resume formats</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Template Style</Label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional UAE</SelectItem>
                    <SelectItem value="modern">Modern UAE</SelectItem>
                    <SelectItem value="executive">Executive UAE</SelectItem>
                    <SelectItem value="creative">Creative UAE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="english">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="bilingual">Bilingual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                  <FileText className="h-4 w-4" />
                  Preview
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
