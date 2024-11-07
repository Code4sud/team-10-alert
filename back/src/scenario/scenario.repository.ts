import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scenario } from './schemas/scenario.schema';
import { ScenarioNode } from './schemas/scenario-nodes.schema';
import { ScenarioResponse } from './schemas/scenario-responses.schema';

@Injectable()
export class ScenarioRepository {
  constructor(
    @InjectRepository(Scenario) private readonly scenarioModel: Repository<Scenario>,
    @InjectRepository(ScenarioNode) private readonly scenarioNodeModel: Repository<ScenarioNode>,
    @InjectRepository(ScenarioResponse) private readonly scenarioResponseModel: Repository<ScenarioResponse>,
  ) {}

  findAllScenarios = () => this.scenarioModel.find();

  findScenarioById = (scenarioId: string) => this.scenarioModel.findOneBy({ id: scenarioId });

  createScenario = (name?: string, imageUrl?: string, scenarioNodes?: ScenarioNode[], initialScenarioNode?: string) =>
    this.scenarioModel.save({
      name: name || '',
      imageUrl: imageUrl || null,
      scenarioNodes: scenarioNodes || [],
      initialScenarioNodeId: initialScenarioNode || null,
    });

  createScenarioNode = () => this.scenarioNodeModel.save({});
}
