import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScenarioController } from './scenario.controller';
import { ScenarioService } from './scenario.service';
import { Scenario } from './schemas/scenario.schema';
import { ScenarioRepository } from './scenario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Scenario])],
  controllers: [ScenarioController],
  providers: [ScenarioService, ScenarioRepository],
  exports: [ScenarioService, ScenarioRepository],
})
export class ScenarioModule {}
