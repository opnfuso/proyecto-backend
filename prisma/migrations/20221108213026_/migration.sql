/*
  Warnings:

  - You are about to drop the column `fecha_recibido` on the `Dispositivo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bitacora" ADD COLUMN     "fecha_recibido" DATE;

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "email" VARCHAR(30);

-- AlterTable
ALTER TABLE "Dispositivo" DROP COLUMN "fecha_recibido";
