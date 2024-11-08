export type CreateScenarioType = {
  name: string;
  description: string;
  imageUrl: string;
  initialScenarioNodeId: string;
  scenarioNodes: Record<string, any>;
};
