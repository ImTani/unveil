"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Share2, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StoryCardProps {
  title: string
  description: string
  type: "viral" | "important"
  metrics: {
    accuracy: number
    bias: number
    sources: number
  }
}

export function StoryCard({ title, description, type, metrics }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`
        glass-panel overflow-hidden
        ${type === "viral" ? "border-viral/20" : "border-important/20"}
      `}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <span className={`
              px-3 py-1 rounded-full text-sm font-medium
              ${type === "viral" 
                ? "bg-viral/10 text-viral" 
                : "bg-important/10 text-important"}
            `}>
              {type === "viral" ? "Viral" : "Important"}
            </span>
          </div>

          <div className="space-y-4">
            <MetricItem 
              label="Accuracy Score" 
              value={metrics.accuracy} 
              type={type}
            />
            <MetricItem 
              label="Bias Rating" 
              value={metrics.bias} 
              type={type}
            />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Sources Analyzed</span>
              <span className="font-medium">{metrics.sources}</span>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <BookmarkPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function MetricItem({ label, value, type }: { 
  label: string 
  value: number
  type: "viral" | "important"
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <Progress 
        value={value} 
        className={type === "viral" ? "bg-viral/20" : "bg-important/20"}
      />
    </div>
  )
}