'use client';

import { Pie, PieChart } from 'recharts';

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
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
const chartData = [
  { browser: 'actifs', visitors: 39275, fill: 'hsl(var(--chart-1))' },
  { browser: 'inactifs', visitors: 3548, fill: 'hsl(var(--chart-2))' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  actifs: {
    label: 'Actifs',
    color: 'hsl(var(--chart-1))',
  },
  inactifs: {
    label: 'Inactifs',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function PieChartLegend() {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Nombre d'utilisateurs actifs et inactifs</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[300px]'
        >
          <PieChart>
            <Pie data={chartData} dataKey='visitors' />
            <ChartLegend
              content={<ChartLegendContent nameKey='browser' />}
              className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className='pb-4'></div>
    </Card>
  );
}
