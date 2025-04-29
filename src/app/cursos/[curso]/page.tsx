import { fetchCurso } from '@/api-data/cursos';
import CursoEntity from '@/interfaces/CursoEntity';
import Link from 'next/link';
import React from 'react';

const PageCurso = async ({
  params: { curso },
}: {
  params: { curso: string };
}) => {
  const data = await fetchCurso(curso);
  const { id, slug, nome, descricao, total_aulas, total_horas, aulas } = data!;
  return (
    <section className="container mx-auto">
      <div>
        <h1>{nome}</h1>
        <p>{descricao}</p>
        <div>
          <p>Qtd aulas: {total_aulas}</p> <p>Horas: {total_horas}</p>
        </div>
        <div>
          <p>Aulas</p>
          <ul>
            {aulas?.map((a) => (
              <li key={a.id}>
                <Link href={`${curso}/${a.slug}`} passHref>
                  <div>
                    <p>
                      <span>{a.ordem}</span> - {a.nome}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageCurso;
