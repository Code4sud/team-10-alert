import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DashboardNodesService } from './dashboard-nodes.service';
import { UpdateScenarioDto } from './_utils/dto/request/create-update-scenario.dto';

@Controller('dashboard-nodes')
export class DashboardNodesController {
  constructor(private readonly dashboardNodesService: DashboardNodesService) {}

  @Post()
  createScenario() {
    return this.dashboardNodesService.createScenario();
  }

  @Post('/scenario/:scenarioId')
  updateScenario(@Param('scenarioId') scenarioId: string, @Body() updateScenarioDto: UpdateScenarioDto) {
    console.log('Helloooooo');
    console.log(JSON.stringify(updateScenarioDto));
    return this.dashboardNodesService.updateOrCreateScenario(scenarioId, updateScenarioDto);
  }

  @Get(':id')
  getDashboardNodeByScenarioId(@Param('id') scenarioId: string) {
    return this.dashboardNodesService.getDashboardNodesByScenarioId(scenarioId);
  }
}
