import { Module } from '@nestjs/common';
import { AdministradoresModule } from './administradores/administradores.module';
import { AdministradoresService } from './administradores/administradores.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AdministradoresModule],
})
export class AppModule {}
