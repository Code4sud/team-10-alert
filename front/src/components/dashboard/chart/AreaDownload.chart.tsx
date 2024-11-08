import {TrendingUp} from 'lucide-react';
import {Area, AreaChart, CartesianGrid, XAxis, YAxis} from 'recharts';

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from '@/components/ui/card';
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from '@/components/ui/chart';

const chartData = [
    {month: 'January', download: 2186},
    {month: 'February', download: 2305},
    {month: 'March', download: 2037},
    {month: 'April', download: 3073},
    {month: 'May', download: 3209},
    {month: 'June', download: 4214},
    {month: 'July', download: 4312},
    {month: 'August', download: 4123},
    {month: 'September', download: 5987},
    {month: 'October', download: 6876},
    {month: 'November', download: 10765},
];

const chartConfig = {
    download: {
        label: 'Download',
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig;

export function AreaChartStackedDownload() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Nombre de téléchargements quotidiens
                </CardTitle>
                <CardDescription>
                    Nombre de téléchargements quotidiens pour les 6 derniers mois
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
                        <CartesianGrid vertical={false}/>
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            domain={[0, (dataMax: number) => Math.ceil(dataMax / 1000) * 1000]}
                            tickCount={6}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator='line'/>}
                        />
                        <Area
                            dataKey='download'
                            type='natural'
                            fill='var(--color-download)'
                            fillOpacity={0.4}
                            stroke='var(--color-download)'
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className='flex w-full items-start gap-2 text-sm'>
                    <div className='grid gap-2'>
                        <div className='flex items-center gap-2 font-medium leading-none'>
                            En hausse de 31.9% ce mois-ci <TrendingUp className='h-4 w-4'/>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default AreaChartStackedDownload;