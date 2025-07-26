/*
  Warnings:

  - You are about to drop the column `location` on the `EmergencyRequest` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `SecurityAgent` table. All the data in the column will be lost.
  - Added the required column `lat` to the `EmergencyRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `EmergencyRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lat` to the `SecurityAgent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `SecurityAgent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmergencyRequest" DROP COLUMN "location",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "SecurityAgent" DROP COLUMN "location",
ADD COLUMN     "lat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "lng" DOUBLE PRECISION NOT NULL;
