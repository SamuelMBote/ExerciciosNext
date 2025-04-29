import AdicionarProduto from '@/components/AdicionarProduto';
import Input from '@/components/Input';
import ProdutoEntity from '@/interfaces/ProdutoEntity';
import React from 'react';

const PageAddProdutos = async () => {
  const response = await fetch('https://api.origamid.online/produtos');
  const produtos = (await response.json()) as Array<ProdutoEntity>;
  return (
    <div>
      <AdicionarProduto />
    </div>
  );
};

export default PageAddProdutos;
