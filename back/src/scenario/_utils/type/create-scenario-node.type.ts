import { CreateResponseNodeType } from './create-scenario-response.type';

export class CreateScenarioNodeType {
  id: string;
  imageUrl: string;
  description: string;
  responses: CreateResponseNodeType[];
  scenarioId: string;
}
