import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmersController } from './farmers.controller';
import { FarmersService } from './farmers.service';
import { Farmers, FarmersSchema } from './farmers.schema';

@Module({
  controllers: [FarmersController],
  providers: [FarmersService],
  imports: [
    MongooseModule.forFeature([{ name: Farmers.name, schema: FarmersSchema }]),
  ],
})
export class FarmersModule {}
