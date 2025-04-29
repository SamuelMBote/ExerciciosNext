'use client';
import React from 'react';
import Input from '../Input';
import Button from '../Button';
import ProdutoEntity from '@/interfaces/ProdutoEntity';
import { adicionarProduto } from '@/actions/adicionarProduto';

const AdicionarProduto = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: ProdutoEntity = {
      nome: event.currentTarget.nome.value,
      descricao: event.currentTarget.descricao.value,
      preco: Number(event.currentTarget.preco.value),
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.checked ? 1 : 0,
    };
    console.log(data);
    await adicionarProduto(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="nome" label="Nome" id="nome" />
        <Input name="preco" label="Preço" id="preco" type="number" />
        <Input name="descricao" label="Descrição" id="descricao" />
        <Input name="estoque" label="Estoque" id="estoque" />
        <div className="m-4 py-2">
          <label htmlFor="importado" className="flex gap-2">
            {' '}
            <input type="checkbox" id="importado" name="importado" />
            Importado
          </label>
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    </div>
  );
};

export default AdicionarProduto;
