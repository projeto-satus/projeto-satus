"use server";

import { comparePassword } from "@/lib/db/password-crypto";
import { prismaClient } from "@/lib/db/prisma";
import { Prisma } from "@prisma/client";
import { cookies } from 'next/headers';

export type AuthenticationResponse = AuthenticationResponseSuccess | AuthenticationResponseFailure;

export interface AuthenticationResponseSuccess {
  success: true;
  member: Omit<Prisma.MemberCreateInput, 'password'> & { id: number };
}

export interface AuthenticationResponseFailure {
  success: false;
  errorMessage: string;
}

export async function signin(username: string, password: string): Promise<AuthenticationResponse> {
  const member = await prismaClient.member.findUnique({
    select: {
      id: true,
      email: true,
      name: true,
      username: true,
      role: true,
      password: true,
    },
    where: {
      username: username,
    },
  });
  
  if (!member) {
    return {
      success: false,
      errorMessage: "Usuário não encontrado",
    };
  }

  if (!comparePassword(password, member.password || '')) {
    return {
      success: false,
      errorMessage: "Senha incorreta",
    };
  }

  const { password: _, ...memberWithoutPassword } = member;

  cookies().set('member', JSON.stringify(memberWithoutPassword));

  return {
    success: true,
    member: memberWithoutPassword,
  };
}