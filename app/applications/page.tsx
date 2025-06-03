"use client"

import { useState } from "react"
import {
  Calendar,
  Clock,
  Eye,
  FileText,
  MapPin,
  MoreHorizontal,
  Search,
  Star,
  Trophy,
  CheckCircle,
  XCircle,
  AlertCircle,
  Gift,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type ApplicationStatus = "submitted" | "reviewing" | "interviewing" | "offer" | "rejected" | "withdrawn"

interface Application {
  id: string
  jobTitle: string
  company: string
  location: string
  appliedDate: string
  status: ApplicationStatus
  resumeUsed: string
  timeline: {
    stage: string
    date: string
    status: "completed" | "current" | "pending"
    description?: string
  }[]
}

const applications: Application[] = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    company: "Emirates NBD",
    location: "Dubai, UAE",
    appliedDate: "2024-01-15",
    status: "offer",
    resumeUsed: "UAE_Professional_Resume.pdf",
    timeline: [
      { stage: "Application Submitted", date: "2024-01-15", status: "completed" },
      { stage: "Application Reviewed", date: "2024-01-18", status: "completed" },
      { stage: "Technical Interview", date: "2024-01-22", status: "completed" },
      { stage: "Final Interview", date: "2024-01-25", status: "completed" },
      { stage: "Offer Extended", date: "2024-01-28", status: "current" },
    ],
  },
  {
    id: "2",
    jobTitle: "UI/UX Designer",
    company: "Careem",
    location: "Dubai, UAE",
    appliedDate: "2024-01-20",
    status: "interviewing",
    resumeUsed: "UAE_Creative_Resume.pdf",
    timeline: [
      { stage: "Application Submitted", date: "2024-01-20", status: "completed" },
      { stage: "Portfolio Review", date: "2024-01-23", status: "completed" },
      { stage: "Design Challenge", date: "2024-01-26", status: "current" },
      { stage: "Team Interview", date: "2024-01-30", status: "pending" },
    ],
  },
  {
    id: "3",
    jobTitle: "Full Stack Developer",
    company: "Noon",
    location: "Riyadh, Saudi Arabia",
    appliedDate: "2024-01-10",
    status: "rejected",
    resumeUsed: "UAE_Professional_Resume.pdf",
    timeline: [
      { stage: "Application Submitted", date: "2024-01-10", status: "completed" },
      { stage: "Application Reviewed", date: "2024-01-12", status: "completed" },
      { stage: "Technical Assessment", date: "2024-01-15", status: "completed" },
      {
        stage: "Application Declined",
        date: "2024-01-17",
        status: "completed",
        description: "Position filled internally",
      },
    ],
  },
  {
    id: "4",
    jobTitle: "React Developer",
    company: "Talabat",
    location: "Dubai, UAE",
    appliedDate: "2024-01-25",
    status: "reviewing",
    resumeUsed: "UAE_Modern_Resume.pdf",
    timeline: [
      { stage: "Application Submitted", date: "2024-01-25", status: "completed" },
      { stage: "Application Under Review", date: "2024-01-26", status: "current" },
    ],
  },
  {
    id: "5",
    jobTitle: "Frontend Engineer",
    company: "Mashreq Bank",
    location: "Abu Dhabi, UAE",
    appliedDate: "2024-01-12",
    status: "submitted",
    resumeUsed: "UAE_Professional_Resume.pdf",
    timeline: [{ stage: "Application Submitted", date: "2024-01-12", status: "completed" }],
  },
]

const getStatusColor = (status: ApplicationStatus) => {
  switch (status) {
    case "offer":
      return "bg-green-100 text-green-800 border-green-200"
    case "interviewing":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "reviewing":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "submitted":
      return "bg-gray-100 text-gray-800 border-gray-200"
    case "rejected":
      return "bg-red-100 text-red-800 border-red-200"
    case "withdrawn":
      return "bg-orange-100 text-orange-800 border-orange-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getStatusIcon = (status: ApplicationStatus) => {
  switch (status) {
    case "offer":
      return <Gift className="h-4 w-4" />
    case "interviewing":
      return <Clock className="h-4 w-4" />
    case "reviewing":
      return <Eye className="h-4 w-4" />
    case "submitted":
      return <CheckCircle className="h-4 w-4" />
    case "rejected":
      return <XCircle className="h-4 w-4" />
    case "withdrawn":
      return <AlertCircle className="h-4 w-4" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

export default function ApplicationsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)

  const filteredApplications = applications.filter((app) => {
    const matchesStatus = selectedStatus === "all" || app.status === selectedStatus
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const stats = {
    total: applications.length,
    submitted: applications.filter((app) => app.status === "submitted").length,
    interviewing: applications.filter((app) => app.status === "interviewing").length,
    offers: applications.filter((app) => app.status === "offer").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
  }

  return (
    <div className="wrapper">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg mb-1">Application Status Tracker</h1>
          <p className="text-muted-foreground">Track your job applications and their progress</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total Applications</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-600">{stats.submitted}</div>
            <div className="text-sm text-muted-foreground">Submitted</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.interviewing}</div>
            <div className="text-sm text-muted-foreground">Interviewing</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.offers}</div>
            <div className="text-sm text-muted-foreground">Offers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Gamified Badges */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Application Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
              <Trophy className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-sm">First Application Sent</div>
                <div className="text-xs text-muted-foreground">Earned on Jan 10, 2024</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
              <Star className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-sm">Application Streak</div>
                <div className="text-xs text-muted-foreground">5 applications this month</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg opacity-60">
              <Gift className="h-5 w-5 text-gray-400" />
              <div>
                <div className="font-medium text-sm">Interview Master</div>
                <div className="text-xs text-muted-foreground">Complete 10 interviews</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by job title or company..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Applications</SelectItem>
            <SelectItem value="submitted">Submitted</SelectItem>
            <SelectItem value="reviewing">Under Review</SelectItem>
            <SelectItem value="interviewing">Interviewing</SelectItem>
            <SelectItem value="offer">Offer</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
            <SelectItem value="withdrawn">Withdrawn</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Applications Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Job Title</th>
                  <th className="text-left p-4 font-medium">Company</th>
                  <th className="text-left p-4 font-medium">Applied Date</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Resume Used</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="border-b hover:bg-muted/50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{application.jobTitle}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {application.location}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={application.company} />
                          <AvatarFallback>{application.company.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{application.company}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(application.appliedDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={`${getStatusColor(application.status)} flex items-center gap-1 w-fit`}>
                        {getStatusIcon(application.status)}
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-sm">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        {application.resumeUsed}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedApplication(application)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                              <DialogTitle>Application Timeline</DialogTitle>
                              <DialogDescription>
                                {application.jobTitle} at {application.company}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              {application.timeline.map((stage, index) => (
                                <div key={index} className="flex items-start gap-4">
                                  <div className="flex flex-col items-center">
                                    <div
                                      className={`rounded-full p-2 ${
                                        stage.status === "completed"
                                          ? "bg-green-100 text-green-600"
                                          : stage.status === "current"
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-gray-100 text-gray-400"
                                      }`}
                                    >
                                      {stage.status === "completed" ? (
                                        <CheckCircle className="h-4 w-4" />
                                      ) : stage.status === "current" ? (
                                        <Clock className="h-4 w-4" />
                                      ) : (
                                        <div className="h-4 w-4 rounded-full border-2 border-current" />
                                      )}
                                    </div>
                                    {index < application.timeline.length - 1 && (
                                      <div className="w-px h-8 bg-border mt-2" />
                                    )}
                                  </div>
                                  <div className="flex-1 pb-4">
                                    <div className="flex items-center justify-between">
                                      <h3 className="font-medium">{stage.stage}</h3>
                                      <span className="text-sm text-muted-foreground">
                                        {new Date(stage.date).toLocaleDateString()}
                                      </span>
                                    </div>
                                    {stage.description && (
                                      <p className="text-sm text-muted-foreground mt-1">{stage.description}</p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Job Details</DropdownMenuItem>
                            <DropdownMenuItem>Download Resume</DropdownMenuItem>
                            {application.status !== "withdrawn" && application.status !== "rejected" && (
                              <DropdownMenuItem className="text-destructive">Withdraw Application</DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {filteredApplications.length === 0 && (
        <Card className="mt-6">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Search className="h-10 w-10 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-1">No applications found</h3>
            <p className="text-muted-foreground text-center">
              {searchQuery || selectedStatus !== "all"
                ? "Try adjusting your search or filters"
                : "Start applying to jobs to see them here"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
