/*
  Warnings:

  - The primary key for the `Dispositivo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Bitacora" DROP CONSTRAINT "Bitacora_imei_dispositivo_fkey";

-- AlterTable
ALTER TABLE "Bitacora" ALTER COLUMN "imei_dispositivo" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Dispositivo" DROP CONSTRAINT "Dispositivo_pkey",
ALTER COLUMN "imei" SET DATA TYPE TEXT,
ADD CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("imei");

-- AddForeignKey
ALTER TABLE "Bitacora" ADD CONSTRAINT "Bitacora_imei_dispositivo_fkey" FOREIGN KEY ("imei_dispositivo") REFERENCES "Dispositivo"("imei") ON DELETE RESTRICT ON UPDATE CASCADE;
