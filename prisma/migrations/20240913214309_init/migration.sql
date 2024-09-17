-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "app_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "app_envs" TEXT NOT NULL,
    "acct_string" TEXT NOT NULL,
    "contact_dl" TEXT NOT NULL,
    "az_group" TEXT NOT NULL,
    "gitlab_url" TEXT NOT NULL,
    "glgroup_ow" TEXT NOT NULL,
    "glgroup_mt" TEXT NOT NULL,
    "glgroup_dv" TEXT NOT NULL,
    "proj_status" TEXT NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);
