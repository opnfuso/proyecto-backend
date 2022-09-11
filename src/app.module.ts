import { Module } from '@nestjs/common';
import { AdministradoresModule } from './administradores/administradores.module';
import { AdministradoresService } from './administradores/administradores.service';
import { PrismaService } from './prisma.service';
import { TecnicosModule } from './tecnicos/tecnicos.module';

@Module({
  imports: [AdministradoresModule, TecnicosModule],
})
export class AppModule {}
