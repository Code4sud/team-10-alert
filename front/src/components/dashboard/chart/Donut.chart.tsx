'use client';

import * as React from 'react';
import { Label, Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const description = 'An interactive pie chart';
const chartData = [
  { browser: '< 1 heure', users: 20867, fill: 'hsl(var(--chart-1))' },
  { browser: '1 à 3 heures', users: 13271, fill: 'hsl(var(--chart-2))' },
  { browser: '3 à 6 heures', users: 8112, fill: 'hsl(var(--chart-3))' },
  { browser: '> 6 heures', users: 1234, fill: 'hsl(var(--chart-4))' },
];

const chartConfig = {
  visitors: {
    label: 'Utilisateurs',
  },
  '< 1 heure': {
    label: '< 1 heure',
    color: 'hsl(var(--chart-1))',
  },
  '1 à 3 heures': {
    label: '1 à 3 heures',
    color: 'hsl(var(--chart-2))',
  },
  '3 à 6 heures': {
    label: '3 à 6 heures',
    color: 'hsl(var(--chart-3))',
  },
  '> 6 heures': {
    label: '> 6 heures',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig;

export function DonutChartTargetUser() {
  const id = 'pie-interactive';
  const [activeBrowser, setActiveBrowser] = React.useState(
    chartData[0].browser
  );

  const activeIndex = React.useMemo(
    () => chartData.findIndex((item) => item.browser === activeBrowser),
    [activeBrowser]
  );

  return (
    <Card data-chart={id} className='flex flex-col'>
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className='flex-row items-start space-y-0 pb-0'>
        <div className='grid gap-1'>
          <CardTitle>Temps d'utilisation quotidien de l'application</CardTitle>
          {/* <CardDescription>
            Répartition des utilisateurs par temps d'utilisation
          </CardDescription> */}
        </div>
        <Select value={activeBrowser} onValueChange={setActiveBrowser}>
          <SelectTrigger
            className='ml-auto h-7 w-[130px] rounded-lg pl-2.5'
            aria-label='Sélectionnez une durée'
          >
            <SelectValue placeholder='Sélectionnez la durée' />
          </SelectTrigger>
          <SelectContent align='end' className='rounded-xl'>
            {chartData.map((item) => (
              <SelectItem
                key={item.browser}
                value={item.browser}
                className='rounded-lg [&_span]:flex'
              >
                <div className='flex items-center gap-2 text-xs'>
                  <span
                    className='flex h-3 w-3 shrink-0 rounded-sm'
                    style={{
                      backgroundColor: item.fill,
                    }}
                  />
                  {item.browser}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className='flex flex-1 justify-center pb-0'>
        <ChartContainer
          id={id}
          config={chartConfig}
          className='mx-auto aspect-square w-full max-w-[300px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='users'
              nameKey='browser'
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {chartData[activeIndex].users.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Utilisateurs
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default DonutChartTargetUser;
