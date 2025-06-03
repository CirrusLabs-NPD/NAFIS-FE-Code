"use client"

import { useState } from "react"
import {
  Award,
  BadgeCheck,
  BookOpen,
  Crown,
  FileCheck,
  Gift,
  GraduationCap,
  Medal,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface Achievement {
  id: string
  title: string
  description: string
  icon: any
  category: "profile" | "learning" | "application" | "engagement"
  points: number
  earned: boolean
  date?: string
  progress?: number
  level?: number
  maxLevel?: number
}

export default function AchievementsPage() {
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [filterCategory, setFilterCategory] = useState<string>("all")

  const achievements: Achievement[] = [
    {
      id: "1",
      title: "Profile Perfectionist",
      description: "Complete your profile 100%",
      icon: BadgeCheck,
      category: "profile",
      points: 100,
      earned: true,
      date: "2024-01-15",
    },
    {
      id: "2",
      title: "Resume Master",
      description: "Create 3 different resume versions",
      icon: FileCheck,
      category: "profile",
      points: 150,
      earned: true,
      date: "2024-01-20",
    },
    {
      id: "3",
      title: "Skill Collector",
      description: "Add 10+ verified skills to your profile",
      icon: Star,
      category: "profile",
      points: 200,
      earned: false,
      progress: 70,
    },
    {
      id: "4",
      title: "Learning Enthusiast",
      description: "Complete 5 courses",
      icon: BookOpen,
      category: "learning",
      points: 250,
      earned: true,
      date: "2024-02-05",
      level: 2,
      maxLevel: 3,
    },
    {
      id: "5",
      title: "Knowledge Seeker",
      description: "Spend 50+ hours on learning",
      icon: GraduationCap,
      category: "learning",
      points: 300,
      earned: false,
      progress: 60,
    },
    {
      id: "6",
      title: "First Application",
      description: "Submit your first job application",
      icon: Medal,
      category: "application",
      points: 50,
      earned: true,
      date: "2024-01-10",
    },
    {
      id: "7",
      title: "Application Streak",
      description: "Apply to 5 jobs in one week",
      icon: Zap,
      category: "application",
      points: 150,
      earned: true,
      date: "2024-02-01",
    },
    {
      id: "8",
      title: "Interview Ace",
      description: "Get invited to 3 interviews",
      icon: Trophy,
      category: "application",
      points: 300,
      earned: false,
      progress: 33,
    },
    {
      id: "9",
      title: "Community Contributor",
      description: "Help 5 other users with advice",
      icon: Users,
      category: "engagement",
      points: 200,
      earned: false,
      progress: 20,
    },
    {
      id: "10",
      title: "Feedback Champion",
      description: "Provide feedback on 10 platform features",
      icon: Award,
      category: "engagement",
      points: 150,
      earned: false,
      progress: 40,
    },
  ]

  const milestones = [
    {
      level: 1,
      title: "Newcomer",
      points: 0,
      icon: Star,
      completed: true,
    },
    {
      level: 2,
      title: "Explorer",
      points: 500,
      icon: Zap,
      completed: true,
    },
    {
      level: 3,
      title: "Professional",
      points: 1000,
      icon: Award,
      completed: false,
    },
    {
      level: 4,
      title: "Expert",
      points: 2000,
      icon: Trophy,
      completed: false,
    },
    {
      level: 5,
      title: "Master",
      points: 5000,
      icon: Crown,
      completed: false,
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Sarah A.", points: 3250, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 2, name: "Mohammed K.", points: 2980, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 3, name: "Fatima H.", points: 2740, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 4, name: "Ahmed Al Mansouri", points: 2350, avatar: "/placeholder.svg?height=40&width=40", isCurrentUser: true },
    { rank: 5, name: "Omar J.", points: 2120, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 6, name: "Layla M.", points: 1950, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 7, name: "Khalid S.", points: 1820, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 8, name: "Aisha R.", points: 1760, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 9, name: "Yousef T.", points: 1640, avatar: "/placeholder.svg?height=40&width=40" },
    { rank: 10, name: "Noor Z.", points: 1520, avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const totalPoints = achievements.filter((a) => a.earned).reduce((sum, a) => sum + a.points, 0)
  const currentLevel = milestones.find((m) => !m.completed)?.level || milestones.length
  const prevLevelPoints = currentLevel > 1 ? milestones[currentLevel - 2].points : 0
  const nextLevelPoints = currentLevel <= milestones.length ? milestones[currentLevel - 1].points : prevLevelPoints
  const levelProgress = Math.min(
    100,
    Math.round(((totalPoints - prevLevelPoints) / (nextLevelPoints - prevLevelPoints)) * 100)
  )

  const filteredAchievements =
    filterCategory === "all" ? achievements : achievements.filter((a) => a.category === filterCategory)

  return (
    <div className="wrapper max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg mb-1">Achievements & Gamification</h1>
          <p className="text-muted-foreground">Track your progress and earn rewards</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="leaderboard" checked={showLeaderboard} onCheckedChange={setShowLeaderboard} />
            <Label htmlFor="leaderboard">Show Leaderboard</Label>
          </div>
          <Button className="gap-2">
            <Gift className="h-4 w-4" />
            Redeem Points
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Level Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Your Progress
              </CardTitle>
              <CardDescription>Level up by earning achievements and points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full p-4 bg-primary/10">
                  {currentLevel === 1 ? (
                    <Star className="h-8 w-8 text-primary" />
                  ) : currentLevel === 2 ? (
                    <Zap className="h-8 w-8 text-primary" />
                  ) : currentLevel === 3 ? (
                    <Award className="h-8 w-8 text-primary" />
                  ) : currentLevel === 4 ? (
                    <Trophy className="h-8 w-8 text-primary" />
                  ) : (
                    <Crown className="h-8 w-8 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="font-medium">Level {currentLevel}:</span>{" "}
                      {milestones[currentLevel - 1]?.title || "Master"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {totalPoints} / {nextLevelPoints} points
                    </div>
                  </div>
                  <Progress value={levelProgress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{prevLevelPoints} pts</span>
                    <span>{nextLevelPoints} pts</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-muted" />
                <div className="relative flex justify-between">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className={`rounded-full p-2 z-10 ${
                          milestone.completed ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <milestone.icon className="h-4 w-4" />
                      </div>
                      <div className="text-xs mt-2 font-medium">{milestone.title}</div>
                      <div className="text-xs text-muted-foreground">{milestone.points} pts</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievement Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Achievement Collection</CardTitle>
              <CardDescription>Earn badges by completing various activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" onValueChange={setFilterCategory}>
                <TabsList className="grid grid-cols-5 mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="learning">Learning</TabsTrigger>
                  <TabsTrigger value="application">Applications</TabsTrigger>
                  <TabsTrigger value="engagement">Engagement</TabsTrigger>
                </TabsList>

                <TabsContent value={filterCategory} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredAchievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className={`border rounded-lg p-4 ${
                          achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/30 opacity-80"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`rounded-full p-3 ${
                              achievement.earned ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <achievement.icon />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            {achievement.earned && (
                              <div className="text-xs text-muted-foreground mt-1">
                                Earned on: {new Date(achievement.date || "").toLocaleDateString()}
                              </div>
                            )}
                            {achievement.progress !== undefined && (
                              <Progress value={achievement.progress} className="mt-2 h-2" />
                            )}
                            {achievement.level !== undefined && achievement.maxLevel !== undefined && (
                              <div className="text-xs text-muted-foreground mt-1">
                                Level {achievement.level} of {achievement.maxLevel}
                              </div>
                            )}
                          </div>
                          {achievement.earned && (
                            <div className="text-primary font-medium">
                              +{achievement.points} pts
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          {/* Leaderboard */}
          {showLeaderboard && (

            <Card>
              <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
                <CardDescription>See how you rank against others</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        user.isCurrentUser ? "bg-primary/10" : "bg-muted/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{user.rank}.</span>
                        <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                        <span className="text-sm">{user.name}</span>
                      </div>
                      <div className="text-sm font-medium text-primary">{user.points} pts</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Access important features quickly</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <FileCheck className="h-4 w-4 mr-2" />
                Update Resume
              </Button>
              <Button variant="outline" className="w-full">
                <BookOpen className="h-4 w-4 mr-2" />
                Start Learning
              </Button>
              <Button variant="outline" className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                Apply for Jobs
              </Button>
              <Button variant="outline" className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Community Help
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tips & Resources</CardTitle>
              <CardDescription>Enhance your job search and learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>Check out our latest articles on job searching, resume building, and interview tips.</p>
                <a href="/resources" className="text-primary hover:underline">
                  Explore Resources
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Join our community forum to connect with other job seekers and share experiences.</p>
                <a href="/community" className="text-primary hover:underline">
                  Visit Community Forum
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feedback & Support</CardTitle>
              <CardDescription>We value your input to improve our platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>Have suggestions or issues? Let us know how we can improve.</p>
                <a href="/feedback" className="text-primary hover:underline">
                  Submit Feedback
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Need help? Our support team is here for you.</p>
                <a href="/support" className="text-primary hover:underline">
                  Contact Support
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
// Note: This code is a complete React component for an achievements page, including user progress tracking, achievement collection, and a leaderboard. It uses various UI components for layout and styling.
// The achievements and milestones are hardcoded for demonstration purposes, but can be replaced with dynamic data from an API or database.
// The component is designed to be responsive and user-friendly, with clear visual indicators for progress and achievements.
