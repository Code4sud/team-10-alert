import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import ScenarioCard from "@/components/ScenarioCard";
import React from "react";
import {Link} from "react-router-dom";

const ScenariosScreen = () => {
    return (
        <div className="h-full flex gap-4">
            <Link to='/chart'>
              <Card className='w-72 h-96 bg-[#203D4E] border-none flex flex-col gap-4 justify-center cursor-pointer items-center'>
                <img src='src/assets/add-blue.svg' alt='logo' className='w-12 h-12' />
                <p className='text-xl font-semibold text-[#00D9FF]'>Ajouter un scénario</p>
              </Card>
            </Link>
            <ScenarioCard />
        </div>
    );
}

export default ScenariosScreen;

