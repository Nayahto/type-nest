-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_CPF_key" ON "user"("CPF");
