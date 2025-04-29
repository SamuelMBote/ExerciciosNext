import dynamic from 'next/dynamic';
import React from 'react';
const Width = dynamic(() => import('@/components/Width'), { ssr: false });
const PageSobre = () => {
  return (
    <section className="container mx-auto">
      <h1>Sobre</h1>
      <Width />
    </section>
  );
};

export default PageSobre;
