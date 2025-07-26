-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'SECURITY', 'ADMIN');

-- CreateEnum
CREATE TYPE "EmergencyStatus" AS ENUM ('PENDING', 'ASSIGNED', 'ARRIVED', 'COMPLETED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyRequest" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "EmergencyStatus" NOT NULL DEFAULT 'PENDING',
    "location" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "securityId" TEXT,

    CONSTRAINT "EmergencyRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecurityAgent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" JSONB NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "SecurityAgent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "SecurityAgent_userId_key" ON "SecurityAgent"("userId");

-- AddForeignKey
ALTER TABLE "EmergencyRequest" ADD CONSTRAINT "EmergencyRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyRequest" ADD CONSTRAINT "EmergencyRequest_securityId_fkey" FOREIGN KEY ("securityId") REFERENCES "SecurityAgent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecurityAgent" ADD CONSTRAINT "SecurityAgent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
