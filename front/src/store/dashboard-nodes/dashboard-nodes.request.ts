import {AzureAxios} from '../../api/axios';
import {CreateScenarioDto} from "@/store/dashboard-nodes/dashboard-nodes.model";

export const scenarioRequests = {
    createOrUpdateScenario: (createDto: CreateScenarioDto) => AzureAxios.post<CreateScenarioDto>("dashboard-nodes", createDto).then((x) => x.data),

};

