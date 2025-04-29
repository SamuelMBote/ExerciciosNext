import ProdutoEntity from '@/interfaces/ProdutoEntity';
import Image from 'next/image';
import React from 'react';

const CardProduto = ({
  id,
  descricao,
  estoque,
  importado,
  nome,
  preco,
}: ProdutoEntity) => {
  return (
    <div>
      <p>
        <span>{id}</span> - {nome}
      </p>
    </div>
  );
};

export default CardProduto;
