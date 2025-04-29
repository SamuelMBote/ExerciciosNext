import CardProduto from '@/components/CardProduto';
import ProdutoEntity from '@/interfaces/ProdutoEntity';
import React from 'react';

const PageProduto = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(
    `https://api.origamid.online/produtos/${params.id}`,
  );
  const { id, descricao, estoque, importado, nome, preco } =
    (await response.json()) as ProdutoEntity;
  return (
    <section className="container mx-auto">
      <div>
        <h1>{nome}</h1>
        <p>R$ {preco}</p>
        <p>{descricao}</p>
      </div>
    </section>
  );
};

export default PageProduto;
