import { Test, TestingModule } from '@nestjs/testing';
import { AgricultorsService } from './agricultors.service';
import { getModelToken } from '@nestjs/mongoose';

describe('AgricultorsService', () => {
  let service: AgricultorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgricultorsService,
        {
          provide: getModelToken('Agricultors'),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<AgricultorsService>(AgricultorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
