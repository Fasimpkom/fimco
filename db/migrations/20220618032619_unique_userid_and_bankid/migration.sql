/*
  Warnings:

  - A unique constraint covering the columns `[bankId,userId]` on the table `WalletAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WalletAccount_bankId_userId_key" ON "WalletAccount"("bankId", "userId");
