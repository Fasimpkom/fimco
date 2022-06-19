/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `WalletAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifier` to the `WalletAccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "WalletAccount_bankId_userId_key";

-- AlterTable
ALTER TABLE "WalletAccount" ADD COLUMN     "identifier" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WalletAccount_identifier_key" ON "WalletAccount"("identifier");
