export interface NotificacaoForm {
  id: number;
  mensagem:string;
  funcionalidade:string;
  dataHora:string;
  dataPlanilha:string;
  municipio:string;
  ultimoAjuste:string;
  operadorResponsavel:string;
  prazoAjuste:number;
  motivo:string;
  dataLiberacao:string;
  dataFinal:string;
  status: boolean;
}
