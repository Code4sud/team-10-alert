import {AzureAxios} from '@/api/axios';
import {CreateScenarioDto, GetScenarioDto, GetScenarioLightDto} from "@/store/dashboard-nodes/dashboard-nodes.model";

export const scenarioRequests = {
    createOrUpdateScenario: (createDto: CreateScenarioDto, scenarioId: string) => AzureAxios.post<CreateScenarioDto>(`dashboard-nodes/scenario/${scenarioId}`, createDto).then((x) => x.data),
    getScenarioId: () => AzureAxios.post<any>("scenario").then((x) => x.data.id),
    getAllScenarios: () => AzureAxios.get<GetScenarioLightDto[]>("scenario/all").then((x) => x.data),
    getScenario: (id: string) => AzureAxios.get<GetScenarioDto>(`dashboard-nodes/${id}`).then((x) => x.data),
};

