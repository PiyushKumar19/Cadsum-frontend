"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react"

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl sm:text-3xl font-bold">John Doe</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">Software Developer</CardDescription>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
              <Button variant="outline" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button variant="outline" size="sm">
                Edit Profile
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>Joined January 2020</span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Bio</h3>
                  <p className="text-muted-foreground">
                    Passionate software developer with 5+ years of experience in building web applications.
                    Specializing in React, Node.js, and cloud technologies. Always eager to learn and tackle
                    new challenges in the ever-evolving world of tech.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="posts">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Latest Blog Post</CardTitle>
                    <CardDescription>Posted on May 15, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is a preview of my latest blog post about React hooks and performance optimization...</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Thoughts on GraphQL</CardTitle>
                    <CardDescription>Posted on April 22, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>In this post, I share my experiences with GraphQL and how it compares to REST APIs...</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="projects">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Alpha</CardTitle>
                    <CardDescription>A React-based dashboard</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>An intuitive dashboard built with React and D3.js for data visualization.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Beta</CardTitle>
                    <CardDescription>Mobile app for task management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>A React Native app for efficient task management and team collaboration.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}