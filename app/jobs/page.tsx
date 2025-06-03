"use client"

import { DialogFooter } from "@/components/ui/dialog"

import { useState } from "react"
import { ArrowUpDown, Briefcase, Clock, Filter, MapPin, Search, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const toggleSaveJob = (id: number) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter((jobId) => jobId !== id))
    } else {
      setSavedJobs([...savedJobs, id])
    }
  }

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      logo: "/placeholder.svg?height=40&width=40",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      match: 98,
      posted: "2 days ago",
      skills: ["React", "TypeScript", "CSS"],
      description:
        "We are looking for a Senior Frontend Developer to join our team. You will be responsible for developing and implementing user interface components using React.js and other frontend technologies.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignHub",
      logo: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      match: 92,
      posted: "3 days ago",
      skills: ["Figma", "UI Design", "User Research"],
      description:
        "As a UI/UX Designer, you will create user-centered designs by understanding business requirements, user feedback, and user research insights. You will create wireframes, prototypes, and high-fidelity mockups.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Innovate Studios",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Remote",
      type: "Contract",
      salary: "$90,000 - $120,000",
      match: 87,
      posted: "1 week ago",
      skills: ["React", "Node.js", "MongoDB"],
      description:
        "We're seeking a Full Stack Developer to build modern web applications. You'll work on both frontend and backend development, collaborating with a cross-functional team to deliver features from conception to deployment.",
    },
    {
      id: 4,
      title: "Product Designer",
      company: "CreativeMinds",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      match: 85,
      posted: "5 days ago",
      skills: ["Product Design", "Sketch", "Prototyping"],
      description:
        "Join our team as a Product Designer to create intuitive and beautiful digital products. You'll collaborate with product managers, developers, and stakeholders to define product requirements and create user-centered designs.",
    },
    {
      id: 5,
      title: "Frontend Engineer",
      company: "WebSolutions",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      match: 82,
      posted: "2 weeks ago",
      skills: ["JavaScript", "Vue.js", "HTML/CSS"],
      description:
        "As a Frontend Engineer, you will develop and maintain web applications using modern JavaScript frameworks. You'll work closely with designers to implement responsive, cross-browser compatible interfaces.",
    },
    {
      id: 6,
      title: "UX Researcher",
      company: "UserFocus",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$95,000 - $125,000",
      match: 79,
      posted: "3 days ago",
      skills: ["User Research", "Usability Testing", "Data Analysis"],
      description:
        "We're looking for a UX Researcher to help us understand user behaviors, needs, and motivations through methodical research techniques. You'll plan and conduct user research and usability testing to inform product decisions.",
    },
  ]

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="wrapper min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg mb-1">Job Matches</h1>
          <p className="text-muted-foreground">AI-powered job recommendations based on your profile</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar - Filters */}
        <div className="hidden lg:block w-72 space-y-6">
          <div className="sticky top-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Job Type</h3>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Experience Level</h3>
                  <div className="space-y-2">
                    {["Entry Level", "Mid Level", "Senior", "Director/Executive"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={`level-${level}`} />
                        <Label htmlFor={`level-${level}`} className="text-sm">
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Salary Range</h3>
                  <div className="space-y-2">
                    {["Under $80k", "$80k - $100k", "$100k - $130k", "$130k - $150k", "$150k+"].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox id={`salary-${range}`} />
                        <Label htmlFor={`salary-${range}`} className="text-sm">
                          {range}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Skills</h3>
                  <div className="space-y-2">
                    {["JavaScript", "React", "TypeScript", "UI/UX Design", "Node.js", "Product Design"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox id={`skill-${skill}`} />
                        <Label htmlFor={`skill-${skill}`} className="text-sm">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <Button variant="outline" className="w-full">
                  Reset Filters
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search jobs, companies, or skills..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <ArrowUpDown className="h-4 w-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Match %</DropdownMenuItem>
                  <DropdownMenuItem>Newest</DropdownMenuItem>
                  <DropdownMenuItem>Salary: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Salary: Low to High</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2 lg:hidden">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="flex items-center">
                      <Filter className="mr-2 h-5 w-5" />
                      Filters
                    </SheetTitle>
                    <SheetDescription>Refine your job search</SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Job Type</h3>
                      <div className="space-y-2">
                        {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-type-${type}`} />
                            <Label htmlFor={`mobile-type-${type}`} className="text-sm">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Experience Level</h3>
                      <div className="space-y-2">
                        {["Entry Level", "Mid Level", "Senior", "Director/Executive"].map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-level-${level}`} />
                            <Label htmlFor={`mobile-level-${level}`} className="text-sm">
                              {level}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Salary Range</h3>
                      <div className="space-y-2">
                        {["Under $80k", "$80k - $100k", "$100k - $130k", "$130k - $150k", "$150k+"].map((range) => (
                          <div key={range} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-salary-${range}`} />
                            <Label htmlFor={`mobile-salary-${range}`} className="text-sm">
                              {range}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Apply Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <Search className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">No jobs found</h3>
                  <p className="text-muted-foreground text-center">
                    Try adjusting your search or filters to find more opportunities.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredJobs.map((job) => (
                <Card key={job.id} className={selectedJob === job.id ? "border-primary" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12 rounded">
                        <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
                        <AvatarFallback>{job.company.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium">{job.title}</h3>
                            <p className="text-muted-foreground">{job.company}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge className="bg-primary">{job.match}% Match</Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => toggleSaveJob(job.id)}
                            >
                              <Star
                                className={`h-5 w-5 ${
                                  savedJobs.includes(job.id) ? "fill-primary text-primary" : "text-muted-foreground"
                                }`}
                              />
                              <span className="sr-only">{savedJobs.includes(job.id) ? "Unsave" : "Save"} job</span>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2 mb-3">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Briefcase className="mr-1 h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            {job.posted}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="gap-2">
                                <Sparkles className="h-4 w-4" />
                                Apply with AI
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[525px]">
                              <DialogHeader>
                                <DialogTitle>AI Application Assistant</DialogTitle>
                                <DialogDescription>
                                  Let our AI create a customized application for "{job.title}" at {job.company}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <RadioGroup defaultValue="customize">
                                  <div className="flex items-start space-x-3 space-y-0 border rounded-md p-4">
                                    <RadioGroupItem value="customize" id="customize" className="mt-1" />
                                    <div className="space-y-1">
                                      <Label htmlFor="customize" className="font-medium">
                                        Customize Application
                                      </Label>
                                      <p className="text-sm text-muted-foreground">
                                        AI will generate a cover letter and highlight relevant skills based on your
                                        profile
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-start space-x-3 space-y-0 border rounded-md p-4">
                                    <RadioGroupItem value="standard" id="standard" className="mt-1" />
                                    <div className="space-y-1">
                                      <Label htmlFor="standard" className="font-medium">
                                        Standard Application
                                      </Label>
                                      <p className="text-sm text-muted-foreground">
                                        Apply with your existing resume without AI customization
                                      </p>
                                    </div>
                                  </div>
                                </RadioGroup>

                                <div className="space-y-2">
                                  <Label htmlFor="additional-notes">Additional Notes</Label>
                                  <textarea
                                    id="additional-notes"
                                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="Add any information you'd like to include in your application"
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button type="submit" className="gap-2">
                                  <Sparkles className="h-4 w-4" />
                                  Submit Application
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
