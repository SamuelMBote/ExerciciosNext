import AulaEntity from './AulaEntity';

export default interface CursoEntity {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas?: Array<AulaEntity>;
}
