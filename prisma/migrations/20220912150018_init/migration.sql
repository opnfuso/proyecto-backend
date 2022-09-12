/*
  Warnings:

  - The primary key for the `Dispositivo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `costo` to the `Bitacora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_salida` to the `Bitacora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notas` to the `Bitacora` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terminado` to the `Bitacora` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `imei_dispositivo` on the `Bitacora` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `imei` on the `Dispositivo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Bitacora" DROP CONSTRAINT "Bitacora_imei_dispositivo_fkey";

-- AlterTable
ALTER TABLE "Bitacora" ADD COLUMN     "costo" REAL NOT NULL,
ADD COLUMN     "fecha_salida" DATE NOT NULL,
ADD COLUMN     "notas" TEXT NOT NULL,
ADD COLUMN     "terminado" BOOLEAN NOT NULL,
DROP COLUMN "imei_dispositivo",
ADD COLUMN     "imei_dispositivo" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Dispositivo" DROP CONSTRAINT "Dispositivo_pkey",
DROP COLUMN "imei",
ADD COLUMN     "imei" BIGINT NOT NULL,
ADD CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("imei");

-- AddForeignKey
ALTER TABLE "Bitacora" ADD CONSTRAINT "Bitacora_imei_dispositivo_fkey" FOREIGN KEY ("imei_dispositivo") REFERENCES "Dispositivo"("imei") ON DELETE RESTRICT ON UPDATE CASCADE;
