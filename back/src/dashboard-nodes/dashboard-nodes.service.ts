import { Injectable } from '@nestjs/common';
import { DashboardNodesRepository } from './dashboard-nodes.repository';
import { ScenarioRepository } from '../scenario/scenario.repository';
import { DataResponseNode, DataScenarioNode, UpdateScenarioDto } from './_utils/dto/request/create-update-scenario.dto';
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

  fromDashboarNodesToScenarioUpdate(scenarioId: string, data: any) {
    const { nodes, edges } = data;
    const dataScenarioNode = nodes.filter((node) => node.type === 'scenario')[0].data as DataScenarioNode;
    const initialQuestionNode = nodes.filter((node) => node.type === 'question' && node.id === 'a')[0];

    const scenario = {
      scenarioId: scenarioId,
      initialNodeId: initialQuestionNode.id,
      nodes: [],
    };
    console.log('dataScenarioNode', dataScenarioNode);

    nodes.forEach((node) => {
      if (node.type === 'question') {
        console.log('Node is a question');
        console.log(node);
        const id = node.id;

        const responseIds = edges.filter((edge) => edge.source === id).map((edge) => edge.target);
        console.log('responseIds = ', responseIds);
        const responses = nodes.filter((node) => responseIds.includes(node.id));
        const object = {
          id: node.id,
          imageUrl: node.data.photoUrl,
          description: node.data.description,
          responses: responses.map((res) => {
            console.log(res);
            const data = res.data as DataResponseNode;
            const questionTarget = edges.filter((edge) => edge.source === res.id)[0]?.target;
            console.log('questionTarget', questionTarget);
            return {
              description: data.description,
              scoreDescription: data.score,
              effectDescription: data.effect,
              healthPointsImpact: data.healthPointsImpact,
              wisePointsImpact: data.wisePointsImpact,
              scenarioNodeChildId: questionTarget,
            };
          }),
          scenarioId: scenarioId,
        };
        console.log('Object', object);
        scenario.nodes.push(object);
      }
    });
    console.log('Scenario', scenario);
    this.scenarioService.updateScenario(scenarioId, {
      description: dataScenarioNode.description,
      imageUrl: dataScenarioNode.photo,
      initialScenarioNodeId: scenario.initialNodeId,
      name: dataScenarioNode.title,
      scenarioNodes: { nodes: scenario.nodes },
    });
  }
}
