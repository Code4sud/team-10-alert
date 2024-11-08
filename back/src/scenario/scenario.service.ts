import { Injectable } from '@nestjs/common';
import { ScenarioRepository } from './scenario.repository';
import { CreateScenarioType } from './_utils/type/create-scenario.type';

@Injectable()
export class ScenarioService {
  constructor(private readonly scenariosRepository: ScenarioRepository) {}

  getAllScenarioAvailable() {
    return this.scenariosRepository.findAllScenarios();
  }

  updateScenario(scenarioId: string, data: CreateScenarioType) {
    return this.scenariosRepository.updateScenario(scenarioId, data);
  }

  async getScenarioById(scenarioId: string) {
    const scenario = await this.scenariosRepository.findScenarioById(scenarioId);
    console.log(scenario);
    return scenario;
  }

  createScenario() {
    return this.scenariosRepository.createScenario();
  }

  /*
                        updateScenario(scenarioId: string, data: CreateScenarioType) {
                          this.scenariosRepository.updateScenario(scenarioId, data);
                        }
                  
                        createScenarioNode(data: CreateScenarioNodeType) {
                          this.scenariosRepository.createScenarioNode(data);
                        }
                  
                       */
}
