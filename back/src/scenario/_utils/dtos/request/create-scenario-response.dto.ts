import { IsString } from 'class-validator';

export class CreateResponseDto {
  @IsString()
  description: string;

  @IsString()
  scoreDescription: string;

  @IsString()
  effectDescription: string;

  @IsString()
  healthPointsImpact: number;

  @IsString()
  wisePointsImpact: number;

  @IsString()
  scenarioNodeParentId: string;

  @IsString()
  scenarioNodeChildId: string;
}
