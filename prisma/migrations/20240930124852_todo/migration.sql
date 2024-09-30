-- AlterTable
ALTER TABLE "User" ADD COLUMN     "pasword" TEXT NOT NULL DEFAULT 'password';

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "todo" VARCHAR(100) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
