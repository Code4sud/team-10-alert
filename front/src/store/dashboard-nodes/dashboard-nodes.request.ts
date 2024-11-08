import {AzureAxios} from '../../api/axios';
import {CreateScenarioDto} from "@/store/dashboard-nodes/dashboard-nodes.model";

export const scenarioRequests = {
    createOrUpdateScenario: (scenarioId: string, createDto: CreateScenarioDto) => AzureAxios.post<CreateScenarioDto>(`dashboard-nodes/scenario/${scenarioId}`, createDto).then((x) => x.data),

};

