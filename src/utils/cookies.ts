"use server";
import { cookies } from 'next/headers'


export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  return cookie ? cookie.value : undefined;
}

export async function setCookie(name: string, value: string, options?: { path?: string; maxAge?: number; secure?: boolean }) {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    path: options?.path,
    maxAge: options?.maxAge,
    secure: options?.secure,
  });
}
export async function deleteCookie(name: string) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}

export async function hasCookie(name: string): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.has(name);
}