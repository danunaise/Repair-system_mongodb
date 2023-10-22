export class CreateReportDto {
  readonly roomId: number;
  readonly title: string;
  readonly description: string;
  readonly department: string;
  readonly status: string;
  readonly fixedBy: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
