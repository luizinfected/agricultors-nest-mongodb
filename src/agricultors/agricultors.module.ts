import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgricultorsController } from './agricultors.controller';
import { AgricultorsService } from './agricultors.service';
import { Agricultors, AgricultorsSchema } from './agricultors.schema';

@Module({
  controllers: [AgricultorsController],
  providers: [AgricultorsService],
  imports: [
    MongooseModule.forFeature([
      { name: Agricultors.name, schema: AgricultorsSchema },
    ]),
  ],
})
export class AgricultorsModule {}
