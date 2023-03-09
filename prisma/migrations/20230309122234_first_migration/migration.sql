-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "CoverImageUrl" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "ImdbScore" DOUBLE PRECISION NOT NULL,
    "TrailerYouTubeUrl" TEXT NOT NULL,
    "GameplayYouTubeUrl" TEXT NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "game_Title_key" ON "game"("Title");
