"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Video, Award } from "lucide-react"

export default function LearnPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Media Literacy Hub</h1>
            <p className="text-lg text-white/70">
              Enhance your understanding of media analysis and critical thinking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started",
                description: "Learn the basics of media analysis",
                icon: BookOpen,
                color: "from-viral to-important"
              },
              {
                title: "Advanced Techniques",
                description: "Deep dive into analytical methods",
                icon: FileText,
                color: "from-important to-viral"
              },
              {
                title: "Video Tutorials",
                description: "Watch expert explanations",
                icon: Video,
                color: "from-viral to-important"
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-panel p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center mb-4`}>
                      <module.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
                    <p className="text-white/70 mb-4 flex-grow">{module.description}</p>
                    <Button className="w-full">Start Learning</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="glass-panel p-8 mt-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Certification Track</h2>
                <p className="text-white/70 mb-6">
                  Complete our comprehensive curriculum and earn a certificate in media analysis
                </p>
                <Button size="lg" className="bg-gradient-to-r from-viral to-important">
                  <Award className="h-5 w-5 mr-2" />
                  Start Certification
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  "Interactive exercises",
                  "Expert feedback",
                  "Real-world case studies",
                  "Community discussions"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-important" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}