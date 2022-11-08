/*
  Warnings:

  - Made the column `fecha_recibido` on table `Bitacora` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Cliente` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Bitacora" ALTER COLUMN "fecha_recibido" SET NOT NULL;

-- AlterTable
ALTER TABLE "Cliente" ALTER COLUMN "email" SET NOT NULL;
