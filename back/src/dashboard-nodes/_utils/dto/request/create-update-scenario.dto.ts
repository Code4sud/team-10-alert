import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class Size {
  @IsNumber()
  width: number;

  @IsNumber()
  height: number;
}

export class PositionNode {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}

export class Node {
  @IsString()
  id: string;

  @IsString()
  type: string;

  @IsObject()
  data: DataScenarioNode | DataQuestionNode | DataResponseNode;

  @IsObject()
  position: PositionNode;

  @IsObject()
  measured: Size;
}

export class Edge {
  @IsString()
  id: string;

  @IsString()
  source: string;

  @IsString()
  target: string;
}

export class UpdateScenarioDto {
  @IsArray()
  @Type(() => Node)
  nodes: Node[];

  @IsArray()
  @Type(() => Edge)
  edges: Edge[];
}

export class DataScenarioNode {
  @IsString()
  title: string;

  @IsString()
  photo: string;

  @IsString()
  description: string;
}

export class DataQuestionNode {
  @IsString()
  description: string;

  @IsString()
  photoUrl: string;
}

export class DataResponseNode {
  @IsString()
  description: string;

  @IsString()
  effect: string;

  @IsString()
  score: string;

  @IsNumber()
  healthPointsImpact: number;

  @IsNumber()
  wisePointsImpact: number;
}
