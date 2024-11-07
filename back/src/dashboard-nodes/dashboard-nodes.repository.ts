import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DashboardNode } from './schemas/dashboard-nodes.schema';
import { Edge } from './schemas/edges.schema';

@Injectable()
export class DashboardNodesRepository {
  constructor(
    @InjectRepository(Edge) private readonly edgeModel: Repository<Edge>,
    @InjectRepository(DashboardNode) private readonly dashboardNodeModel: Repository<DashboardNode>,
  ) {}
}
