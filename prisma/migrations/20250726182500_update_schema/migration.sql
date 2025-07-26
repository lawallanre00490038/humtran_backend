-- CreateEnum
CREATE TYPE "CallType" AS ENUM ('AUDIO', 'VIDEO');

-- CreateTable
CREATE TABLE "CallLog" (
    "id" TEXT NOT NULL,
    "callerId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "callType" "CallType" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "CallLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CallLog" ADD CONSTRAINT "CallLog_callerId_fkey" FOREIGN KEY ("callerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallLog" ADD CONSTRAINT "CallLog_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
