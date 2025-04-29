'use client';
import ProdutoEntity from '@/interfaces/ProdutoEntity';
import Link from 'next/link';
import React, { useEffect } from 'react';
import CardProduto from '../CardProduto';
type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};
const ClientFetch = () => {
  const [data, setData] = React.useState<Array<ProdutoEntity>>([]);
  const fetchData = async () => {
    const response = await fetch('https://api.origamid.online/produtos');
    const data = (await response.json()) as Array<ProdutoEntity>;
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Lista de Produtos - Client</h1>
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

export default ClientFetch;
