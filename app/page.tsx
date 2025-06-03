import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Briefcase, GraduationCap, User } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/20 to-background py-20">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="heading-xl">Your AI-Powered Career Development Platform</h1>
              <p className="text-xl text-muted-foreground">
                Find perfect job matches, build your profile with AI, and get personalized career guidance all in one
                place.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/login">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Career Development Illustration"
                className="max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-secondary/50">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">All the tools you need to advance your career</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines AI technology with career development tools to help you find the perfect job and
              advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: User,
                title: "AI Profile Builder",
                description:
                  "Create a professional profile with AI assistance that highlights your skills and experience.",
              },
              {
                icon: Briefcase,
                title: "Smart Job Matching",
                description:
                  "Find job opportunities that match your skills and preferences with our AI-powered job matching system.",
              },
              {
                icon: GraduationCap,
                title: "Learning Recommendations",
                description: "Get personalized course recommendations to enhance your skills and qualifications.",
              },
              {
                icon: Award,
                title: "Career Achievements",
                description: "Track your progress and earn badges for completing career milestones.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                <div className="rounded-full p-3 bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-xs mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-primary/5">
        <div className="wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Job Openings" },
              { number: "5K+", label: "Companies" },
              { number: "25K+", label: "Users" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-primary/10">
        <div className="wrapper text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-4">Ready to advance your career?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of professionals who are using our platform to find their dream job and advance their career.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/login">
                Sign Up Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">CareerPath</h3>
              <p className="text-sm text-muted-foreground">
                Your AI-powered career development platform for finding the perfect job and advancing your career.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CareerPath. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
