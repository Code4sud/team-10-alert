import { Injectable } from '@nestjs/common';
import { DashboardNodesRepository } from './dashboard-nodes.repository';
import { ScenarioRepository } from '../scenario/scenario.repository';
import { DataQuestionNode, DataScenarioNode, UpdateScenarioDto } from './_utils/dto/request/create-update-scenario.dto';
import { ScenarioService } from '../scenario/scenario.service';

@Injectable()
export class DashboardNodesService {
  constructor(
    private readonly dashboardNodesRepository: DashboardNodesRepository,
    private readonly scenarioRepository: ScenarioRepository,
    private readonly scenarioService: ScenarioService,
  ) {}

  async updateOrCreateScenario(scenarioId: string, data: UpdateScenarioDto) {
    const existingNode = await this.dashboardNodesRepository.findOneByScenarioId(scenarioId);

    if (existingNode) {
      return this.dashboardNodesRepository.updateOneByScenarioId(scenarioId, data);
    } else {
      return this.dashboardNodesRepository.createScenario(scenarioId, data);
    }
  }

  async createScenario() {
    const scenario = await this.scenarioRepository.createScenario();
    console.log(scenario);
    return this.dashboardNodesRepository.createScenario(scenario.id, null);
  }

  fromDashboarNodesToScenarioUpdate(scenarioId: string, data: UpdateScenarioDto) {
    const { nodes, edges } = data;
    const dataScenarioNode = nodes.filter((node) => node.type === 'scenario')[0].data as DataScenarioNode;
    const initialQuestion = nodes.filter((node) => node.type === 'question' && node.id === 'a')[0]
      .data as DataQuestionNode;

    nodes.forEach((node) => {
      console.log(node);
      const id = node.id;
      let responseIds: string[];
      let responses: Node[];
      if (node.type === 'question') {
        responseIds = edges.filter((edge) => edge.source === id).map((edge) => edge.target);
      }
    });

    this.scenarioService.updateScenario(scenarioId, {
      description: dataScenarioNode.description,
      imageUrl: dataScenarioNode.photo,
      initialScenarioNodeId: '',
      name: dataScenarioNode.title,
    });
  }
}
