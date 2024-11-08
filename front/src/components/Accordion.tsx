import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollAreaDashboard } from './dashboard/ScrollArea.dashdoard';

interface AccordionToDoProps {
  emergencyList: string[];
}

export function AccordionToDo({ emergencyList }: AccordionToDoProps) {
  return (
    <div className='text-white mb-4 text-center'>
      <Accordion type='single' collapsible className='w-full max-w-3xl mx-auto'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-lg font-bold'>To do liste envoyée aux utilisateurs pour l'alerte du 12/09/2024</AccordionTrigger>
          <AccordionContent>
            <ScrollAreaDashboard emergencyList={emergencyList} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
