import { cookies } from 'next/headers';

export async function DELETE() {
  cookies().delete('token');
  if (!cookies().has('token')) {
    return Response.json({ logout: true });
  }
  return Response.json({ logout: false });
}
