export interface FuncionalidadeNotificacao {
  id: number;
  dsNameFuncionality: string;
  dsFuncionality: string;
  notificationActive: boolean;
}

export interface NotificacaoConfig {
  id: number;
  notificationActive: boolean;
}

export interface PostData {
  notificacaoConfigList: NotificacaoConfig[];
}
