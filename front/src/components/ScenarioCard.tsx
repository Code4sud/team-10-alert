import React from 'react'
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const ScenarioCard = () => {
	return (
		<Card className='w-72 h-96 bg-[#203D4E] border-none text-white flex flex-col'>
			<img src='src/assets/img-scenario.png' alt='logo' className='w-full h-36 object-cover rounded-t-xl' />
			<CardContent>
				<CardTitle className='py-4 text-2xl'>Titre de scénario</CardTitle>
				<p>Please add your content here. Keep it short and simple. And smile :) </p>
			</CardContent>
			<div className='flex-grow'></div>
			<CardFooter className='align-bottom'>
				<Button className={"w-full mt-auto"} variant="secondary">Modifier</Button>
			</CardFooter>
		</Card>
	)
}
export default ScenarioCard
