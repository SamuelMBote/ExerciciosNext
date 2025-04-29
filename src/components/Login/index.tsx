'use client';
import React, { FormEventHandler } from 'react';
import Input from '../Input';
import Button from '../Button';
import { useRouter } from 'next/navigation';
import { actionLogin } from '@/actions/login';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // const res = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password }),
    // });
    // const json = await res.json();
    // if (res.ok) {
    //   router.push('/');
    // }
    const res = await actionLogin(username, password);
    if (res) return router.push('/entrar');
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Nome"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <Input
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default Login;
