import { Controller, Delete, Get, Patch, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return Res();
  }

  @Get(':id')
  getUserById(id: number) {
    return id;
  }

  @Patch(':id')
  updateUser() {}

  @Delete(':id')
  deleteUser() {}
}
