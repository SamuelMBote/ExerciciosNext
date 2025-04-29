import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function POST(payload: NextRequest) {
  const body = await payload.json();
  const res = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: body.username, password: body.password }),
  });
  if (!res.ok) {
    return Response.json(
      { autorizado: false, erro: 'Dados Incorretos' },
      { status: 401 },
    );
  }
  const data = await res.json();
  cookies().set('token', data.token, { httpOnly: true, secure: true });
  return Response.json({ autorizado: true });
}

