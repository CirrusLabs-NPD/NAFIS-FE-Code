"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe,
  GraduationCap,
  Info,
  Loader2,
  Plus,
  Save,
  Trash2,
  User,
  X,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function ProfileBuilderPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [profileCompletion, setProfileCompletion] = useState(65)
  const [skills, setSkills] = useState<string[]>([
    "JavaScript",
    "React",
    "Node.js",
    "UI/UX Design",
    "Project Management",
  ])
  const [newSkill, setNewSkill] = useState("")
  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2018",
    },
  ])
  const [experience, setExperience] = useState([
    {
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      period: "2018 - 2021",
      description:
        "Developed and maintained web applications using React and Redux. Collaborated with UX designers to implement responsive designs.",
    },
    {
      title: "Senior Developer",
      company: "InnovateSoft",
      period: "2021 - Present",
      description:
        "Leading frontend development team, implementing best practices and modern frameworks. Mentoring junior developers.",
    },
  ])

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
      setProfileCompletion(Math.min(profileCompletion + 2, 100))
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
    setProfileCompletion(Math.max(profileCompletion - 2, 0))
  }

  const addEducation = () => {
    setEducation([...education, { degree: "", institution: "", year: "" }])
  }

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index))
    setProfileCompletion(Math.max(profileCompletion - 5, 0))
  }

  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...education]
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    }
    setEducation(updatedEducation)
  }

  const addExperience = () => {
    setExperience([...experience, { title: "", company: "", period: "", description: "" }])
  }

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index))
    setProfileCompletion(Math.max(profileCompletion - 5, 0))
  }

  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperience = [...experience]
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    }
    setExperience(updatedExperience)
  }

  const handleSubmit = () => {
    setIsLoading(true)

    // Simulate saving profile
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="wrapper max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="heading-lg mb-2">Build Your Profile</h1>
        <p className="text-muted-foreground">
          We&apos;ve parsed your CV and pre-filled some information. Review and complete your profile below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>

            {/* Basic Info Tab */}
            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>Your personal and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button size="sm" variant="outline">
                        Change Photo
                      </Button>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Jane" className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input id="title" defaultValue="Senior Frontend Developer" className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="San Francisco, CA" className="w-full" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Professional Summary</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Experienced Frontend Developer with 5+ years of expertise in building modern, responsive web applications. Proficient in React, JavaScript, and UI/UX design. Passionate about creating intuitive and efficient user experiences."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input id="website" defaultValue="https://janedoe.com" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue="linkedin.com/in/janedoe" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Skills & Expertise
                  </CardTitle>
                  <CardDescription>Showcase your professional capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="add-skill">Add Skills</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>Add relevant technical and soft skills</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="flex gap-2">
                        <Input
                          id="add-skill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder="e.g. JavaScript, Project Management"
                          className="flex-1"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault()
                              addSkill()
                            }
                          }}
                        />
                        <Button type="button" onClick={addSkill} disabled={!newSkill}>
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Add Skill</span>
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Your Skills</Label>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="flex items-center gap-1 py-1 px-3">
                            {skill}
                            <button
                              className="ml-1 text-muted-foreground hover:text-foreground"
                              onClick={() => removeSkill(skill)}
                            >
                              <X className="h-3 w-3" />
                              <span className="sr-only">Remove {skill}</span>
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skill-level">Skill Level</Label>
                      <Select defaultValue="senior">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your overall experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                          <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                          <SelectItem value="expert">Expert/Lead (8+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Areas of Expertise</Label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "Frontend Development",
                          "UI/UX Design",
                          "Backend Development",
                          "Mobile Development",
                          "Cloud Solutions",
                          "DevOps",
                          "Data Analysis",
                          "Project Management",
                        ].map((area) => (
                          <div key={area} className="flex items-center space-x-2">
                            <Switch
                              id={`area-${area}`}
                              defaultChecked={["Frontend Development", "UI/UX Design"].includes(area)}
                            />
                            <Label htmlFor={`area-${area}`}>{area}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Education
                  </CardTitle>
                  <CardDescription>Your educational background and qualifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="space-y-4 pb-4 border-b last:border-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">Education #{index + 1}</h3>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-destructive"
                            onClick={() => removeEducation(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`degree-${index}`}>Degree/Certificate</Label>
                            <Input
                              id={`degree-${index}`}
                              value={edu.degree}
                              onChange={(e) => updateEducation(index, "degree", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`institution-${index}`}>Institution</Label>
                            <Input
                              id={`institution-${index}`}
                              value={edu.institution}
                              onChange={(e) => updateEducation(index, "institution", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`year-${index}`}>Graduation Year</Label>
                            <Input
                              id={`year-${index}`}
                              value={edu.year}
                              onChange={(e) => updateEducation(index, "year", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button type="button" variant="outline" className="w-full gap-1" onClick={addEducation}>
                      <Plus className="h-4 w-4" />
                      Add Education
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Work Experience
                  </CardTitle>
                  <CardDescription>Your professional work history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="space-y-4 pb-6 border-b last:border-0">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">Position #{index + 1}</h3>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-destructive"
                            onClick={() => removeExperience(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`title-${index}`}>Job Title</Label>
                            <Input
                              id={`title-${index}`}
                              value={exp.title}
                              onChange={(e) => updateExperience(index, "title", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`company-${index}`}>Company</Label>
                            <Input
                              id={`company-${index}`}
                              value={exp.company}
                              onChange={(e) => updateExperience(index, "company", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`period-${index}`}>Period</Label>
                            <Input
                              id={`period-${index}`}
                              value={exp.period}
                              onChange={(e) => updateExperience(index, "period", e.target.value)}
                              placeholder="e.g. 2018 - 2021"
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor={`description-${index}`}>Job Description</Label>
                            <Textarea
                              id={`description-${index}`}
                              value={exp.description}
                              onChange={(e) => updateExperience(index, "description", e.target.value)}
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button type="button" variant="outline" className="w-full gap-1" onClick={addExperience}>
                      <Plus className="h-4 w-4" />
                      Add Work Experience
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex justify-between">
            <Button variant="outline">Save Draft</Button>
            <Button onClick={handleSubmit} disabled={isLoading} className="gap-2">
              {isLoading ? (
                <>
                  Saving Profile
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Complete Profile
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="md:w-1/3">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Profile Completion</CardTitle>
              <CardDescription>
                Complete your profile to increase your chances of finding the perfect job
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{profileCompletion}%</span>
                </div>
                <Progress value={profileCompletion} className="h-2" />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium mb-2">Remaining Tasks</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    {
                      label: "Complete basic information",
                      completed: true,
                    },
                    {
                      label: "Add profile picture",
                      completed: false,
                    },
                    {
                      label: "Add at least 5 skills",
                      completed: skills.length >= 5,
                    },
                    {
                      label: "Add education details",
                      completed: education.length > 0 && education[0].institution !== "",
                    },
                    {
                      label: "Add work experience",
                      completed: experience.length > 0 && experience[0].company !== "",
                    },
                    {
                      label: "Verify email address",
                      completed: true,
                    },
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div
                        className={`rounded-full p-0.5 mt-0.5 ${task.completed ? "bg-primary text-primary-foreground" : "border border-muted"}`}
                      >
                        {task.completed ? <Check className="h-3 w-3" /> : <div className="h-3 w-3" />}
                      </div>
                      <span className={task.completed ? "text-muted-foreground line-through" : ""}>{task.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">AI Suggestions</h3>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="text-primary hover:underline cursor-pointer">Add TypeScript to your skills</li>
                  <li className="text-primary hover:underline cursor-pointer">
                    Specify your frontend framework expertise
                  </li>
                  <li className="text-primary hover:underline cursor-pointer">
                    Add more details to your work experience
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" size="sm" className="gap-2">
                <Save className="h-4 w-4" />
                Save Progress
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Steps indicator */}
      <div className="mt-8 flex justify-between">
        <div className="flex items-center">
          <div className="rounded-full size-8 bg-primary text-primary-foreground flex items-center justify-center">
            <Check className="size-4" />
          </div>
          <span className="ml-2 text-sm font-medium">Upload CV</span>
        </div>
        <div className="flex-1 mx-4 border-t border-dashed my-4"></div>
        <div className="flex items-center">
          <div className="rounded-full size-8 bg-primary text-primary-foreground flex items-center justify-center">
            <span className="text-xs font-medium">2</span>
          </div>
          <span className="ml-2 text-sm font-medium">Build Profile</span>
        </div>
        <div className="flex-1 mx-4 border-t border-dashed my-4"></div>
        <div className="flex items-center">
          <div className="rounded-full size-8 border border-muted bg-muted text-muted-foreground flex items-center justify-center">
            <span className="text-xs font-medium">3</span>
          </div>
          <span className="ml-2 text-sm text-muted-foreground">Complete Setup</span>
        </div>
      </div>
    </div>
  )
}
