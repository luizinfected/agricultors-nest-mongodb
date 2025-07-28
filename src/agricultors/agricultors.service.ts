import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import { Agricultors, type AgricultorsDocument } from './agricultors.schema';
import { CreateAgricultorDto } from './dto/create-agricultor.dto';
import { UpdateAgricultorDto } from './dto/update-agricultor.dto';

@Injectable()
export class AgricultorsService {
  constructor(
    @InjectModel(Agricultors.name)
    private agricultorsModel: Model<AgricultorsDocument>,
  ) {}
  async create(dto: CreateAgricultorDto): Promise<Agricultors> {
    const exist = await this.agricultorsModel.findOne({ cpf: dto.cpf });

    if (exist) {
      throw new ConflictException('Agricultor already exists');
    }

    const agricultor = new this.agricultorsModel(dto);

    return agricultor.save();
  }

  async findAll(
    page = 1,
    limit = 10,
  ): Promise<{ data: Agricultors[]; total: number }> {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.agricultorsModel.find().skip(skip).limit(limit).exec(),
      this.agricultorsModel.countDocuments().exec(),
    ]);
    return {
      data,
      total,
    };
  }

  async find(id: string): Promise<Agricultors> {
    const agricultor = await this.agricultorsModel.findById(id).exec();

    if (!agricultor) {
      throw new NotFoundException('Agricultor not found');
    }

    return agricultor;
  }

  async update(dto: UpdateAgricultorDto, id: string): Promise<Agricultors> {
    const agricultor = await this.agricultorsModel.findById(id).exec();

    if (!agricultor) {
      throw new NotFoundException('Agricultor not found');
    }

    Object.assign(agricultor, dto);

    await agricultor.save();

    return agricultor;
  }

  async delete(id: string): Promise<{ statusCode: number; message: string }> {
    const agricultor = await this.agricultorsModel.findById(id).exec();

    if (!agricultor) {
      throw new NotFoundException('Agricultor not found');
    }
    if (agricultor.active) {
      throw new UnprocessableEntityException('Agricultor is active');
    }
    await this.agricultorsModel.deleteOne({ _id: agricultor._id }).exec();

    return {
      statusCode: 200,
      message: 'Agricultor deleted',
    };
  }
}
