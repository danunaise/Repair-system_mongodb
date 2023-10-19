export class CreateReportDto {
  readonly roomId: number;
  readonly title: string;
  readonly description: string;
  readonly department: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}