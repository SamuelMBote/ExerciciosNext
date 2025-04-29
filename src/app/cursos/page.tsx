import { fetchTodosCursos } from '@/api-data/cursos';
import CardCurso from '@/components/CardCurso';

import Link from 'next/link';
import React from 'react';

const PageCursos = async () => {
  const data = await fetchTodosCursos();

  return (
    <section className="container mx-auto">
      <h1>Lista de Cursos</h1>
      <ul>
        {data?.map((c) => (
          <li key={c.id}>
            <Link href={`/cursos/${c.slug}`}>
              <CardCurso {...c} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PageCursos;
