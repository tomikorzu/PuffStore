/*
  Warnings:

  - A unique constraint covering the columns `[userId,productId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rating` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReviewType" AS ENUM ('GLOBAL', 'PRODUCT');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('VAPERS', 'ACCESSORIES', 'BATTERIES', 'LIQUIDS');

-- CreateEnum
CREATE TYPE "VaperType" AS ENUM ('MOD', 'POD');

-- DropIndex
DROP INDEX "public"."Review_userId_key";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "productId" INTEGER,
ADD COLUMN     "rating" INTEGER NOT NULL,
ADD COLUMN     "type" "ReviewType" NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dni" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "province" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "zipCode" TEXT,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "CategoryType" NOT NULL DEFAULT 'VAPERS',
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "stock" INTEGER NOT NULL,
    "percentageDiscount" INTEGER,
    "rating" DOUBLE PRECISION,
    "sales" INTEGER NOT NULL,
    "type" "VaperType",
    "puff" INTEGER,
    "ml" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_userId_productId_key" ON "Review"("userId", "productId");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
