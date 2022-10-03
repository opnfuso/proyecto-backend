import { Module } from '@nestjs/common';
import { AdministradoresModule } from './administradores/administradores.module';
import { TecnicosModule } from './tecnicos/tecnicos.module';
import { ClientesModule } from './clientes/clientes.module';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { BitacorasModule } from './bitacoras/bitacoras.module';
import { ManualReparacionesModule } from './manual-reparaciones/manual-reparaciones.module';
import { ReparacionesBitacorasModule } from './reparaciones-bitacoras/reparaciones-bitacoras.module';
import { TecnicosBitacorasModule } from './tecnicos-bitacoras/tecnicos-bitacoras.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TreeModule } from './tree/tree.module';
import { TreeBitacorasModule } from './tree-bitacoras/tree-bitacoras.module';

ConfigModule.forRoot();

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    }),
    AdministradoresModule,
    TecnicosModule,
    ClientesModule,
    DispositivosModule,
    BitacorasModule,
    ManualReparacionesModule,
    ReparacionesBitacorasModule,
    TecnicosBitacorasModule,
    TreeModule,
    TreeBitacorasModule,
  ],
})
export class AppModule {}
