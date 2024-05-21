/*
  Warnings:

  - You are about to drop the column `jam` on the `jadwal` table. All the data in the column will be lost.
  - Added the required column `jam_keluar` to the `Jadwal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jam_mulai` to the `Jadwal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jadwal` DROP COLUMN `jam`,
    ADD COLUMN `jam_keluar` VARCHAR(191) NOT NULL,
    ADD COLUMN `jam_mulai` VARCHAR(191) NOT NULL;
