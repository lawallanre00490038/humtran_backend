-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerified" DOUBLE PRECISION,
ADD COLUMN     "otpCode" TEXT,
ADD COLUMN     "otpExpiresAt" TIMESTAMP(3);
