import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import {
  Card,
  CardContent,
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
const chartData = [{ month: 'january', safe: 39260, toContact: 2570 }];

const chartConfig = {
  toContact: {
    label: 'À contacter',
    color: 'hsl(var(--chart-4))',
  },
  safe: {
    label: 'En sécurisé',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function RadialContactUser() {
  const totalVisitors = chartData[0].toContact + chartData[0].safe;

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Nombre de personne informer de l'alerte</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-1 items-center pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square w-full max-w-[250px]'
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle'>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className='fill-foreground text-2xl font-bold'
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className='fill-muted-foreground'
                        >
                          personnes informé
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey='toContact'
              stackId='a'
              cornerRadius={5}
              fill='var(--color-toContact)'
              className='stroke-transparent stroke-2'
            />
            <RadialBar
              dataKey='safe'
              fill='var(--color-safe)'
              stackId='a'
              cornerRadius={5}
              className='stroke-transparent stroke-2'
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex flex-col items-center gap-2 font-medium leading-none w-[900px]'>
          <div className='flex items-center'>
            Nombre de persoonne en sécurité :{' '}
            {chartData[0].safe.toLocaleString()}{' '}
            <div className='w-4 h-4 bg-[#289D90] rounded-md ml-2'></div>
          </div>
          <div className='flex items-center'>
            Nombre de personne à contacter :{' '} 
            {chartData[0].toContact.toLocaleString()}{' '}
            <div className='w-4 h-4 bg-[#E9C469] rounded-md ml-2'></div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
