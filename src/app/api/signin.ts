"use server";

import { comparePassword } from "@/lib/db/password-crypto";
import { prismaClient } from "@/lib/db/prisma";
import { Prisma } from "@prisma/client";

export type AuthenticationResponse = AuthenticationResponseSuccess | AuthenticationResponseFailure;

export interface AuthenticationResponseSuccess {
  success: true;
  member: Prisma.MemberCreateInput & { id: number };
}

export interface AuthenticationResponseFailure {
  success: false;
  errorMessage: string;
}

export async function signin(username: string, password: string): Promise<AuthenticationResponse> {
  const response = await prismaClient.member.findUnique({
    where: {
      username: username,
    },
  });
  
  if (!response) {
    return {
      success: false,
      errorMessage: "Usuário não encontrado",
    };
  }

  const passwordHash = response.password || '';

  if (!comparePassword(password, passwordHash)) {
    return {
      success: false,
      errorMessage: "Senha incorreta",
    };
  }

  return {
    success: true,
    member: response,
  };
}