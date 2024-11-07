import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardNodesService } from './dashboard-nodes.service';
import { DashboardNode } from './schemas/dashboard-nodes.schema';
import { Edge } from './schemas/edges.schema';

@Module({
  imports: [TypeOrmModule.forFeature([DashboardNode, Edge])],
  controllers: [],
  providers: [DashboardNodesService],
})
export class DashboardNodesModule {}
