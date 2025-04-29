import routes from '@/utils/routes';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
type Conta = { autorizado: boolean; usuario: string };
async function fetchUser(): Promise<Conta> {
  let conta: Conta = { autorizado: false, usuario: '' };
  const token = cookies().get('token')?.value;
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: { Authorization: 'Bearer ' + token },
  });
  if (response.ok) {
    return (conta = await response.json());
  }
  return conta;
}
const Header = async () => {
  const data = await fetchUser();
  return (
    <header className="bg-black h-14">
      <nav className="container mx-auto">
        <div className="flex justify-between">
          <ul className="flex gap-4 items-end justify-start py-4">
            {routes.map(({ title, href }) => (
              <li key={href}>
                <Link className="text-white" href={href}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4 items-end justify-end py-4">
            <li className="text-white">
              {data.autorizado ? (
                data.usuario
              ) : (
                <Link href={'/route-handlers'}></Link>
              )}
            </li>
            <li className="text-white">
              <Link href={'/route-handlers/logout'}>X</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
