import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { FindUsersQueryDto } from './dto/find-users-query.dto';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query() query: FindUsersQueryDto): string[] {
    return [];
  }

  @Get('interns')
  findInterns() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() body: Record<string, any>) {
    return { ...body };
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() body: Record<string, any>) {
    return { id, ...body };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return { id };
  }
}
