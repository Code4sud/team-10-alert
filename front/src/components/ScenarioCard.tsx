import React from 'react'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {GetScenarioLightDto} from "@/store/dashboard-nodes/dashboard-nodes.model";

interface ScenarioCardProps {
	scenario?: GetScenarioLightDto
	handleClick?: () => void
}

const ScenarioCard = ({scenario, handleClick}: ScenarioCardProps) => {
	return (
		<Card className='w-72 h-96 bg-[#203D4E] border-none text-white flex flex-col' onMouseDown={handleClick}>
			<img src={scenario?.imageUrl?.length ? scenario?.imageUrl : 'src/assets/logo.png'} alt='logo' className='w-full h-36 object-cover rounded-t-xl'/>
			<CardContent>
				<CardTitle className='py-4 text-2xl'>{scenario?.name ?? ''}</CardTitle>
				<p>{scenario?.description ?? ''}</p>
			</CardContent>
			<div className='flex-grow'></div>
			<CardFooter className='align-bottom'>
				<Button className={"w-full mt-auto"} variant="secondary">Modifier</Button>
			</CardFooter>
		</Card>
	)
}
export default ScenarioCard
