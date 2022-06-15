-- CreateTable
CREATE TABLE "Fixture" (
    "id" UUID NOT NULL,
    "apiId" TEXT NOT NULL,
    "league" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "home" TEXT NOT NULL,
    "away" TEXT NOT NULL,
    "hthg" INTEGER NOT NULL,
    "htag" INTEGER NOT NULL,
    "fthg" INTEGER NOT NULL,
    "ftag" INTEGER NOT NULL,
    "htr" TEXT NOT NULL,
    "ftr" TEXT NOT NULL,

    CONSTRAINT "Fixture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fixture_apiId_key" ON "Fixture"("apiId");
