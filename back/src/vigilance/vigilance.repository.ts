import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vigilance } from './schemas/vigilance.schema';

@Injectable()
export class VigilanceRepository {
  constructor(@InjectRepository(Vigilance) private readonly vigilanceModel: Repository<Vigilance>) {}

  getAllVigilances = () => this.vigilanceModel.find();
}
