import { CreateResponseDto } from '../dtos/request/create-scenario-response.dto';

export class CreateScenarioNodeType {
  imageUrl: string;
  description: string;
  responses: CreateResponseDto[];
  responseParentId: string;
  scenarioId: string;
}
