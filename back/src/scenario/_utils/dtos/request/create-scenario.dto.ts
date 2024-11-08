import { IsArray, IsNumber, IsString } from 'class-validator';

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
  scenarioNodes: any;

  @IsString()
  initialScenarioNodeId: string;
}
