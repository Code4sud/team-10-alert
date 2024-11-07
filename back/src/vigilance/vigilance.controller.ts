import { Controller } from '@nestjs/common';
import { VigilanceService } from './vigilance.service';

@Controller('vigilance')
export class VigilanceController {
  constructor(private readonly vigilanceService: VigilanceService) {}
}
