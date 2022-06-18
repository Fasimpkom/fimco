-- CreateTable
CREATE TABLE "WalletAccount" (
    "id" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "bankId" INTEGER,

    CONSTRAINT "WalletAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institution" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryCode" TEXT,
    "countryName" TEXT,
    "bankCode" TEXT,
    "primaryColor" TEXT,
    "logo" TEXT,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "channels" TEXT,
    "isOcrActive" BOOLEAN DEFAULT false,
    "automaticVerification" BOOLEAN DEFAULT false,
    "pdfVerification" BOOLEAN DEFAULT false,
    "passbookVerification" BOOLEAN DEFAULT false,
    "institutionType" TEXT,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WalletAccount" ADD CONSTRAINT "WalletAccount_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;
