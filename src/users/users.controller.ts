import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('find-all')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('find-by-id/:id')
  async findById(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findById(id);
  }

  @Put('update')
  async update(@Param('id') id: number, @Body() updateUserDto:UpdateUserDto): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }
}