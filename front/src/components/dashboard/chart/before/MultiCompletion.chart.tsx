"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Nice", Completed: 186, Incompleted: 80 },
  { month: "Beaulieu", Completed: 305, Incompleted: 200 },
  { month: "Cagnes", Completed: 237, Incompleted: 120 },
  { month: "Gaude", Completed: 173, Incompleted: 120 },
  { month: "Colmars", Completed: 209, Incompleted: 130 },
  { month: "Eze", Completed: 214, Incompleted: 140 },
]

const chartConfig = {
  Completed: {
    label: "Completé",
    color: "hsl(var(--chart-1))",
  },
  Incompleted: {
    label: "Incomplet",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function MultiCompletion() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>To Do List realisé par villes</CardTitle>
        <CardDescription>Alert du 12/09/2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 8)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Completed"
              stackId="a"
              fill="var(--color-Completed)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="Incompleted"
              stackId="a"
              fill="var(--color-Incompleted)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          En hausse de 5.2% ce par rapport à la précedente alerte <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}

export default MultiCompletion;