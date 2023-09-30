'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function GET(req: Request) {
  cookies().delete('member');
  redirect('/dashboard');
}
