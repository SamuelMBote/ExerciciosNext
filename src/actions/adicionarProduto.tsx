'use server';

import ProdutoEntity from '@/interfaces/ProdutoEntity';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function adicionarProduto(produto: ProdutoEntity) {
  const response = await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(produto),
  });
  await response.json();
  revalidatePath('/lista-produtos');
  redirect('/lista-produtos');
}
