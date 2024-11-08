import { Controller, Get, Param, Post } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('scenario')
@Controller('scenario')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @Get('all')
  getAllScenarios() {
    return this.scenarioService.getAllScenarioAvailable();
  }

  @Get(':id')
  getScenarioById(@Param('id') scenarioId: string) {
    console.log(scenarioId);
    return this.scenarioService.getScenarioById(scenarioId);
  }

  @Post()
  createScenario() {
    return this.scenarioService.createScenario();
  }
}
