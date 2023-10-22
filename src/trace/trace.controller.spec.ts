import { Test, TestingModule } from '@nestjs/testing';
import { TraceController } from './trace.controller';
import { TraceService } from './trace.service';

describe('TraceController', () => {
  let controller: TraceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraceController],
      providers: [TraceService],
    }).compile();

    controller = module.get<TraceController>(TraceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
