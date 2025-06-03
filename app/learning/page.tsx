"use client"

import { useState } from "react"
import {
  Award,
  BookOpen,
  Brain,
  ChevronRight,
  Clock,
  GraduationCap,
  Play,
  Plus,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function LearningPage() {
  const [weeklyGoalProgress, setWeeklyGoalProgress] = useState(65)

  const currentLearning = [
    {
      id: 1,
      title: "Advanced React Patterns",
      provider: "Frontend Masters",
      progress: 75,
      totalHours: 8,
      completedHours: 6,
      nextLesson: "Higher-Order Components",
      difficulty: "Advanced",
      category: "Frontend Development",
    },
    {
      id: 2,
      title: "TypeScript Fundamentals",
      provider: "Educative",
      progress: 45,
      totalHours: 12,
      completedHours: 5.4,
      nextLesson: "Generics and Utility Types",
      difficulty: "Intermediate",
      category: "Programming Languages",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      provider: "Design Academy",
      progress: 30,
      totalHours: 15,
      completedHours: 4.5,
      nextLesson: "Color Theory and Psychology",
      difficulty: "Beginner",
      category: "Design",
    },
  ]

  const suggestedCourses = [
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      provider: "AWS Training",
      duration: "20 hours",
      rating: 4.8,
      students: 15420,
      price: "Free",
      difficulty: "Beginner",
      category: "Cloud Computing",
      aiRecommendation: "High match based on your career goals",
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      provider: "The Odin Project",
      duration: "25 hours",
      rating: 4.7,
      students: 8930,
      price: "Free",
      difficulty: "Intermediate",
      category: "Backend Development",
      aiRecommendation: "Complements your frontend skills",
    },
    {
      id: 6,
      title: "Arabic Business Communication",
      provider: "UAE Language Institute",
      duration: "30 hours",
      rating: 4.9,
      students: 2340,
      price: "AED 299",
      difficulty: "Intermediate",
      category: "Language Skills",
      aiRecommendation: "Essential for UAE market",
    },
  ]

  const skillGaps = [
    { skill: "TypeScript", currentLevel: 40, targetLevel: 80, priority: "High" },
    { skill: "Cloud Computing", currentLevel: 20, targetLevel: 70, priority: "High" },
    { skill: "Arabic Communication", currentLevel: 60, targetLevel: 90, priority: "Medium" },
    { skill: "Backend Development", currentLevel: 30, targetLevel: 75, priority: "Medium" },
    { skill: "DevOps", currentLevel: 15, targetLevel: 60, priority: "Low" },
  ]

  const achievements = [
    {
      id: 1,
      title: "Learning Streak",
      description: "7 days in a row",
      icon: Trophy,
      earned: true,
      points: 100,
    },
    {
      id: 2,
      title: "Course Completer",
      description: "Finished 3 courses",
      icon: GraduationCap,
      earned: true,
      points: 250,
    },
    {
      id: 3,
      title: "Skill Master",
      description: "Master 5 skills",
      icon: Star,
      earned: false,
      points: 500,
      progress: 60,
    },
    {
      id: 4,
      title: "Quick Learner",
      description: "Complete course in 1 week",
      icon: Zap,
      earned: false,
      points: 150,
      progress: 0,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-yellow-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="wrapper">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg mb-1">Skill & Training Dashboard</h1>
          <p className="text-muted-foreground">Enhance your skills and advance your career</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Brain className="h-4 w-4" />
            Take Skill Assessment
          </Button>
          <Button className="gap-2">
            <BookOpen className="h-4 w-4" />
            View All Courses
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weekly Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Weekly Learning Goals
              </CardTitle>
              <CardDescription>Stay on track with your learning objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Complete 10 hours of learning</span>
                  <span className="text-sm text-muted-foreground">6.5 / 10 hours</span>
                </div>
                <Progress value={weeklyGoalProgress} className="h-2" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>3.5 hours remaining</span>
                  <span>65% complete</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Learning Modules */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Current Learning Modules
              </CardTitle>
              <CardDescription>Continue your ongoing courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentLearning.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{course.provider}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.completedHours} / {course.totalHours} hours
                          </span>
                          <Badge className={getDifficultyColor(course.difficulty)}>{course.difficulty}</Badge>
                          <Badge variant="outline">{course.category}</Badge>
                        </div>
                      </div>
                      <Button size="sm" className="gap-2">
                        <Play className="h-4 w-4" />
                        Continue
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        Next: <span className="font-medium">{course.nextLesson}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suggested Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI-Powered Course Suggestions
              </CardTitle>
              <CardDescription>Personalized recommendations based on your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedCourses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{course.provider}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{course.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3 w-3" />
                            {course.students.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getDifficultyColor(course.difficulty)}>{course.difficulty}</Badge>
                          <Badge variant="outline">{course.category}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{course.duration}</span>
                          <span className="font-medium text-primary">{course.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-3">
                      <p className="text-xs text-blue-800 flex items-center gap-1">
                        <Brain className="h-3 w-3" />
                        {course.aiRecommendation}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full gap-2">
                      <Plus className="h-4 w-4" />
                      Add to Learning Path
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skill Gap Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Skill Gap Meter
              </CardTitle>
              <CardDescription>Identify areas for improvement based on market demands</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillGaps.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.skill}</span>
                        <Badge variant="outline" className={getPriorityColor(skill.priority)}>
                          {skill.priority} Priority
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.currentLevel}% → {skill.targetLevel}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.targetLevel} className="h-2 bg-gray-200" />
                      <Progress
                        value={skill.currentLevel}
                        className="h-2 absolute top-0 left-0"
                        style={{ width: `${(skill.currentLevel / skill.targetLevel) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Current Level</span>
                      <span>Target Level</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Learning Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Learning Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Courses Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">156</div>
                  <div className="text-sm text-muted-foreground">Hours Learned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Skills Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">850</div>
                  <div className="text-sm text-muted-foreground">Points Earned</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Achievements & Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/30 opacity-60"
                    }`}
                  >
                    <div
                      className={`rounded-full p-2 ${
                        achievement.earned ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <achievement.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                      {!achievement.earned && achievement.progress !== undefined && (
                        <div className="mt-1">
                          <Progress value={achievement.progress} className="h-1" />
                        </div>
                      )}
                    </div>
                    <div className="text-xs font-medium text-primary">+{achievement.points}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Brain className="h-4 w-4" />
                Take Skill Assessment
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <BookOpen className="h-4 w-4" />
                Browse Course Catalog
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Award className="h-4 w-4" />
                View Certificates
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Join Study Groups
              </Button>
            </CardContent>
          </Card>

          {/* Learning Path Recommendation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-primary" />
                Recommended Path
              </CardTitle>
              <CardDescription>Personalized learning journey for your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <span>Complete TypeScript Fundamentals</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <span>Learn AWS Cloud Basics</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <span>Master Node.js Backend</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <span>Advanced DevOps Practices</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Path
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
