import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";

type Member = Prisma.MemberCreateInput & { id: number };

export interface UseMemberResult {
  member?: Member;
}

export function useServerMember(): UseMemberResult {
  const memberCookie = cookies().get('member');
  if (!memberCookie) return {};
  const member: Member = JSON.parse(memberCookie.value);
  return { member };
}
