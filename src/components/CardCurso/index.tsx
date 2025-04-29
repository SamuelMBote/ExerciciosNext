import CursoEntity from '@/interfaces/CursoEntity';
import React from 'react';

const CardCurso = ({
  id,
  slug,
  nome,
  descricao,
  total_aulas,
  total_horas,
}: CursoEntity) => {
  return (
    <div>
      <p>
        <span>{id}</span> - {nome}
      </p>
    </div>
  );
};

export default CardCurso;
