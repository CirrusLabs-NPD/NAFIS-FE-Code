"use client"

import { useState, useRef, useEffect } from "react"
import {
  ArrowUp,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Lightbulb,
  Loader2,
  Paperclip,
  Plus,
  Sparkles,
  Stars,
  User,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

const SAMPLE_MESSAGES: Message[] = [
  {
    id: "1",
    content:
      "Welcome to your AI Career Assistant! I'm here to help with your career development. You can ask me about job search strategies, resume tips, interview preparation, skill development, and more.",
    role: "assistant",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: "2",
    content: "Can you suggest some ways to improve my resume for frontend developer positions?",
    role: "user",
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
  },
  {
    id: "3",
    content:
      'Here are some tips to enhance your frontend developer resume:\n\n1. **Highlight Technical Skills**: Prominently feature your proficiency in React, JavaScript, TypeScript, CSS, and other relevant technologies.\n\n2. **Showcase Projects**: Include links to your GitHub or portfolio with specific projects that demonstrate your capabilities.\n\n3. **Quantify Achievements**: Instead of just listing responsibilities, include metrics like "Improved site load time by 40%" or "Reduced bug reports by 25%".\n\n4. **Optimize for ATS**: Use keywords from the job description to pass through Applicant Tracking Systems.\n\n5. **Demonstrate Problem-Solving**: Include examples of complex challenges you\'ve overcome.\n\nWould you like more specific advice based on your current resume?',
    role: "assistant",
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
  },
]

const SUGGESTED_MESSAGES = [
  "How can I prepare for a frontend developer interview?",
  "What skills should I develop to advance my career?",
  "Can you review my LinkedIn profile?",
  "What salary should I negotiate for a Senior Developer role?",
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }
    setMessages([...messages, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(input),
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (userInput: string): string => {
    // This is a simplified mock response system
    const input = userInput.toLowerCase()

    if (input.includes("interview") || input.includes("prepare")) {
      return "Here are some interview preparation tips for tech roles:\n\n1. **Research the Company**: Understand their products, culture, and recent news.\n\n2. **Review Core Concepts**: Make sure you're solid on fundamental principles related to your field.\n\n3. **Practice Coding Problems**: For technical interviews, practice on platforms like LeetCode or HackerRank.\n\n4. **Prepare for Behavioral Questions**: Use the STAR method (Situation, Task, Action, Result) to structure your answers.\n\n5. **Prepare Questions**: Have thoughtful questions ready to ask your interviewers.\n\n6. **Mock Interviews**: Practice with a friend or use services that offer mock interviews.\n\nWould you like me to elaborate on any of these points?"
    } else if (input.includes("skills") || input.includes("learn")) {
      return "Based on current tech industry trends and your profile as a frontend developer, here are skills worth developing:\n\n**Technical Skills:**\n- TypeScript (high demand)\n- React or Vue.js state management patterns\n- Web Performance Optimization\n- API design and GraphQL\n- Testing methodologies\n\n**Soft Skills:**\n- Technical communication\n- Project management\n- Mentoring junior developers\n\n**Emerging Areas:**\n- Web3 technologies\n- AI integration in applications\n- Serverless architecture\n\nFocusing on TypeScript and advanced React patterns would likely give you the best immediate return on investment for your career growth."
    } else if (input.includes("salary") || input.includes("negotiate")) {
      return "When negotiating a Senior Developer salary:\n\n1. **Research Market Rates**: For your location and experience level, the average salary range is $120,000-$150,000 for Senior Frontend Developers.\n\n2. **Consider Total Compensation**: Look beyond base salary to bonuses, equity, benefits, and work-life balance.\n\n3. **Highlight Your Value**: Emphasize specialized skills and quantifiable achievements from past roles.\n\n4. **Practice Your Pitch**: Be ready to explain why you deserve your target salary.\n\n5. **Be Flexible**: Consider negotiating other benefits if there's limited flexibility on base salary.\n\nWould you like tips on how to approach the actual negotiation conversation?"
    } else {
      return "I can help you with that! Based on your profile as a frontend developer, I'd recommend focusing on these areas for career growth:\n\n1. Expanding your technical expertise in frameworks beyond React\n2. Developing leadership skills to move toward senior roles\n3. Building a stronger professional network in the tech industry\n\nWhich of these areas would you like more specific guidance on?"
    }
  }

  const handleSuggestedMessage = (message: string) => {
    setInput(message)
  }

  const formatMessage = (content: string) => {
    // Simple formatting for markdown-like syntax
    return content
      .split("\n")
      .map((line, i) => {
        // Bold text
        line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

        // List items
        if (line.match(/^\d+\.\s/)) {
          line = `<span class="ml-5 block">${line}</span>`
        } else if (line.match(/^-\s/)) {
          line = `<span class="ml-5 block">${line}</span>`
        }

        return line
      })
      .join("<br />")
  }

  return (
    <div className="wrapper h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="heading-lg mb-1">AI Career Assistant</h1>
          <p className="text-muted-foreground">Get personalized career advice and job search assistance</p>
        </div>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>New Conversation</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 h-full">
        {/* Left Sidebar - Conversations */}
        <div className="hidden lg:block col-span-1">
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-1">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Plus className="h-4 w-4" />
                  New Conversation
                </Button>
              </div>
              <div className="mt-2">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground">Recent</div>
                <div className="space-y-1 px-1">
                  {[
                    { title: "Resume Improvement Tips", icon: Briefcase, active: true },
                    { title: "Job Search Strategy", icon: Sparkles, active: false },
                    { title: "Interview Preparation", icon: User, active: false },
                    { title: "Career Transition Advice", icon: Stars, active: false },
                  ].map((item, i) => (
                    <Button
                      key={i}
                      variant={item.active ? "secondary" : "ghost"}
                      className="w-full justify-start gap-2 mb-1"
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="truncate">{item.title}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="col-span-1 lg:col-span-2 flex flex-col">
          <Card className="flex-1 flex flex-col">
            <CardContent className="flex-1 overflow-auto p-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <Avatar className="h-8 w-8 mt-0.5">
                        {message.role === "assistant" ? (
                          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                        ) : (
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        )}
                      </Avatar>
                      <div>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          <div
                            className="text-sm whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{
                              __html: formatMessage(message.content),
                            }}
                          />
                        </div>
                        <div
                          className={`text-xs text-muted-foreground mt-1 ${
                            message.role === "user" ? "text-right" : ""
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[80%]">
                      <Avatar className="h-8 w-8 mt-0.5">
                        <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="rounded-lg px-4 py-2 bg-secondary text-secondary-foreground">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-current animate-pulse delay-150"></div>
                            <div className="w-2 h-2 rounded-full bg-current animate-pulse delay-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            {/* Suggested Messages */}
            {messages.length <= 3 && (
              <div className="px-4 pb-2">
                <div className="text-xs font-medium text-muted-foreground mb-2">Suggested questions</div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_MESSAGES.map((message, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-auto py-1.5"
                      onClick={() => handleSuggestedMessage(message)}
                    >
                      {message}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            <CardFooter className="p-4 pt-0">
              <div className="flex items-end gap-2 w-full">
                <div className="relative flex-1">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="resize-none pr-10 min-h-[80px]"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button variant="ghost" size="icon" className="absolute right-2 bottom-2">
                    <Paperclip className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="h-10 w-10"
                >
                  {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Right Sidebar - Career Insights */}
        <div className="hidden lg:block col-span-1">
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Career Insights</CardTitle>
              <CardDescription>Personalized guidance based on your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Skills Gap Analysis</h3>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>TypeScript</span>
                      <span>Recommended</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary" style={{ width: "20%" }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>React Testing</span>
                      <span>Recommended</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary" style={{ width: "40%" }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>UI/UX Design</span>
                      <span>Strong</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                      <div className="h-full bg-primary" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Market Trends</h3>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full p-1.5 bg-primary/10">
                      <Lightbulb className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Frontend frameworks trend</p>
                      <p className="text-muted-foreground">React remains dominant with 80% market share</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="rounded-full p-1.5 bg-primary/10">
                      <Lightbulb className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">Salary insights</p>
                      <p className="text-muted-foreground">Senior Frontend roles avg $135k in your region</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Learning Resources</h3>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2 text-xs h-auto py-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Advanced TypeScript Course
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 text-xs h-auto py-1.5">
                    <GraduationCap className="h-3.5 w-3.5" />
                    React Testing Workshop
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
