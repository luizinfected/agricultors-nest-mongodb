import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { FarmersService } from './farmers.service';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
import { ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Farmers } from './farmers.schema';

@ApiTags('farmers')
@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new farmer' })
  async create(@Body() dto: CreateFarmerDto): Promise<Farmers> {
    return this.farmersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all farmers' })
  @ApiQuery({ name: 'page', type: Number, required: false, default: 1 })
  @ApiQuery({ name: 'limit', type: Number, required: false, default: 10 })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<{ data: Farmers[]; total: number }> {
    return this.farmersService.findAll(Number(page), Number(limit));
  }

  @Get(':id')
  @ApiOperation({ summary: 'List a farmer by id' })
  @ApiParam({ name: 'id', type: String })
  async findOne(@Param('id') id: string): Promise<Farmers> {
    return this.farmersService.find(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a farmer' })
  @ApiParam({ name: 'id', type: String })
  async update(
    @Body() dto: UpdateFarmerDto,
    @Param('id') id: string,
  ): Promise<Farmers> {
    return this.farmersService.update(dto, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a farmer' })
  @ApiParam({ name: 'id', type: String })
  async delete(
    @Param('id') id: string,
  ): Promise<{ statusCode: number; message: string }> {
    return this.farmersService.delete(id);
  }
}
