import { IsArray, IsString } from 'class-validator';
import { CreateResponseDto } from './create-scenario-response.dto';

export class CreateScenarioNodeDto {
  @IsString()
  imageUrl: string;

  @IsString()
  description: string;

  @IsArray()
  responses: CreateResponseDto[];

  @IsString()
  responseParentId: string;

  @IsString()
  scenarioId: string;
}
