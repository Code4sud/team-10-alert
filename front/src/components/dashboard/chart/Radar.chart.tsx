"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
  { month: "Forte pluie", apres: 286, avant: 150 },
  { month: "Grele", apres: 235, avant: 200 },
  { month: "Tremblement", apres: 237, avant: 120 },
  { month: "Inondation", apres: 223, avant: 120 },
  { month: "Cyclone", apres: 150, avant: 50 },
]

const chartConfig = {
  apres: {
    label: "Apres",
    color: "hsl(var(--chart-1))",
  },
  avant: {
    label: "Avant",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RadarChartStacked() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Niveau de sensibilisation moyen des utilisateurs</CardTitle>
        <CardDescription>

        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
            }}
            >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="apres"
              fill="var(--color-apres)"
              fillOpacity={0.6}
            />
            <Radar dataKey="avant" fill="var(--color-avant)" />
            <ChartLegend className="mt-8" content={<ChartLegendContent payload={undefined} verticalAlign={undefined} />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Évolution de la culture des utilisateurs avant et aprés avoir utilisé l'application <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-start gap-2 leading-none text-muted-foreground">
          Utilisation de 6 mois minimumq
        </div>
      </CardFooter>
    </Card>
  )
}
