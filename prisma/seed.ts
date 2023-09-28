import { PrismaClient } from "@prisma/client";
import { members } from "./seed/members";

const prisma = new PrismaClient();

async function main() {
  for (const member of members) {
    const memberId = await prisma.member.findUnique({
      where: { email: member.email },
    });

    if (!memberId) {
      await prisma.member.create({
        data: member,
      });
    } else {
      await prisma.member.update({
        where: { email: member.email },
        data: member,
      });
    }
  }
}

main().catch((e) => {
  console.log(e);
  // process.exit(1);
}).finally(async () => {
  prisma.$disconnect();
});
