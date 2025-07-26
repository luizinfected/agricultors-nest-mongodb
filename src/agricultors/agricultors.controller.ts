import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AgricultorsService } from './agricultors.service';
import { CreateAgricultorDto } from './dto/create-agricultor.dto';
import { UpdateAgricultorDto } from './dto/update-agricultor.dto';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Agricultors } from './agricultors.schema';

@ApiTags('agricultors')
@Controller('agricultors')
export class AgricultorsController {
  constructor(private readonly agricultorsService: AgricultorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new agricultor' })
  async create(@Body() dto: CreateAgricultorDto): Promise<Agricultors> {
    return this.agricultorsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all agricultors' })
  async findAll(): Promise<Agricultors[]> {
    return this.agricultorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List a agricultor by id' })
  @ApiParam({ name: 'id', type: String })
  async findOne(@Param('id') id: string): Promise<Agricultors> {
    return this.agricultorsService.find(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a agricultor' })
  @ApiParam({ name: 'id', type: String })
  async update(
    @Body() dto: UpdateAgricultorDto,
    @Param('id') id: string,
  ): Promise<Agricultors> {
    return this.agricultorsService.update(dto, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a agricultor' })
  @ApiParam({ name: 'id', type: String })
  async delete(
    @Param('id') id: string,
  ): Promise<{ statusCode: number; message: string }> {
    return this.agricultorsService.delete(id);
  }
}
