import { Test, TestingModule } from '@nestjs/testing';
import { AgricultorsController } from './agricultors.controller';
import { AgricultorsService } from './agricultors.service';

describe('AgricultorsController', () => {
  let controller: AgricultorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgricultorsController],
      providers: [
        {
          provide: AgricultorsService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AgricultorsController>(AgricultorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
