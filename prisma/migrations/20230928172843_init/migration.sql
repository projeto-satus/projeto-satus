-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "excerpt" TEXT,
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "websiteUrl" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewQuestion" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "InterviewQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewQuestionAnswer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "questionId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "InterviewQuestionAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewQuestionTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "InterviewQuestionTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_InterviewQuestionToInterviewQuestionTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_username_key" ON "Member"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_InterviewQuestionToInterviewQuestionTag_AB_unique" ON "_InterviewQuestionToInterviewQuestionTag"("A", "B");

-- CreateIndex
CREATE INDEX "_InterviewQuestionToInterviewQuestionTag_B_index" ON "_InterviewQuestionToInterviewQuestionTag"("B");

-- AddForeignKey
ALTER TABLE "InterviewQuestionAnswer" ADD CONSTRAINT "InterviewQuestionAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "InterviewQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewQuestionAnswer" ADD CONSTRAINT "InterviewQuestionAnswer_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InterviewQuestionToInterviewQuestionTag" ADD CONSTRAINT "_InterviewQuestionToInterviewQuestionTag_A_fkey" FOREIGN KEY ("A") REFERENCES "InterviewQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InterviewQuestionToInterviewQuestionTag" ADD CONSTRAINT "_InterviewQuestionToInterviewQuestionTag_B_fkey" FOREIGN KEY ("B") REFERENCES "InterviewQuestionTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
