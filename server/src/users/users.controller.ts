import { Controller, Delete, Get, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {}

  @Get(':id')
  getUserById() {}

  @Patch(':id')
  updateUser() {}

  @Delete(':id')
  deleteUser() {}
}
