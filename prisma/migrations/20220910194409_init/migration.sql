-- CreateTable
CREATE TABLE "Administrador" (
    "id" SERIAL NOT NULL,
    "nombres" VARCHAR(60) NOT NULL,
    "apellidos" VARCHAR(60) NOT NULL,
    "fecha_nacimiento" DATE NOT NULL,
    "telefono" VARCHAR(13) NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnico" (
    "id" SERIAL NOT NULL,
    "nombres" VARCHAR(60) NOT NULL,
    "apellidos" VARCHAR(60) NOT NULL,
    "fecha_nacimiento" DATE NOT NULL,
    "telefono" VARCHAR(13) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Tecnico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombres" VARCHAR(60) NOT NULL,
    "apellidos" VARCHAR(60) NOT NULL,
    "fecha_nacimiento" DATE NOT NULL,
    "telefono" VARCHAR(13) NOT NULL,
    "domicilio" VARCHAR(100) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "imei" TEXT NOT NULL,
    "modelo" VARCHAR(30) NOT NULL,
    "marca" VARCHAR(30) NOT NULL,
    "numero_serie" VARCHAR(60) NOT NULL,
    "fecha_recibido" DATE NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("imei")
);

-- CreateTable
CREATE TABLE "Bitacora" (
    "id" SERIAL NOT NULL,
    "imei_dispositivo" TEXT NOT NULL,

    CONSTRAINT "Bitacora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManualReparaciones" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "contenido" TEXT NOT NULL,

    CONSTRAINT "ManualReparaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TecnicosBitacoras" (
    "id" SERIAL NOT NULL,
    "tecnicoId" INTEGER NOT NULL,
    "bitacoraId" INTEGER NOT NULL,

    CONSTRAINT "TecnicosBitacoras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReparacionesBitacoras" (
    "id" SERIAL NOT NULL,
    "manualReparacionesId" INTEGER NOT NULL,
    "bitacoraId" INTEGER NOT NULL,

    CONSTRAINT "ReparacionesBitacoras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dispositivo" ADD CONSTRAINT "Dispositivo_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bitacora" ADD CONSTRAINT "Bitacora_imei_dispositivo_fkey" FOREIGN KEY ("imei_dispositivo") REFERENCES "Dispositivo"("imei") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TecnicosBitacoras" ADD CONSTRAINT "TecnicosBitacoras_tecnicoId_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "Tecnico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TecnicosBitacoras" ADD CONSTRAINT "TecnicosBitacoras_bitacoraId_fkey" FOREIGN KEY ("bitacoraId") REFERENCES "Bitacora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReparacionesBitacoras" ADD CONSTRAINT "ReparacionesBitacoras_manualReparacionesId_fkey" FOREIGN KEY ("manualReparacionesId") REFERENCES "ManualReparaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReparacionesBitacoras" ADD CONSTRAINT "ReparacionesBitacoras_bitacoraId_fkey" FOREIGN KEY ("bitacoraId") REFERENCES "Bitacora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
