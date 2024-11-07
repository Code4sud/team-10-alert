import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger'; // Importation de ApiOperation
import { Protect } from 'src/auth/_utils/decorator/protect.decorator';
import { ConnectedUser } from 'src/users/_utils/decorator/connecter-user.decorator';
import { User } from 'src/users/schemas/users.schema';
import {
  CreateUserVigilanceTodoDto,
  CreateVigilanceDto,
  CreateVigilanceTodoDto,
  UpdateUserVigilanceTodoDto,
  UpdateVigilanceDto,
  UpdateVigilanceTodoDto,
} from './_utils/dtos/requests/dto.dto';
import { VigilanceService } from './vigilance.service';

@Controller('vigilance')
export class VigilanceController {
  constructor(private readonly vigilanceService: VigilanceService) {}

  @ApiOperation({ summary: 'Create a new vigilance' }) // Description de l'opération
  @Post('create-vigilance')
  createVigilance(@Body() createVigilanceDto: CreateVigilanceDto) {
    return this.vigilanceService.createVigilance(createVigilanceDto);
  }

  @ApiOperation({ summary: 'Find all vigilances' })
  @Get('find-all-vigilances')
  findAllVigilances() {
    return this.vigilanceService.findAllVigilances();
  }

  @ApiOperation({ summary: 'Find one vigilance by id' })
  @Get('find-one-vigilance/:id')
  findOneVigilance(@Param('id') id: string) {
    return this.vigilanceService.findOneVigilance(id);
  }

  @ApiOperation({ summary: 'Update vigilance by id' })
  @Put('update-vigilance/:id')
  updateVigilance(@Param('id') id: string, @Body() updateVigilanceDto: UpdateVigilanceDto) {
    return this.vigilanceService.updateVigilance(id, updateVigilanceDto);
  }

  @ApiOperation({ summary: 'Remove vigilance by id' })
  @Delete('remove-vigilance/:id')
  removeVigilance(@Param('id') id: string) {
    return this.vigilanceService.removeVigilance(id);
  }

  @ApiOperation({ summary: 'Create a new vigilance todo' })
  @Post('create-vigilance-todo')
  createVigilanceTodo(@Body() createVigilanceTodoDto: CreateVigilanceTodoDto) {
    return this.vigilanceService.createVigilanceTodo(createVigilanceTodoDto);
  }

  @ApiOperation({ summary: 'Find all vigilance todos' })
  @Get('find-all-vigilance-todos')
  findAllVigilanceTodos() {
    return this.vigilanceService.findAllVigilanceTodos();
  }

  @ApiOperation({ summary: 'Find one vigilance todo by id' })
  @Get('find-one-vigilance-todo/:id')
  findOneVigilanceTodo(@Param('id') id: string) {
    return this.vigilanceService.findOneVigilanceTodo(id);
  }

  @ApiOperation({ summary: 'Update vigilance todo by id' })
  @Put('update-vigilance-todo/:id')
  updateVigilanceTodo(@Param('id') id: string, @Body() updateVigilanceTodoDto: UpdateVigilanceTodoDto) {
    return this.vigilanceService.updateVigilanceTodo(id, updateVigilanceTodoDto);
  }

  @ApiOperation({ summary: 'Remove vigilance todo by id' })
  @Delete('remove-vigilance-todo/:id')
  removeVigilanceTodo(@Param('id') id: string) {
    return this.vigilanceService.removeVigilanceTodo(id);
  }

  @ApiOperation({ summary: 'Create a new user vigilance todo' })
  @Post('create-user-vigilance-todo')
  createUserVigilanceTodo(@Body() createUserVigilanceTodoDto: CreateUserVigilanceTodoDto) {
    return this.vigilanceService.createUserVigilanceTodo(createUserVigilanceTodoDto);
  }

  @ApiOperation({ summary: 'Find all user vigilance todos' })
  @Protect() // Protège cette route et récupère l'utilisateur connecté
  @Get('find-all-user-vigilance-todos')
  async findAllUserVigilanceTodos(@ConnectedUser() user: User) {
    return this.vigilanceService.findAllUserVigilanceTodosForUser(user);
  }

  @ApiOperation({ summary: 'Find one user vigilance todo by id' })
  @Protect() // Protège cette route et récupère l'utilisateur connecté
  @Get('find-one-user-vigilance-todo/:id')
  async findOneUserVigilanceTodo(@Param('id') id: string, @ConnectedUser() user: User) {
    return this.vigilanceService.findOneUserVigilanceTodoForUser(id, user);
  }

  @ApiOperation({ summary: 'Update user vigilance todo by id' })
  @Protect() // Protège cette route et récupère l'utilisateur connecté
  @Put('update-user-vigilance-todo/:id')
  async updateUserVigilanceTodo(
    @Param('id') id: string,
    @Body() updateUserVigilanceTodoDto: UpdateUserVigilanceTodoDto,
    @ConnectedUser() user: User,
  ) {
    return this.vigilanceService.updateUserVigilanceTodoForUser(id, updateUserVigilanceTodoDto, user);
  }

  @ApiOperation({ summary: 'Remove user vigilance todo by id' })
  @Protect() // Protège cette route et récupère l'utilisateur connecté
  @Delete('remove-user-vigilance-todo/:id')
  async removeUserVigilanceTodo(@Param('id') id: string, @ConnectedUser() user: User) {
    return this.vigilanceService.removeUserVigilanceTodoForUser(id, user);
  }
}
