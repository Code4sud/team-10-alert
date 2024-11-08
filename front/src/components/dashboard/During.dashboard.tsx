import { emergencyListDuring } from "@/utils/data/chart.data";
import { AccordionToDo } from "../Accordion";

const DashboardDuring = () => {
  return (
    <div className='text-white'>
      <AccordionToDo emergencyList={emergencyListDuring} />
    </div>
  );
};

export default DashboardDuring