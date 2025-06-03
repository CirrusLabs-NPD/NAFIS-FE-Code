"use client"

import { useState } from "react"
import { Check, Download, Eye, FileText, LinkIcon, Loader2, Plus, Save, Share2, Trash2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"

export default function CVBuilderPage() {
  const [activeStep, setActiveStep] = useState(1)
  const [progress, setProgress] = useState(20)
  const [selectedTemplate, setSelectedTemplate] = useState("professional")
  const [isLoading, setIsLoading] = useState(false)
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const templates = [
    {
      id: "professional",
      name: "Professional",
      description: "Clean and corporate design suitable for traditional industries",
      thumbnail: "/placeholder.svg?height=120&width=90",
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design with creative layout",
      thumbnail: "/placeholder.svg?height=120&width=90",
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated design for senior positions",
      thumbnail: "/placeholder.svg?height=120&width=90",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold design for creative industries",
      thumbnail: "/placeholder.svg?height=120&width=90",
    },
  ]

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Ahmed",
    lastName: "Al Mansouri",
    email: "ahmed.almansouri@example.com",
    phone: "+971 50 123 4567",
    location: "Dubai, UAE",
    title: "Senior Frontend Developer",
    summary:
      "Experienced Frontend Developer with 5+ years of expertise in building modern, responsive web applications. Proficient in React, JavaScript, and UI/UX design.",
    linkedin: "linkedin.com/in/ahmedalmansouri",
    website: "ahmedalmansouri.com",
  })

  const [workExperience, setWorkExperience] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Emirates NBD",
      location: "Dubai, UAE",
      startDate: "2022-01",
      endDate: "Present",
      current: true,
      description:
        "Developing digital banking solutions using React and TypeScript. Leading a team of 3 developers and implementing best practices.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Etisalat Digital",
      location: "Abu Dhabi, UAE",
      startDate: "2019-03",
      endDate: "2021-12",
      current: false,
      description:
        "Developed responsive web applications and mobile interfaces. Collaborated with UX designers to implement user-friendly interfaces.",
    },
  ])

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "United Arab Emirates University",
      location: "Al Ain, UAE",
      startDate: "2015",
      endDate: "2019",
      description: "Graduated with honors. Specialized in Software Engineering.",
    },
  ])

  const [skills, setSkills] = useState([
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "JavaScript", level: "Expert" },
    { id: 3, name: "TypeScript", level: "Advanced" },
    { id: 4, name: "HTML/CSS", level: "Expert" },
    { id: 5, name: "Node.js", level: "Intermediate" },
    { id: 6, name: "UI/UX Design", level: "Advanced" },
  ])

  const [languages, setLanguages] = useState([
    { id: 1, name: "Arabic", level: "Native" },
    { id: 2, name: "English", level: "Fluent" },
  ])

  const handleNextStep = () => {
    const nextStep = activeStep + 1
    setActiveStep(nextStep)
    setProgress(nextStep * 20)
  }

  const handlePrevStep = () => {
    const prevStep = activeStep - 1
    setActiveStep(prevStep)
    setProgress(prevStep * 20)
  }

  const handleAddWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        id: Date.now(),
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ])
  }

  const handleRemoveWorkExperience = (id: number) => {
    setWorkExperience(workExperience.filter((exp) => exp.id !== id))
  }

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        id: Date.now(),
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ])
  }

  const handleRemoveEducation = (id: number) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const handleAddSkill = () => {
    setSkills([...skills, { id: Date.now(), name: "", level: "Beginner" }])
  }

  const handleRemoveSkill = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  const handleAddLanguage = () => {
    setLanguages([...languages, { id: Date.now(), name: "", level: "Beginner" }])
  }

  const handleRemoveLanguage = (id: number) => {
    setLanguages(languages.filter((lang) => lang.id !== id))
  }

  const handleGenerateCV = () => {
    setIsLoading(true)
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setIsPreviewMode(true)
    }, 1500)
  }

  const handleUploadResume = () => {
    setIsLoading(true)
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false)
      // Data is already pre-filled
    }, 2000)
  }

  return (
    <div className="wrapper max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg mb-1">CV Builder</h1>
          <p className="text-muted-foreground">Create a professional CV in minutes</p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" />
                Upload Resume
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Your Resume</DialogTitle>
                <DialogDescription>
                  Upload your existing resume and our AI will automatically fill in your information.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="font-medium mb-1">Drag and drop your resume here</p>
                  <p className="text-sm text-muted-foreground mb-4">Supports PDF, DOCX (max 5MB)</p>
                  <Button size="sm">Browse Files</Button>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" className="gap-2" onClick={() => {}}>
                  Cancel
                </Button>
                <Button className="gap-2" onClick={handleUploadResume} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      Upload & Process
                    </>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            variant={isPreviewMode ? "default" : "outline"}
            className="gap-2"
            onClick={() => setIsPreviewMode(!isPreviewMode)}
          >
            <Eye className="h-4 w-4" />
            {isPreviewMode ? "Edit Mode" : "Preview"}
          </Button>
        </div>
      </div>

      {/* Progress Tracker */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between">
              {["Template", "Personal", "Experience", "Education", "Skills"].map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${activeStep > index + 1 ? "text-primary" : activeStep === index + 1 ? "text-primary font-medium" : "text-muted-foreground"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      activeStep > index + 1
                        ? "bg-primary text-primary-foreground"
                        : activeStep === index + 1
                          ? "border-2 border-primary text-primary"
                          : "border border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    {activeStep > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
                  </div>
                  <span className="text-xs">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {isPreviewMode ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>CV Preview</CardTitle>
                <CardDescription>This is how your CV will look</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-8 bg-white">
                  {/* CV Preview based on selected template */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h1 className="text-2xl font-bold mb-1">
                        {personalInfo.firstName} {personalInfo.lastName}
                      </h1>
                      <p className="text-lg text-muted-foreground mb-2">{personalInfo.title}</p>
                      <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {personalInfo.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {personalInfo.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {personalInfo.location}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div>
                      <h2 className="text-lg font-semibold border-b pb-1 mb-2">Professional Summary</h2>
                      <p>{personalInfo.summary}</p>
                    </div>

                    {/* Work Experience */}
                    <div>
                      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Work Experience</h2>
                      <div className="space-y-4">
                        {workExperience.map((exp) => (
                          <div key={exp.id}>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{exp.title}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                              </div>
                              <div className="text-sm text-right">
                                <p>
                                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                </p>
                                <p className="text-muted-foreground">{exp.location}</p>
                              </div>
                            </div>
                            <p className="text-sm mt-2">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Education</h2>
                      <div className="space-y-4">
                        {education.map((edu) => (
                          <div key={edu.id}>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{edu.degree}</h3>
                                <p className="text-muted-foreground">{edu.institution}</p>
                              </div>
                              <div className="text-sm text-right">
                                <p>
                                  {edu.startDate} - {edu.endDate}
                                </p>
                                <p className="text-muted-foreground">{edu.location}</p>
                              </div>
                            </div>
                            <p className="text-sm mt-2">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill.id} variant="secondary">
                            {skill.name} ({skill.level})
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h2 className="text-lg font-semibold border-b pb-1 mb-3">Languages</h2>
                      <div className="flex flex-wrap gap-4">
                        {languages.map((lang) => (
                          <div key={lang.id}>
                            <span className="font-medium">{lang.name}:</span> {lang.level}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setIsPreviewMode(false)}>
                  Back to Edit
                </Button>
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        Download as PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        Download as DOCX
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>CV Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Template</Label>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {templates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Font</Label>
                  <Select defaultValue="inter">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="arial">Arial</SelectItem>
                      <SelectItem value="times">Times New Roman</SelectItem>
                      <SelectItem value="calibri">Calibri</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Color Scheme</Label>
                  <Select defaultValue="default">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="blue">Professional Blue</SelectItem>
                      <SelectItem value="green">Modern Green</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="bilingual">Bilingual (Eng/Ar)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-photo">Show Photo</Label>
                    <Switch id="show-photo" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-links">Show Social Links</Label>
                    <Switch id="show-links" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {activeStep === 1
                    ? "Choose a Template"
                    : activeStep === 2
                      ? "Personal Information"
                      : activeStep === 3
                        ? "Work Experience"
                        : activeStep === 4
                          ? "Education"
                          : "Skills & Languages"}
                </CardTitle>
                <CardDescription>
                  {activeStep === 1
                    ? "Select a template for your CV"
                    : activeStep === 2
                      ? "Enter your personal details"
                      : activeStep === 3
                        ? "Add your work experience"
                        : activeStep === 4
                          ? "Add your education history"
                          : "Add your skills and languages"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Step 1: Template Selection */}
                {activeStep === 1 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {templates.map((template) => (
                      <div
                        key={template.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-all ${
                          selectedTemplate === template.id
                            ? "border-primary bg-primary/5"
                            : "hover:border-muted-foreground/50"
                        }`}
                        onClick={() => setSelectedTemplate(template.id)}
                      >
                        <div className="aspect-[3/4] mb-2 bg-muted rounded overflow-hidden">
                          <img
                            src={template.thumbnail || "/placeholder.svg"}
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium text-sm">{template.name}</h3>
                          <p className="text-xs text-muted-foreground">{template.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {activeStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={personalInfo.firstName}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={personalInfo.lastName}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input
                        id="title"
                        value={personalInfo.title}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={personalInfo.email}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={personalInfo.phone}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={personalInfo.location}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <div className="relative">
                          <LinkIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="linkedin"
                            className="pl-10"
                            value={personalInfo.linkedin}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <div className="relative">
                          <LinkIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="website"
                            className="pl-10"
                            value={personalInfo.website}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, website: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Textarea
                        id="summary"
                        rows={4}
                        value={personalInfo.summary}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Work Experience */}
                {activeStep === 3 && (
                  <div className="space-y-6">
                    {workExperience.map((exp, index) => (
                      <div key={exp.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">Work Experience #{index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleRemoveWorkExperience(exp.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`job-title-${exp.id}`}>Job Title</Label>
                              <Input
                                id={`job-title-${exp.id}`}
                                value={exp.title}
                                onChange={(e) => {
                                  const updated = workExperience.map((item) =>
                                    item.id === exp.id ? { ...item, title: e.target.value } : item,
                                  )
                                  setWorkExperience(updated)
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`company-${exp.id}`}>Company</Label>
                              <Input
                                id={`company-${exp.id}`}
                                value={exp.company}
                                onChange={(e) => {
                                  const updated = workExperience.map((item) =>
                                    item.id === exp.id ? { ...item, company: e.target.value } : item,
                                  )
                                  setWorkExperience(updated)
                                }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`location-${exp.id}`}>Location</Label>
                            <Input
                              id={`location-${exp.id}`}
                              value={exp.location}
                              onChange={(e) => {
                                const updated = workExperience.map((item) =>
                                  item.id === exp.id ? { ...item, location: e.target.value } : item,
                                )
                                setWorkExperience(updated)
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`start-date-${exp.id}`}>Start Date</Label>
                              <Input
                                id={`start-date-${exp.id}`}
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => {
                                  const updated = workExperience.map((item) =>
                                    item.id === exp.id ? { ...item, startDate: e.target.value } : item,
                                  )
                                  setWorkExperience(updated)
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label htmlFor={`end-date-${exp.id}`}>End Date</Label>
                                <div className="flex items-center space-x-2">
                                  <Label htmlFor={`current-${exp.id}`} className="text-sm">
                                    Current
                                  </Label>
                                  <Switch
                                    id={`current-${exp.id}`}
                                    checked={exp.current}
                                    onCheckedChange={(checked) => {
                                      const updated = workExperience.map((item) =>
                                        item.id === exp.id ? { ...item, current: checked } : item,
                                      )
                                      setWorkExperience(updated)
                                    }}
                                  />
                                </div>
                              </div>
                              <Input
                                id={`end-date-${exp.id}`}
                                type="month"
                                value={exp.endDate}
                                disabled={exp.current}
                                onChange={(e) => {
                                  const updated = workExperience.map((item) =>
                                    item.id === exp.id ? { ...item, endDate: e.target.value } : item,
                                  )
                                  setWorkExperience(updated)
                                }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`description-${exp.id}`}>Description</Label>
                            <Textarea
                              id={`description-${exp.id}`}
                              rows={3}
                              value={exp.description}
                              onChange={(e) => {
                                const updated = workExperience.map((item) =>
                                  item.id === exp.id ? { ...item, description: e.target.value } : item,
                                )
                                setWorkExperience(updated)
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full gap-2" onClick={handleAddWorkExperience}>
                      <Plus className="h-4 w-4" />
                      Add Work Experience
                    </Button>
                  </div>
                )}

                {/* Step 4: Education */}
                {activeStep === 4 && (
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={edu.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-medium">Education #{index + 1}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleRemoveEducation(edu.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor={`degree-${edu.id}`}>Degree/Certificate</Label>
                            <Input
                              id={`degree-${edu.id}`}
                              value={edu.degree}
                              onChange={(e) => {
                                const updated = education.map((item) =>
                                  item.id === edu.id ? { ...item, degree: e.target.value } : item,
                                )
                                setEducation(updated)
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                            <Input
                              id={`institution-${edu.id}`}
                              value={edu.institution}
                              onChange={(e) => {
                                const updated = education.map((item) =>
                                  item.id === edu.id ? { ...item, institution: e.target.value } : item,
                                )
                                setEducation(updated)
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`location-${edu.id}`}>Location</Label>
                            <Input
                              id={`location-${edu.id}`}
                              value={edu.location}
                              onChange={(e) => {
                                const updated = education.map((item) =>
                                  item.id === edu.id ? { ...item, location: e.target.value } : item,
                                )
                                setEducation(updated)
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`start-date-${edu.id}`}>Start Year</Label>
                              <Input
                                id={`start-date-${edu.id}`}
                                value={edu.startDate}
                                onChange={(e) => {
                                  const updated = education.map((item) =>
                                    item.id === edu.id ? { ...item, startDate: e.target.value } : item,
                                  )
                                  setEducation(updated)
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`end-date-${edu.id}`}>End Year</Label>
                              <Input
                                id={`end-date-${edu.id}`}
                                value={edu.endDate}
                                onChange={(e) => {
                                  const updated = education.map((item) =>
                                    item.id === edu.id ? { ...item, endDate: e.target.value } : item,
                                  )
                                  setEducation(updated)
                                }}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`description-${edu.id}`}>Description</Label>
                            <Textarea
                              id={`description-${edu.id}`}
                              rows={3}
                              value={edu.description}
                              onChange={(e) => {
                                const updated = education.map((item) =>
                                  item.id === edu.id ? { ...item, description: e.target.value } : item,
                                )
                                setEducation(updated)
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full gap-2" onClick={handleAddEducation}>
                      <Plus className="h-4 w-4" />
                      Add Education
                    </Button>
                  </div>
                )}

                {/* Step 5: Skills & Languages */}
                {activeStep === 5 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Skills</h3>
                      {skills.map((skill, index) => (
                        <div key={skill.id} className="flex items-center gap-4">
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`skill-name-${skill.id}`}>Skill</Label>
                              <Input
                                id={`skill-name-${skill.id}`}
                                value={skill.name}
                                onChange={(e) => {
                                  const updated = skills.map((item) =>
                                    item.id === skill.id ? { ...item, name: e.target.value } : item,
                                  )
                                  setSkills(updated)
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`skill-level-${skill.id}`}>Level</Label>
                              <Select
                                value={skill.level}
                                onValueChange={(value) => {
                                  const updated = skills.map((item) =>
                                    item.id === skill.id ? { ...item, level: value } : item,
                                  )
                                  setSkills(updated)
                                }}
                              >
                                <SelectTrigger id={`skill-level-${skill.id}`}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Beginner">Beginner</SelectItem>
                                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                                  <SelectItem value="Advanced">Advanced</SelectItem>
                                  <SelectItem value="Expert">Expert</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleRemoveSkill(skill.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" className="gap-2" onClick={handleAddSkill}>
                        <Plus className="h-4 w-4" />
                        Add Skill
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-medium">Languages</h3>
                      {languages.map((lang, index) => (
                        <div key={lang.id} className="flex items-center gap-4">
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor={`lang-name-${lang.id}`}>Language</Label>
                              <Input
                                id={`lang-name-${lang.id}`}
                                value={lang.name}
                                onChange={(e) => {
                                  const updated = languages.map((item) =>
                                    item.id === lang.id ? { ...item, name: e.target.value } : item,
                                  )
                                  setLanguages(updated)
                                }}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`lang-level-${lang.id}`}>Proficiency</Label>
                              <Select
                                value={lang.level}
                                onValueChange={(value) => {
                                  const updated = languages.map((item) =>
                                    item.id === lang.id ? { ...item, level: value } : item,
                                  )
                                  setLanguages(updated)
                                }}
                              >
                                <SelectTrigger id={`lang-level-${lang.id}`}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Beginner">Beginner</SelectItem>
                                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                                  <SelectItem value="Advanced">Advanced</SelectItem>
                                  <SelectItem value="Fluent">Fluent</SelectItem>
                                  <SelectItem value="Native">Native</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive"
                            onClick={() => handleRemoveLanguage(lang.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" className="gap-2" onClick={handleAddLanguage}>
                        <Plus className="h-4 w-4" />
                        Add Language
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep} disabled={activeStep === 1}>
                  Previous
                </Button>
                {activeStep < 5 ? (
                  <Button onClick={handleNextStep}>Next</Button>
                ) : (
                  <Button onClick={handleGenerateCV} disabled={isLoading} className="gap-2">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" />
                        Generate CV
                      </>
                    )}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Tips & Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeStep === 1 && (
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Professional Template:</span> Best for traditional industries like
                      banking, finance, and government.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Modern Template:</span> Great for tech, marketing, and startups.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Executive Template:</span> Ideal for senior positions and leadership
                      roles.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Creative Template:</span> Perfect for design, media, and creative
                      industries.
                    </p>
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Professional Title:</span> Be specific about your role and
                      expertise.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Summary:</span> Keep it concise (3-5 sentences) and highlight your
                      key strengths.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Contact Info:</span> Ensure your email and phone number are
                      professional and up-to-date.
                    </p>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Work Experience:</span> List your experiences in reverse
                      chronological order (most recent first).
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Job Descriptions:</span> Use action verbs and quantify achievements
                      when possible.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Relevance:</span> Focus on experiences most relevant to the job
                      you're applying for.
                    </p>
                  </div>
                )}
                {activeStep === 4 && (
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Education:</span> Include relevant certifications and courses.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Recent Graduates:</span> Highlight academic achievements, projects,
                      and relevant coursework.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Experienced Professionals:</span> Keep education brief unless
                      directly relevant to the position.
                    </p>
                  </div>
                )}
                {activeStep === 5 && (
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Skills:</span> Include both technical and soft skills relevant to
                      the job.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Languages:</span> Be honest about your proficiency level.
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Prioritize:</span> List your strongest and most relevant skills
                      first.
                    </p>
                  </div>
                )}
                <Separator />
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-xs text-blue-800">
                    <span className="font-medium">AI Tip:</span> Your profile shows strong frontend development skills.
                    Consider highlighting your React expertise and UI/UX experience prominently in your CV.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-xs text-amber-800">
                    <span className="font-medium">Note:</span> Autofilled using AI – Please verify all details before
                    finalizing your CV.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  <Save className="h-4 w-4" />
                  Save Draft
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
