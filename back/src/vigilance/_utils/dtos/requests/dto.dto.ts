export class CreateVigilanceDto {
  alertType: string;
  vigilanceType: string;
  alertStartDate: Date;
}

export class UpdateVigilanceDto {
  alertType?: string;
  vigilanceType?: string;
  alertStartDate?: Date;
}

export class CreateVigilanceTodoDto {
  task: string;
}

export class UpdateVigilanceTodoDto {
  task?: string;
}

export class CreateUserVigilanceTodoDto {
  userId: string;
  vigilanceId: string;
  vigilanceTodoId: string;
  isChecked: boolean;
  completionDate?: Date;
}

export class UpdateUserVigilanceTodoDto {
  isChecked?: boolean;
  completionDate?: Date;
}
