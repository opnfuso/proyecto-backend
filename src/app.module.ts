import { Module } from '@nestjs/common';
import { AdministradoresModule } from './administradores/administradores.module';
import { TecnicosModule } from './tecnicos/tecnicos.module';
import { ClientesModule } from './clientes/clientes.module';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { BitacorasModule } from './bitacoras/bitacoras.module';
import { ManualReparacionesModule } from './manual-reparaciones/manual-reparaciones.module';
import { ReparacionesBitacorasModule } from './reparaciones-bitacoras/reparaciones-bitacoras.module';
import { TecnicosBitacorasModule } from './tecnicos-bitacoras/tecnicos-bitacoras.module';

@Module({
  imports: [
    AdministradoresModule,
    TecnicosModule,
    ClientesModule,
    DispositivosModule,
    BitacorasModule,
    ManualReparacionesModule,
    ReparacionesBitacorasModule,
    TecnicosBitacorasModule,
  ],
})
export class AppModule {}
