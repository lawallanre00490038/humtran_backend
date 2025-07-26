/*
  Warnings:

  - Added the required column `lastUpdated` to the `SecurityAgent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SecurityAgent" ADD COLUMN     "lastUpdated" TIMESTAMP(3) NOT NULL;
