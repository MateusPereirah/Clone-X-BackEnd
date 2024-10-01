/*
  Warnings:

  - You are about to drop the column `imgae` on the `Tweet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "imgae",
ADD COLUMN     "image" TEXT;
