/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userAuthToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `status` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAuthToken` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PLAN_TO_WATCH', 'WATCHING', 'COMPLETED', 'DROPPED');

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_mediaId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "status" "Status" NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "userAuthToken" TEXT NOT NULL,
ADD COLUMN     "username" TEXT;

-- DropTable
DROP TABLE "Media";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_userAuthToken_key" ON "User"("userAuthToken");
