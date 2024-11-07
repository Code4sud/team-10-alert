import { Injectable } from '@nestjs/common';
import { ScenarioRepository } from './scenario.repository';
import { CreateScenarioDto } from './_utils/dtos/request/create-scenario.dto';

@Injectable()
export class ScenarioService {
  constructor(private readonly scenariosRepository: ScenarioRepository) {}

  getAllScenarioAvailable() {
    return this.scenariosRepository.findAllScenarios();
  }

  async getScenarioById(scenarioId: string) {
    const scenario = await this.scenariosRepository.findScenarioById(scenarioId);
  }

  createScenario(scenario: CreateScenarioDto) {
    return this.scenariosRepository.createScenario();
  }
}
