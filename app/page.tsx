"use client"

import { motion } from "framer-motion"
import { StoryCard } from "@/components/story-card"
import { DashboardMetrics } from "@/components/dashboard-metrics"

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Trending Stories</h2>
            <div className="space-y-4">
              <StoryCard
                title="Breaking News Coverage Analysis"
                description="Comparing multiple sources reporting on the latest global events"
                type="viral"
                metrics={{
                  accuracy: 85,
                  bias: 32,
                  sources: 12
                }}
              />
              <StoryCard
                title="Tech Industry Report"
                description="In-depth analysis of recent technology sector developments"
                type="important"
                metrics={{
                  accuracy: 92,
                  bias: 15,
                  sources: 8
                }}
              />
            </div>
          </section>
          
          <section className="glass-panel p-6 rounded-lg">
            <DashboardMetrics />
          </section>
        </motion.div>
      </div>
    </main>
  )
}