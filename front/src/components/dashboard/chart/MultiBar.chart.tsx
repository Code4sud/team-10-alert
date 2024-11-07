import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

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
import { chartConfig, chartData } from '@/utils/data/chart.data';
import { AlertType } from '@/enums/alert.enum';


const MultiBarChart = () => {
  return (
    <div>
     <Card className='w-full'>
        <CardHeader>
          <CardTitle>Historique des Alertes</CardTitle>
          <CardDescription>2018 - 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator='dashed' />}
              />
              {Object.values(AlertType).map((alertType) => (
                <Bar 
                  key={alertType} 
                  dataKey={alertType} 
                  fill={chartConfig[alertType].color} 
                  name={chartConfig[alertType].label}
                />
              ))}
              <Legend />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className='flex-col items-start gap-2 text-sm'>
          <div className='flex gap-2 font-medium leading-none'>
            Tendance à la hausse de 20.2% cette année <TrendingUp className='h-4 w-4' />
          </div>
          <div className='leading-none text-muted-foreground'>
            Affichage du nombre total d'alertes par type pour les 6 dernières années
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MultiBarChart;