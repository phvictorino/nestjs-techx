import { UsersService } from './users.service';
import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import User from '../../dist/entitys/user.entity';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.save(user);
  }

  @Put()
  update(@Body() user: User): Promise<User> {
    return this.usersService.save(user);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.usersService.delete(id);
  }
}
