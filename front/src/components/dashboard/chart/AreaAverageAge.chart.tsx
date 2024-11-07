"use client";

import { TrendingDown, TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', age: 16 },
  { month: 'February', age: 13 },
  { month: 'March', age: 11 },
  { month: 'April', age: 13 },
  { month: 'May', age: 12 },
  { month: 'June', age: 18 },
  { month: 'July', age: 14 },
  { month: 'August', age: 15 },
  { month: 'September', age: 12 },
  { month: 'October', age: 11 },
  { month: 'November', age: 13 },
];

const chartConfig = {
  age: {
    label: 'Age',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function AreaChartStackedAge() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Moyenne d'âge des utilisateurs</CardTitle>
        <CardDescription>
          Moyenne d'âge des utilisateurs pour les 6 derniers mois
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
              domain={[6, (dataMax: number) => Math.ceil(dataMax / 5) * 5]} 
              tickCount={6} 
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' hideLabel />}
            />
            <Area
              dataKey='age'
              type='linear'
              fill='var(--color-age)'
              fillOpacity={0.4}
              stroke='var(--color-age)'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              La moyenne d'age général des utilisateurs est de 13.26 ans <TrendingDown className='h-4 w-4' />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AreaChartStackedAge;