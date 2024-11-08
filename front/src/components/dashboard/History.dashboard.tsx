import { DonutChartTargetUser } from './chart/Donut.chart';
import MultiBarChart from './chart/MultiBar.chart';
import { AreaChartStackedDownload } from './chart/AreaDownload.chart';
import { RadarChartStacked } from './chart/Radar.chart';
import { AreaChartStackedAge } from './chart/AreaAverageAge.chart';
import { MultiBarHorizontal } from './chart/MultiBarHorizontal.chart';
import { PieChartLegend } from './chart/Pie.chart';

export const description = 'Un graphique à barres multiples pour les alertes';

const DashboardHistory = () => {
  return (
    <div className='text-white'>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-7'>
          <MultiBarChart />
        </div>
        <div className='col-span-5'>
          <MultiBarHorizontal />
        </div>
        <div className='col-span-6'>
          <AreaChartStackedDownload />
        </div>
        <div className='col-span-6'>
          <AreaChartStackedAge />
        </div>
        <div className='col-span-3'>
          <DonutChartTargetUser />
        </div>
        <div className='col-span-3'>
          <PieChartLegend />
        </div>
        <div className='col-span-3'>
          <div className='h-full bg-white rounded-lg text-black flex flex-col justify-center items-center p-4'>
            <div className='text-lg'>
              Nombre d'utilisateurs 
              total : 
              <br />
              <span className='font-bold text-2xl'> 43 260</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHistory;
