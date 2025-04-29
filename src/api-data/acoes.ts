import AcoesEntity from '@/interfaces/AcoesEntity';

const ACOES_URL = 'https://api.origamid.online/acoes';
export const getTodasAcoes = async (init?: RequestInit) => {
  try {
    const response = await fetch(ACOES_URL, init);
    return (await response.json()) as Array<AcoesEntity>;
  } catch (error) {
    if (error instanceof Error) return null;
  }
  return null;
};
