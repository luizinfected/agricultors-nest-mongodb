import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AgricultorsModule } from './agricultors/agricultors.module';

const dbConnectionStr =
  process.env.DB_CONNECTION_STRING ?? 'mongodb://localhost:27017/yourDB';

@Module({
  imports: [MongooseModule.forRoot(dbConnectionStr), AgricultorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
