import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmersModule } from './farmers/farmers.module';

const dbConnectionStr =
  process.env.DB_CONNECTION_STRING ?? 'mongodb://localhost:27017/agricultorsDB';

@Module({
  imports: [MongooseModule.forRoot(dbConnectionStr), FarmersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
