export class GetScenarioDto {
  name: string;
  description: string;
  difficulty: number;
  nodes: GetScenarioNodeDto[];
  startingNode: GetScenarioNodeDto;
}

export class GetScenarioNodeDto {
  description: string;
  responses: GetResponsesDto[];
}

export class GetResponsesDto {
  description: string;
  parentNodeId: string;
  targetNodeId: string;
}
