/*
  Warnings:

  - The primary key for the `Fixture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Fixture` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Fixture" DROP CONSTRAINT "Fixture_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Fixture_pkey" PRIMARY KEY ("id");
