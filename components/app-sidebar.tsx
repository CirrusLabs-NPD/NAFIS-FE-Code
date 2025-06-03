"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Briefcase,
  Building,
  ChevronDown,
  FileText,
  GraduationCap,
  BadgeIcon as IdCard,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Trophy,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Talent Passport",
    href: "/talent-passport",
    icon: IdCard,
  },
  {
    title: "Job Matches",
    href: "/jobs",
    icon: Briefcase,
  },
  {
    title: "Applications",
    href: "/applications",
    icon: Building,
  },
  {
    title: "Learning",
    href: "/learning",
    icon: GraduationCap,
  },
  {
    title: "CV Builder",
    href: "/cv-builder",
    icon: FileText,
  },
  {
    title: "AI Assistant",
    href: "/assistant",
    icon: MessageSquare,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Trophy,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="py-4">
        <div className="flex items-center justify-center">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">Nafis</span>
              <span className="text-xs text-muted-foreground">Powered by CirrusLabs</span>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className={cn(pathname === item.href ? "text-primary" : "text-muted-foreground")} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <div className="flex items-center justify-between px-4 py-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 h-auto p-2 w-full justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-medium">Ahmed Al Mansouri</span>
                  <span className="text-xs text-muted-foreground">ahmed.almansouri@example.com</span>
                </div>
                <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>My Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ModeToggle />
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
