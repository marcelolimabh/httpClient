import { Livro } from './livro';

export interface Autor {
  id: number;
  nome: string;
  livros: Livro[];
}
