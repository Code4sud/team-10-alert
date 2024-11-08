import { emergencyListBefore } from '@/utils/data/chart.data';
import { AccordionToDo } from '../Accordion';
import { DonutChartTargetUser } from './chart/Donut.chart';
import { RadialToDoBefore } from './chart/before/Radial.chart';
import { MultiChartBefore } from './chart/before/Multi.chart';

const DashboardBefore = () => {
  return (
    <div className='text-white'>
      <AccordionToDo emergencyList={emergencyListBefore} />
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6'>
          <RadialToDoBefore />
        </div>
        <div className='col-span-6'>
          <MultiChartBefore />
        </div>
      </div>
    </div>
  );
};

export default DashboardBefore;
