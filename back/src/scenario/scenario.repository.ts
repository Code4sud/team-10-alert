import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scenario } from './schemas/scenario.schema';
import { CreateScenarioType } from './_utils/type/create-scenario.type';

@Injectable()
export class ScenarioRepository {
  constructor(@InjectRepository(Scenario) private readonly scenarioModel: Repository<Scenario>) {}

  findAllScenarios = () => this.scenarioModel.find();

  findScenarioById = (scenarioId: string) => this.scenarioModel.findOneBy({ id: scenarioId });

  createScenario = (name?: string, imageUrl?: string, scenarioNodes?: any[], initialScenarioNode?: string) =>
    this.scenarioModel.save({
      name: name || '',
      imageUrl: imageUrl || null,
      scenarioNodes: scenarioNodes || [],
      initialScenarioNodeId: initialScenarioNode || null,
    });
  /*
          createScenarioNode = (data: CreateScenarioNodeType) =>
            this.scenarioNodeModel.save({
              id: data.id,
              imageUrl: data.imageUrl,
              description: data.description,
              scenarioId: data.scenarioId,
            });
         */
  updateScenario = (scenarioId: string, data: CreateScenarioType) =>
    this.scenarioModel.update(
      { id: scenarioId },
      {
        name: data.name,
        description: data.description,
        initialScenarioNodeId: data.initialScenarioNodeId,
        imageUrl: data.imageUrl,
        scenarioNodes: data.scenarioNodes,
      },
    );
}
