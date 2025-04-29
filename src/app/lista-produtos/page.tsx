import ClientFetch from '@/components/ClientFetch';
import ServerFetch from '@/components/ServerFetch';
import React from 'react';

const PageListaProdutos = () => {
  return (
    <section className="flex justify-around container mx-auto">
      <ServerFetch />

      <ClientFetch />
    </section>
  );
};

export default PageListaProdutos;
