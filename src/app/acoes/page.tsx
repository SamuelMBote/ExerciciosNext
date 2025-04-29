'use client';
import { getTodasAcoes } from '@/api-data/acoes';
import AcoesEntity from '@/interfaces/AcoesEntity';
import React from 'react';

const PageAcoes = () => {
  const [acoes, setAcoes] = React.useState<Array<AcoesEntity> | null>(null);
  async function fetchAcoes() {
    try {
      const response = await getTodasAcoes({
        cache: 'no-store',
        next: { revalidate: 5 },
      });
      setAcoes(response);
    } catch (error) {}
  }
  React.useEffect(() => {
    fetchAcoes();
  }, []);
  if (!acoes)
    return (
      <section className="container mx-auto">
        <div>
          <p>Ainda não tem acoes na sua carteira</p>
        </div>
      </section>
    );
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {acoes?.map((a) => {
          return (
            <div key={a.id} className="border border-black border-2 p-4 ">
              {Object.entries(a).map(([key, value]) => (
                <p key={key}>
                  <span className="text-xs">{key}: </span>
                  {value}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PageAcoes;
