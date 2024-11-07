import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface ScrollAreaDashboardProps {
  emergencyList: string[]; 
}

export function ScrollAreaDashboard({ emergencyList }: ScrollAreaDashboardProps) {
  return (
    <ScrollArea className="h-72 w-full max-w-3xl mx-auto rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Instructions d'urgence</h4>
        {emergencyList.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-lg">{item}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
