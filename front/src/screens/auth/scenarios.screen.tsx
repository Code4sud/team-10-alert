import {Card} from "@/components/ui/card";
import ScenarioCard from "@/components/ScenarioCard";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {scenarioRequests} from "@/store/dashboard-nodes/dashboard-nodes.request";
import {GetScenarioLightDto} from "@/store/dashboard-nodes/dashboard-nodes.model";

const ScenariosScreen = () => {
    const navigate = useNavigate();

    const [scenarios, setScenarios] = useState<GetScenarioLightDto[]>([])

    const getScenarioId = () => {
        scenarioRequests.getScenarioId().then((id: string) => {
            if (id) navigate(`/scenarios/${id}/true`);
            else console.log("Error");
        });
    }

    const handleClick = (id: string) => {
        navigate(`/scenarios/${id}/false`);
    }

    useEffect(() => {
        scenarioRequests.getAllScenarios().then((res) => {
            setScenarios(res);
        });
    }, []);

    return (
        <div className="h-full flex gap-4 flex-wrap">
            <Card onClick={getScenarioId}
                  className='w-72 h-96 bg-[#203D4E] border-none flex flex-col gap-4 justify-center cursor-pointer items-center'>
                <img src='../../../public/add-blue.svg' alt='logo' className='w-12 h-12'/>
                <p className='text-xl font-semibold text-[#00D9FF]'>Ajouter un scénario</p>
            </Card>
            {scenarios.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} handleClick={() => handleClick(scenario.id)}/>
            ))}
        </div>
    );
}

export default ScenariosScreen;

