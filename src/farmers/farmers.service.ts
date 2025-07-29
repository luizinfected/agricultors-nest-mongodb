import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import { Farmers, type FarmersDocument } from './farmers.schema';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Injectable()
export class FarmersService {
  constructor(
    @InjectModel(Farmers.name)
    private farmersModel: Model<FarmersDocument>,
  ) {}
  async create(dto: CreateFarmerDto): Promise<Farmers> {
    const exist = await this.farmersModel.findOne({ cpf: dto.cpf });

    if (exist) {
      throw new ConflictException('Farmer already exists');
    }

    const farmer = new this.farmersModel(dto);

    return farmer.save();
  }

  async findAll(
    page = 1,
    limit = 10,
  ): Promise<{ data: Farmers[]; total: number }> {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.farmersModel.find().skip(skip).limit(limit).exec(),
      this.farmersModel.countDocuments().exec(),
    ]);
    return {
      data,
      total,
    };
  }

  async find(id: string): Promise<Farmers> {
    const farmer = await this.farmersModel.findById(id).exec();

    if (!farmer) {
      throw new NotFoundException('Farmer not found');
    }

    return farmer;
  }

  async update(dto: UpdateFarmerDto, id: string): Promise<Farmers> {
    const farmer = await this.farmersModel.findById(id).exec();

    if (!farmer) {
      throw new NotFoundException('Farmer not found');
    }

    Object.assign(farmer, dto);

    await farmer.save();

    return farmer;
  }

  async delete(id: string): Promise<{ statusCode: number; message: string }> {
    const farmer = await this.farmersModel.findById(id).exec();

    if (!farmer) {
      throw new NotFoundException('Farmer not found');
    }
    if (farmer.active) {
      throw new UnprocessableEntityException('Farmer is active');
    }
    await this.farmersModel.deleteOne({ _id: farmer._id }).exec();

    return {
      statusCode: 200,
      message: 'Farmer deleted',
    };
  }
}
