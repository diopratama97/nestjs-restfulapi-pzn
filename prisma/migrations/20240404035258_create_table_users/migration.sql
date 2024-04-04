-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
