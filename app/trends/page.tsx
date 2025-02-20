"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const trendData = [
  { date: "2024-01", accuracy: 75, bias: 45, engagement: 80 },
  { date: "2024-02", accuracy: 82, bias: 38, engagement: 85 },
  { date: "2024-03", accuracy: 78, bias: 42, engagement: 90 },
  { date: "2024-04", accuracy: 85, bias: 35, engagement: 88 },
  { date: "2024-05", accuracy: 90, bias: 30, engagement: 92 },
]

export default function TrendsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Media Trends Analysis</h1>
            <div className="flex space-x-4">
              {["1W", "1M", "3M", "6M", "1Y"].map((timeframe) => (
                <motion.button
                  key={timeframe}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg glass-panel hover:bg-white/10"
                >
                  {timeframe}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-panel p-6">
              <h2 className="text-xl font-semibold mb-4">Accuracy vs. Bias Trends</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="date" 
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: "rgba(255,255,255,0.5)" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.5)"
                      tick={{ fill: "rgba(255,255,255,0.5)" }}
                      axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "rgba(26,43,76,0.9)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="accuracy" 
                      stroke="#006D77" 
                      strokeWidth={2}
                      dot={{ fill: "#006D77" }}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="bias" 
                      stroke="#FFA500" 
                      strokeWidth={2}
                      dot={{ fill: "#FFA500" }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="space-y-8">
              <Card className="glass-panel p-6">
                <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Improving Accuracy",
                      description: "Overall accuracy scores show an upward trend across major outlets",
                      metric: "+15%"
                    },
                    {
                      title: "Reduced Bias",
                      description: "Average bias ratings decreased significantly in recent months",
                      metric: "-8%"
                    },
                    {
                      title: "Source Diversity",
                      description: "More diverse sources are being included in coverage",
                      metric: "+12"
                    }
                  ].map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center p-4 rounded-lg bg-white/5"
                    >
                      <div>
                        <h3 className="font-medium">{insight.title}</h3>
                        <p className="text-sm text-white/70">{insight.description}</p>
                      </div>
                      <span className="text-xl font-bold text-important">{insight.metric}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              <Card className="glass-panel p-6">
                <h2 className="text-xl font-semibold mb-4">Pattern Recognition</h2>
                <div className="space-y-2">
                  {[
                    "Increased fact-checking references",
                    "More transparent source attribution",
                    "Growing use of data visualization",
                    "Enhanced context provision"
                  ].map((pattern, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-viral" />
                      <span>{pattern}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}