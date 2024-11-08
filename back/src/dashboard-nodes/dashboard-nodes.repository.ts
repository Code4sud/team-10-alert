import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DashboardNode } from './schemas/dashboard-nodes.schema';

@Injectable()
export class DashboardNodesRepository {
  constructor(
    // @InjectRepository(Edge) private readonly edgeModel: Repository<Edge>,
    @InjectRepository(DashboardNode) private readonly dashboardNodeModel: Repository<DashboardNode>,
  ) {}

  findOneByScenarioId = (scenarioId: string) => this.dashboardNodeModel.findOne({ where: { scenarioId } });
  createScenario = (scenarioId: string, data: Record<string, any>) =>
    this.dashboardNodeModel.save({ scenarioId, data });
  updateOneByScenarioId = (scenarioId: string, data: Record<string, any>) =>
    this.dashboardNodeModel.update({ scenarioId }, { data });
}
