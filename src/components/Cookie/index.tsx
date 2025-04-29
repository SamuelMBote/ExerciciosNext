'use client';
import React from 'react';
import Button from '../Button';
import { getCookie } from '@/actions/getCookie';

const Cookie = () => {
  const [token, setToken] = React.useState<string>();
  async function handleClick() {
    const res = await getCookie('token');
    console.log(res);
    if (res) setToken(res);
  }
  return (
    <div>
      <h2>Cookie: {token} </h2>
      <Button onClick={handleClick}>Cookie</Button>
    </div>
  );
};

export default Cookie;
