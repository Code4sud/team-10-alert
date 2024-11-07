import { emergencyListBefore } from "@/utils/data/chart.data";
import { AccordionToDo } from "../Accordion";
import { DonutChartTargetUser } from "./chart/Donut.chart";

const DashboardBefore = () => {
  return (
    <div className='text-white'>
      <AccordionToDo emergencyList={emergencyListBefore} />
      <DonutChartTargetUser />
    </div>
  );
};

export default DashboardBefore;
