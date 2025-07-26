-- CreateEnum
CREATE TYPE "SecurityStatus" AS ENUM ('OFF_LINE', 'ON_LINE');

-- AlterTable
ALTER TABLE "SecurityAgent" ADD COLUMN     "status" "SecurityStatus" NOT NULL DEFAULT 'OFF_LINE';
