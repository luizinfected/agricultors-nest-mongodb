import { Test, TestingModule } from '@nestjs/testing';
import { FarmersService } from './farmers.service';
import { getModelToken } from '@nestjs/mongoose';

describe('AgricultorsService', () => {
  let service: FarmersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FarmersService,
        {
          provide: getModelToken('Agricultors'),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FarmersService>(FarmersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
