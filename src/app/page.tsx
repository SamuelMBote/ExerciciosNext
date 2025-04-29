'use client';
import { setCookie } from '@/actions/setCookie';
import Acesso from '@/components/Acesso';
import Button from '@/components/Button';
import ServerFetch from '@/components/ServerFetch';
import Width from '@/components/Width';
import React from 'react';

export default function Home() {
  const [valor, setValor] = React.useState<string>('');
  async function handleClick() {
    const res = await setCookie('segredo', '123456');
    console.log(res);
    setValor(res.value);
  }
  return (
    <section className="container mx-auto">
      <h1>Home {valor}</h1>
      <Button onClick={handleClick}>Definir Cookie</Button>
      {/* <ServerFetch />
      <Width />
      <Acesso /> */}
    </section>
  );
}
