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

  @Get()
  test() {
    const json = {
      nodes: [
        {
          id: 'init',
          type: 'scenario',
          data: {
            title: 'Scneario n° 1 : ile de l enfer ',
            photo: 'url',
            description: 'une description denfer',
          },
          position: { x: -16, y: -210 },
          measured: { width: 258, height: 388 },
        },
        {
          id: 'a',
          type: 'question',
          data: { description: 'Description de la question' },
          position: { x: -16, y: 240 },
          measured: { width: 258, height: 188 },
          selected: false,
        },
        {
          id: '1',
          type: 'response',
          data: { description: 'Choix 3', effect: 'fait mi ', score: 'bad' },
          position: { x: 394.5, y: 480 },
          measured: { width: 249, height: 304 },
          selected: true,
          dragging: false,
        },
        {
          id: '2',
          type: 'response',
          data: { description: 'Choix 2', effect: 'fait ci ', score: 'good' },
          position: { x: -21, y: 480 },
          measured: { width: 249, height: 304 },
          selected: false,
        },
        {
          id: '3',
          type: 'response',
          data: { description: 'Choix 1', effect: 'fait ça', score: 'good' },
          position: { x: -336, y: 480 },
          measured: { width: 249, height: 304 },
          selected: false,
        },
      ],
      edges: [
        { id: 'einit-a', source: 'init', target: 'a' },
        {
          id: 'ea-1',
          source: 'a',
          target: '1',
        },
        { id: 'ea-2', source: 'a', target: '2' },
        { id: 'ea-3', source: 'a', target: '3' },
      ],
    };

    this.dashboardNodesService.fromDashboarNodesToScenarioUpdate('50bd4909-2cee-4a05-83f0-e3aa0fa3c32e', json);
  }
}
