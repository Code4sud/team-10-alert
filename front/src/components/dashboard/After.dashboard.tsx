import { emergencyListAfter } from '@/utils/data/chart.data';
import { AccordionToDo } from '../Accordion';

import { MultiChartBefore } from './chart/before/Multi.chart';
import { Input } from '../ui/input';
import FavorableResponse from './chart/before/Favorable';
import DefavorableResponse from './chart/before/Defavorable';
import MultiCompletion from './chart/before/MultiCompletion.chart';
import { RadialContactUser } from './chart/before/RadialContact.chart';
import { RadialToDoBefore } from './chart/before/Radial.chart';

const DashboardAfter = () => {
  return (
    <div className='text-white'>
      <AccordionToDo emergencyList={emergencyListAfter} />
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6'>
          <RadialToDoBefore />
        </div>
        <div className='col-span-6'>
          <MultiChartBefore />
        </div>
        <FavorableResponse />
        <div className='col-span-6 bg-white rounded-md text-black'>
          <DefavorableResponse />
        </div>
        <div className='col-span-7'>
          <MultiCompletion />
        </div>
        <div className='col-span-5  text-black'>
          <RadialContactUser />
        </div>
      </div>
    </div>
  );
};

export default DashboardAfter;
