import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ReportModule } from './report/report.module';
import { AuthModule } from './auth/auth.module';
import { TraceModule } from './trace/trace.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    ReportModule,
    AuthModule,
    TraceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
