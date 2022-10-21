/*
  Warnings:

  - Added the required column `email` to the `Administrador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Tecnico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Administrador" ADD COLUMN     "email" VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE "Tecnico" ADD COLUMN     "email" VARCHAR(30) NOT NULL;
