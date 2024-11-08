import { IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateVigilanceDto {
  @IsString()
  alertType: string;

  @IsString()
  vigilanceType: string;

  @IsDate()
  alertStartDate: Date;
}

export class UpdateVigilanceDto {
  alertType?: string;
  vigilanceType?: string;
  alertStartDate?: Date;
}

export class CreateVigilanceTodoDto {
  @IsNotEmpty()
  @IsString()
  task: string;
}

export class UpdateVigilanceTodoDto {
  task?: string;
}

export class CreateUserVigilanceTodoDto {
  @IsNotEmpty()
  @IsString()
  userId: string;
  @IsNotEmpty()
  @IsString()
  vigilanceId: string;
  @IsNotEmpty()
  @IsString()
  vigilanceTodoId: string;
  @IsBoolean()
  isChecked: boolean;
  @IsOptional()
  @IsDate()
  completionDate?: Date | null;
}

export class UpdateUserVigilanceTodoDto {
  isChecked?: boolean;
  completionDate?: Date;
}
