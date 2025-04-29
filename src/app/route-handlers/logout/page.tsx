'use client';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const PageLogout = () => {
  const logout = async () => {
    const res = await fetch('/api/logout', { method: 'DELETE' });
    console.log(res.json());
  };
  useEffect(() => {
    logout();
  }, []);
  return <div></div>;
};

export default PageLogout;
