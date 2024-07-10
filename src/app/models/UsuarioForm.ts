export interface UsuarioForm {
  id: number;
  nome: string;
  matricula: string;
  funcao: string;
  unidade: string;
  perfil: string;
  telefone: string;
  email: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  logradouro: string;
  complemento: string;
  dtCriacao: Date | null;
  dtAtualizacao: Date | null;
  ativo: boolean;
}
