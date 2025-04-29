import ProdutoEntity from '@/interfaces/ProdutoEntity';
import Link from 'next/link';
import React from 'react';
import CardProduto from '../CardProduto';

const ServerFetch = async () => {
  const response = await fetch('https://api.origamid.online/produtos');
  const data = (await response.json()) as Array<ProdutoEntity>;

  return (
    <div>
      <h1>Lista de Produtos - Server</h1>
      <ul>
        {data.map((p) => (
          <li key={p.id}>
            <Link href={`/produtos/${p.id}`} passHref>
              <CardProduto {...p} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerFetch;
