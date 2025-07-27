-- DropForeignKey
ALTER TABLE "SecurityAgent" DROP CONSTRAINT "SecurityAgent_userId_fkey";

-- AddForeignKey
ALTER TABLE "SecurityAgent" ADD CONSTRAINT "SecurityAgent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
