import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserVigilanceTodo } from './schemas/user-vigilance-todo.schema';
import { VigilanceTodo } from './schemas/vigilance-todo.schema';
import { Vigilance } from './schemas/vigilance.schema';
import { VigilanceController } from './vigilance.controller';
import { VigilanceRepository } from './vigilance.repository';
import { VigilanceService } from './vigilance.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vigilance, VigilanceTodo, UserVigilanceTodo])],
  controllers: [VigilanceController],
  providers: [VigilanceService, VigilanceRepository],
})
export class VigilanceModule {}
