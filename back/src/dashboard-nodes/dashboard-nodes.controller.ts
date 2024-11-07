import { Body, Controller, Post } from '@nestjs/common';
import { DashboardNodesService } from './dashboard-nodes.service';

@Controller('dashboard-nodes')
export class DashboardNodesController {
  constructor(private readonly dashboardNodesService: DashboardNodesService) {}

  @Post()
  updateOrCreateScenario(@Body() body: any) {
    console.log(JSON.stringify(body));
    return this.dashboardNodesService.updateOrCreateScenario();
  }
}
