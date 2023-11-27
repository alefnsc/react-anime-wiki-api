-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "characteristics" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "animeId" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anime" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "release" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "publication" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);
