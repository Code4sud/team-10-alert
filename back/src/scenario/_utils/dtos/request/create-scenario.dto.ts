import { IsArray, IsNumber, IsString } from 'class-validator';
import { ScenarioNode } from '../../../schemas/scenario-nodes.schema';

export class CreateScenarioDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  difficulty: number;

  @IsArray()
  scenarioNodes: ScenarioNode[];

  @IsString()
  initialScenarioNodeId: string;
}
