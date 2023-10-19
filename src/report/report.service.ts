import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Report } from './schemas/report.schema';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(Report.name) private reportModel: mongoose.Model<Report>,
  ) {}

  async create(report: Report) {
    const createdReport = await this.reportModel.create(report);
    return createdReport;
  }

  async findAll(): Promise<Report[]> {
    const reports = await this.reportModel.find().exec();
    return reports;
  }

  async findOne(id: string) {
    const find = await this.reportModel.findById(id).exec();

    if (!find) {
      return 'Report not found';
    }

    return find;
  }

  async update(id: string, report: Report) {
    const update = await this.reportModel
      .findByIdAndUpdate({ _id: id }, report)
      .exec();

    if (!update) {
      return 'Report not found';
    }

    return update;
  }

  async remove(id: string) {
    return await this.reportModel.findByIdAndRemove(id);
  }
}
