/*
  Warnings:

  - You are about to drop the column `dosenpj` on the `matakuliah` table. All the data in the column will be lost.
  - Added the required column `dosenpjId` to the `Matakuliah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dosen` MODIFY `nip` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `matakuliah` DROP COLUMN `dosenpj`,
    ADD COLUMN `dosenpjId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Matakuliah` ADD CONSTRAINT `Matakuliah_dosenpjId_fkey` FOREIGN KEY (`dosenpjId`) REFERENCES `Dosen`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
