import { Injectable } from '@nestjs/common';
import { ScenarioRepository } from './scenario.repository';
import { CreateScenarioType } from './_utils/type/create-scenario.type';
import { CreateScenarioNodeType } from './_utils/type/create-scenario-node.type';

@Injectable()
export class ScenarioService {
  constructor(private readonly scenariosRepository: ScenarioRepository) {}

  getAllScenarioAvailable() {
    return this.scenariosRepository.findAllScenarios();
  }

  async getScenarioById(scenarioId: string) {
    const scenario = await this.scenariosRepository.findScenarioById(scenarioId);
  }

  createScenario() {
    return this.scenariosRepository.createScenario();
  }

  updateScenario(scenarioId: string, data: CreateScenarioType) {}

  createScenarioNode(data: CreateScenarioNodeType) {
    this.scenariosRepository.createScenarioNode();
  }
}
