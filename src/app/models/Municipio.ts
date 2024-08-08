export interface Municipio {
  id: number;
  codigo:string;
  sigla:string;
  municipio:string;
  descricao:string;
}


export interface MunicipioDTO {
  descricao: string;
  nome: string;
}


export interface MunicipioData {
  dataList: Municipio[];
}
