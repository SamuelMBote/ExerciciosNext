'use server';

import { cookies } from 'next/headers';

export async function actionLogin(username: string, password: string) {
  try {
    const res = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    cookies().set('token', data.token, { httpOnly: true, secure: true });
    return true;
  } catch (error) {
    return false;
  }
}
