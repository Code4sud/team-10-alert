import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardNodesService } from './dashboard-nodes.service';
import { DashboardNode } from './schemas/dashboard-nodes.schema';
import { DashboardNodesController } from './dashboard-nodes.controller';
import { DashboardNodesRepository } from './dashboard-nodes.repository';
import { ScenarioModule } from '../scenario/scenario.module';

@Module({
  imports: [TypeOrmModule.forFeature([DashboardNode]), ScenarioModule],
  controllers: [DashboardNodesController],
  providers: [DashboardNodesService, DashboardNodesRepository],
})
export class DashboardNodesModule {}
