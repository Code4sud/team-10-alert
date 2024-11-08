import { Accordion } from "@radix-ui/react-accordion";
import { DonutChartTargetUser } from "./chart/Donut.chart";
import { emergencyListAfter } from "@/utils/data/chart.data";
import { AccordionToDo } from "../Accordion";

const DashboardAfter = () => {
  return (
    <div className='text-white'>
     <AccordionToDo emergencyList={emergencyListAfter} />
    </div>
  );
};

export default DashboardAfter;
