import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TraceService } from './trace.service';
import { CreateTraceDto } from './dto/create-trace.dto';
import { UpdateTraceDto } from './dto/update-trace.dto';

@Controller('trace')
export class TraceController {
  constructor(private readonly traceService: TraceService) {}

  @Post()
  create(@Body() createTraceDto: CreateTraceDto) {
    return this.traceService.create(createTraceDto);
  }

  @Get()
  findAll() {
    return this.traceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTraceDto: UpdateTraceDto) {
    return this.traceService.update(+id, updateTraceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.traceService.remove(+id);
  }
}
