import { fetchAula } from '@/api-data/cursos';
import React from 'react';

const PageAula = async ({
  params,
}: {
  params: { curso: string; aula: string };
}) => {
  const data = await fetchAula({ aula: params.aula, curso: params.curso });
  console.log(data);
  return (
    <section>
      <div>
        <h1>{data?.nome}</h1>
        <p>{data?.descricao}</p>
      </div>
    </section>
  );
};

export default PageAula;
