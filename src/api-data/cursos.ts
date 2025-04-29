import AulaEntity from '@/interfaces/AulaEntity';
import CursoEntity from '@/interfaces/CursoEntity';

const CURSOS_URL = 'https://api.origamid.online/cursos';
export const fetchTodosCursos = async (init?: RequestInit) => {
  try {
    const response = await fetch(CURSOS_URL, init);
    return (await response.json()) as Array<CursoEntity>;
  } catch (error) {
    if (error instanceof Error) return null;
  }
  return null;
};
export const fetchCurso = async (curso: string, init?: RequestInit) => {
  try {
    const response = await fetch(CURSOS_URL + '/' + curso, init);
    return (await response.json()) as CursoEntity;
  } catch (error) {
    if (error instanceof Error) return null;
  }
  return null;
};
export const fetchAula = async (
  {
    curso,
    aula,
  }: {
    curso: string;
    aula: string;
  },
  init?: RequestInit,
) => {
  try {
    const response = await fetch(CURSOS_URL + '/' + curso + '/' + aula, init);
    return (await response.json()) as AulaEntity;
  } catch (error) {
    if (error instanceof Error) return null;
  }
  return null;
};
