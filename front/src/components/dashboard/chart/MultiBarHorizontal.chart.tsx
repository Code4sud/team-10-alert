'use client';

import { TrendingDown, TrendingUp } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts';

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

export const description = 'A bar chart with a custom label';

const chartData = [
  { month: '2018', victime: 716 },
  { month: '2019', victime: 686 },
  { month: '2020', victime: 505 },
  { month: '2021', victime: 373 },
  { month: '2022', victime: 313 },
  { month: '2023', victime: 359 },
  { month: '2024', victime: 299 },
];

const chartConfig = {
  victime: {
    label: 'Victime',
    color: 'hsl(var(--chart-2))',
  },
  label: {
    color: 'hsl(var(--background))',
  },
} satisfies ChartConfig;

export function MultiBarHorizontal() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Nombre de victime moyenne aprés chaque catastrophe
        </CardTitle>
        <CardDescription>2019-2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout='vertical'
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey='month'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey='victime' type='number' hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <Bar
              dataKey='victime'
              layout='vertical'
              fill='var(--color-victime)'
              radius={4}
            >
              <LabelList
                dataKey='month'
                position='insideLeft'
                offset={8}
                className='fill-[--color-label]'
                fontSize={12}
              />
              <LabelList
                dataKey='victime'
                position='right'
                offset={8}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          En hausse de +16.7% cette année <TrendingDown className='h-4 w-4' />
        </div>
      </CardFooter>
    </Card>
  );
}
