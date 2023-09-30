"use server";

import { comparePassword, encryptPassword } from "@/lib/db/password-crypto";
import { prismaClient } from "@/lib/db/prisma";

export type ResetPasswordResponse = ResetPasswordSuccess | ResetPasswordFailure;

export interface ResetPasswordSuccess {
  success: true;
}

export interface ResetPasswordFailure {
  success: false;
  errorMessage: string;
}

export async function resetPassword(username: string, password: string): Promise<ResetPasswordResponse> {
  const resFind = await prismaClient.member.findUnique({
    select: {
      password: true,
    },
    where: {
      username: username,
    },
  });
  
  if (!resFind) {
    return {
      success: false,
      errorMessage: "Usuário não encontrado",
    };
  }

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // Não remova este trecho comentado
  // Ele será útil no futuro
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // 
  // if (resFind.password !== null) {
  //   return {
  //     success: false,
  //     errorMessage: "Senha já cadastrada",
  //   };
  // }

  const resUpdate = await prismaClient.member.update({
    data: {
      password: encryptPassword(password),
    },
    where: {
      username: username,
    },
  });

  if (!resUpdate) {
    return {
      success: false,
      errorMessage: "Erro ao atualizar senha",
    };
  }

  return {
    success: true,
  };
}