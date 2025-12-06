export interface PerguntaInterface {
  id: number;
  medicamento: string;
  grupo: string;
  pergunta: string;
  alternativas: AlternativaDetalhada[];
  resposta: string;
}

export interface AlternativaDetalhada {
  alternativa: string;
  message: string; // A justificativa do porquê está certo ou errado
}
