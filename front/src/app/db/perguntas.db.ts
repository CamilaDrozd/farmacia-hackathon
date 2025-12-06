import { PerguntaInterface } from '../shared/interfaces/perguntas.interface';

export const perguntas: PerguntaInterface[] = [
  {
    id: 1,
    medicamento: 'Morfina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual é o tipo de receita exigida para Morfina?',
    alternativas: [
      {
        alternativa: 'Notificação de Receita A (amarela)',
        message:
          'Correto. A Morfina é um entorpecente da Lista A1, exigindo Notificação A (amarela).',
      },
      {
        alternativa: 'Receita B1',
        message:
          'Incorreto. A Receita B1 (azul) é para psicotrópicos, não entorpecentes.',
      },
      {
        alternativa: 'Receita C1',
        message:
          'Incorreto. A Receita C1 (branca) é para controle especial de outras substâncias.',
      },
      {
        alternativa: 'Receita simples',
        message:
          'Incorreto. Medicamentos controlados exigem retenção de receita ou notificação.',
      },
    ],
    resposta: 'Notificação de Receita A (amarela)',
  },
  {
    id: 2,
    medicamento: 'Morfina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Morfina pertence a qual grupo farmacológico?',
    alternativas: [
      {
        alternativa: 'Opioide forte',
        message:
          'Correto. É um agonista opioide potente usado para dor severa.',
      },
      {
        alternativa: 'Ansiolítico',
        message:
          'Incorreto. Ansiolíticos tratam ansiedade (ex: benzodiazepínicos).',
      },
      {
        alternativa: 'Antidepressivo',
        message:
          'Incorreto. Antidepressivos atuam na regulação do humor (ex: ISRS).',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto. Antipsicóticos tratam esquizofrenia e mania.',
      },
    ],
    resposta: 'Opioide forte',
  },
  {
    id: 3,
    medicamento: 'Morfina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Morfina é indicada para qual condição?',
    alternativas: [
      {
        alternativa: 'Dor intensa',
        message:
          'Correto. Indicada para dores agudas ou crônicas de forte intensidade.',
      },
      {
        alternativa: 'Insônia',
        message:
          'Incorreto. Embora cause sonolência, não é indicada para insônia.',
      },
      {
        alternativa: 'Ansiedade',
        message:
          'Incorreto. O uso para ansiedade não é indicado devido ao risco de dependência.',
      },
      {
        alternativa: 'Depressão',
        message:
          'Incorreto. Opioides não são tratamentos de primeira linha para depressão.',
      },
    ],
    resposta: 'Dor intensa',
  },
  {
    id: 4,
    medicamento: 'Tramadol',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita exigida para Tramadol?',
    alternativas: [
      {
        alternativa: 'Receita de Controle Especial em 2 vias',
        message:
          'Correto. Apesar de ser Lista A2, é permitido a venda com Receita de Controle Especial (branca).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto. B1 é para psicotrópicos.',
      },
      {
        alternativa: 'Notificação A',
        message:
          'Incorreto. Tramadol não exige a notificação amarela, apenas a receita de controle especial.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto. Exige retenção de receita (controle especial).',
      },
    ],
    resposta: 'Receita de Controle Especial em 2 vias',
  },
  {
    id: 5,
    medicamento: 'Tramadol',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Tramadol pertence a qual grupo farmacológico?',
    alternativas: [
      {
        alternativa: 'Opioide fraco',
        message:
          'Correto. É considerado um opioide fraco/moderado com ação também na recaptação de serotonina.',
      },
      {
        alternativa: 'Antipsicótico',
        message:
          'Incorreto. Não atua nos receptores dopaminérgicos dessa forma.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto. Não é indicado para ansiedade.',
      },
      {
        alternativa: 'Antidepressivo',
        message:
          'Incorreto. Embora iniba recaptação de monoaminas, sua classe primária é analgésica.',
      },
    ],
    resposta: 'Opioide fraco',
  },
  {
    id: 6,
    medicamento: 'Tramadol',
    grupo: 'Indicação Terapêutica',
    pergunta: 'O Tramadol é indicado principalmente para:',
    alternativas: [
      {
        alternativa: 'Dor moderada a intensa',
        message:
          'Correto. Preenche a lacuna entre analgésicos comuns e opioides fortes.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Causa sedação como efeito adverso, não indicação.',
      },
      {
        alternativa: 'Ansiedade',
        message: 'Incorreto. Não tem indicação ansiolítica.',
      },
      {
        alternativa: 'Convulsões',
        message:
          'Incorreto. Pelo contrário, o Tramadol pode diminuir o limiar convulsivo (risco).',
      },
    ],
    resposta: 'Dor moderada a intensa',
  },
  {
    id: 7,
    medicamento: 'Metadona',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usada para Metadona?',
    alternativas: [
      {
        alternativa: 'Notificação de Receita A (amarela)',
        message:
          'Correto. Metadona é Lista A1 (entorpecente), exigindo notificação amarela.',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto. B1 é para psicotrópicos (azul).',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto. É um medicamento de controle rigoroso.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto. C1 é para controle especial (branca).',
      },
    ],
    resposta: 'Notificação de Receita A (amarela)',
  },
  {
    id: 8,
    medicamento: 'Metadona',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Metadona pertence a qual grupo farmacológico?',
    alternativas: [
      {
        alternativa: 'Opioide forte',
        message: 'Correto. Agonista opioide sintético de longa duração.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto. Não possui propriedades antipsicóticas.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto. Não é benzodiazepínico nem ansiolítico.',
      },
      {
        alternativa: 'Anticonvulsivante',
        message: 'Incorreto. Não previne convulsões.',
      },
    ],
    resposta: 'Opioide forte',
  },
  {
    id: 9,
    medicamento: 'Metadona',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Metadona é indicada principalmente para:',
    alternativas: [
      {
        alternativa: 'Dependência de opioides e dor crônica',
        message: 'Correto. Usada na desintoxicação de adictos e analgesia.',
      },
      {
        alternativa: 'Obesidade',
        message: 'Incorreto. Não tem efeito anorexígeno.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Não é hipnótico.',
      },
      {
        alternativa: 'Hipertensão',
        message: 'Incorreto. Não é anti-hipertensivo.',
      },
    ],
    resposta: 'Dependência de opioides e dor crônica',
  },
  {
    id: 10,
    medicamento: 'Diazepam',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual é o tipo de receita exigida para Diazepam?',
    alternativas: [
      {
        alternativa: 'Receita B1 (azul)',
        message: 'Correto. Benzodiazepínicos são da Lista B1 (Psicotrópicos).',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto. Exige notificação azul.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto. C1 é branca, B1 é azul.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto. A é amarela para entorpecentes.',
      },
    ],
    resposta: 'Receita B1 (azul)',
  },
  {
    id: 11,
    medicamento: 'Diazepam',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Diazepam pertence a qual classe?',
    alternativas: [
      {
        alternativa: 'Benzodiazepínico',
        message: 'Correto. Modulador alostérico positivo do receptor GABA-A.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto. Atua no GABA, não em receptores opioides.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto. Não bloqueia dopamina.',
      },
      {
        alternativa: 'Estimulante',
        message: 'Incorreto. É um depressor do SNC.',
      },
    ],
    resposta: 'Benzodiazepínico',
  },
  {
    id: 12,
    medicamento: 'Diazepam',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Diazepam é indicado para:',
    alternativas: [
      {
        alternativa: 'Ansiedade e convulsões',
        message:
          'Correto. Possui efeitos ansiolíticos, anticonvulsivantes e relaxantes musculares.',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto. Isoladamente pode até piorar quadros depressivos.',
      },
      {
        alternativa: 'Obesidade',
        message: 'Incorreto. Não ajuda na perda de peso.',
      },
      {
        alternativa: 'Hipertensão',
        message: 'Incorreto. Não é tratamento para pressão alta.',
      },
    ],
    resposta: 'Ansiedade e convulsões',
  },
  {
    id: 13,
    medicamento: 'Zolpidem',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita exigida para Zolpidem?',
    alternativas: [
      {
        alternativa: 'Receita C1',
        message: 'Incorreto. Desde 2024, a ANVISA moveu todo Zolpidem para B1.',
      },
      {
        alternativa: 'Receita B1',
        message:
          'Correto (Pela regra atualizada). Anteriormente doses baixas eram C1.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto. Não é entorpecente.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto. Sempre exigiu controle.',
      },
    ],
    resposta: 'Receita C1', // Mantido conforme seu gabarito original (Regra antiga/doses baixas)
  },
  {
    id: 14,
    medicamento: 'Zolpidem',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Zolpidem pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Hipnótico não benzodiazepínico',
        message:
          'Correto. É uma "Droga Z", atua no receptor GABA mas estrutura diferente dos benzos.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto. Não atua em receptores opioides.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto. Induz sono, não trata psicose.',
      },
      {
        alternativa: 'Ansiolítico',
        message:
          'Incorreto. Seu efeito principal é hipnótico (sono), fraco para ansiedade diurna.',
      },
    ],
    resposta: 'Hipnótico não benzodiazepínico',
  },
  {
    id: 15,
    medicamento: 'Zolpidem',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Zolpidem é indicado para:',
    alternativas: [
      {
        alternativa: 'Insônia',
        message: 'Correto. Indicado para indução do sono.',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto. Não é antidepressivo.',
      },
      {
        alternativa: 'Dor crônica',
        message: 'Incorreto. Não tem efeito analgésico.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto. Não é anticonvulsivante clínico.',
      },
    ],
    resposta: 'Insônia',
  },
  {
    id: 16,
    medicamento: 'Sibutramina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita usada para Sibutramina?',
    alternativas: [
      {
        alternativa: 'Receita B2',
        message: 'Correto. Anorexígenos ficam na lista B2 (Azul).',
      },
      {
        alternativa: 'Receita B1',
        message:
          'Incorreto. B1 é para psicotrópicos gerais, B2 para anorexígenos.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto. Risco de abuso exige controle B2.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto. Não é entorpecente lista A.',
      },
    ],
    resposta: 'Receita B2',
  },
  {
    id: 17,
    medicamento: 'Sibutramina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Sibutramina pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Inibidor de recaptação de serotonina e noradrenalina',
        message: 'Correto. Mecanismo que aumenta saciedade.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto. Não tem relação com opioides.',
      },
      {
        alternativa: 'Ansiolítico',
        message:
          'Incorreto. Pode até aumentar ansiedade como efeito colateral.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto. Não trata psicose.',
      },
    ],
    resposta: 'Inibidor de recaptação de serotonina e noradrenalina',
  },
  {
    id: 18,
    medicamento: 'Sibutramina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Sibutramina é indicada para:',
    alternativas: [
      {
        alternativa: 'Tratamento da obesidade',
        message: 'Correto. Auxilia na perda de peso via saciedade.',
      },
      {
        alternativa: 'Depressão',
        message:
          'Incorreto. Apesar do mecanismo similar a antidepressivos, é indicada para obesidade.',
      },
      {
        alternativa: 'Ansiedade',
        message: 'Incorreto. Contraindicada, pois é estimulante.',
      },
      {
        alternativa: 'Dor neuropática',
        message: 'Incorreto. Não tem indicação analgésica.',
      },
    ],
    resposta: 'Tratamento da obesidade',
  },
  {
    id: 19,
    medicamento: 'Testosterona',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é utilizada para Testosterona?',
    alternativas: [
      {
        alternativa: 'Receita C5',
        message:
          'Correto. Esteroides anabolizantes pertencem à lista C5 (Controle Especial Branca).',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto. Não é entorpecente.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto. Exige retenção e identificação do comprador.',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto. Não é psicotrópico B1.',
      },
    ],
    resposta: 'Receita C5',
  },
  {
    id: 20,
    medicamento: 'Testosterona',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Testosterona pertence a qual grupo farmacológico?',
    alternativas: [
      {
        alternativa: 'Hormônio androgênico',
        message: 'Correto. É o principal hormônio sexual masculino.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto. Não tem ação ansiolítica primária.',
      },
      {
        alternativa: 'Antidepressivo',
        message:
          'Incorreto. Melhora humor em hipogonadismo, mas não é antidepressivo clássico.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto. Não atua nessa via.',
      },
    ],
    resposta: 'Hormônio androgênico',
  },
  {
    id: 21,
    medicamento: 'Testosterona',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Testosterona é indicada para:',
    alternativas: [
      {
        alternativa: 'Reposição hormonal masculina',
        message: 'Correto. Indicada para hipogonadismo.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Não induz sono.',
      },
      {
        alternativa: 'Transtorno bipolar',
        message: 'Incorreto. Pode desestabilizar o humor em bipolares.',
      },
      {
        alternativa: 'Obesidade',
        message: 'Incorreto. Não é tratamento primário para obesidade.',
      },
    ],
    resposta: 'Reposição hormonal masculina',
  },
  {
    id: 22,
    medicamento: 'Fluoxetina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usada para Fluoxetina?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: Tecnicamente é Receita de Controle Especial (Branca - Lista C1), mas não exige notificação colorida.',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto. Não exige notificação azul.',
      },
      {
        alternativa: 'Receita C1',
        message:
          'Incorreto (Considerando o gabarito). Mas tecnicamente Fluoxetina É lista C1.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto. Não é entorpecente.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 23,
    medicamento: 'Fluoxetina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Fluoxetina é classificada como:',
    alternativas: [
      {
        alternativa: 'Inibidor seletivo de recaptação de serotonina (ISRS)',
        message:
          'Correto. Aumenta a disponibilidade de serotonina na fenda sináptica.',
      },
      {
        alternativa: 'Benzodiazepínico',
        message: 'Incorreto. Mecanismo totalmente diferente.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto. Não bloqueia dopamina.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto. Não atua na dor via opioides.',
      },
    ],
    resposta: 'Inibidor seletivo de recaptação de serotonina (ISRS)',
  },
  {
    id: 24,
    medicamento: 'Fluoxetina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Fluoxetina é indicada principalmente para:',
    alternativas: [
      {
        alternativa: 'Depressão',
        message: 'Correto. Padrão ouro para depressão, TOC e bulimia.',
      },
      {
        alternativa: 'Dor aguda',
        message: 'Incorreto. Não é analgésico de ação rápida.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Pode causar insônia como efeito colateral.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto. Pode diminuir o limiar convulsivo.',
      },
    ],
    resposta: 'Depressão',
  },
  {
    id: 25,
    medicamento: 'Sertralina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita para Sertralina?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: Tecnicamente é Receita de Controle Especial (Branca - Lista C1).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto. Não exige notificação azul.',
      },
      {
        alternativa: 'Receita C1',
        message:
          'Incorreto (no gabarito), mas tecnicamente é a classificação legal (Lista C1).',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto. Não é entorpecente.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 26,
    medicamento: 'Sertralina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Sertralina é classificada como:',
    alternativas: [
      {
        alternativa: 'ISRS',
        message: 'Correto. Inibidor Seletivo de Recaptação de Serotonina.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiolítico',
        message:
          'Incorreto (Classificação primária é antidepressivo, embora trate ansiedade).',
      },
    ],
    resposta: 'ISRS',
  },
  {
    id: 27,
    medicamento: 'Sertralina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Sertralina é indicada principalmente para:',
    alternativas: [
      {
        alternativa: 'Depressão e ansiedade',
        message:
          'Correto. Eficaz para transtorno depressivo e vários transtornos de ansiedade.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Não é hipnótico.',
      },
      {
        alternativa: 'Dor crônica',
        message: 'Incorreto. Não é a primeira escolha para dor.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto. Não é anticonvulsivante.',
      },
    ],
    resposta: 'Depressão e ansiedade',
  },
  {
    id: 28,
    medicamento: 'Risperidona',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita para Risperidona?',
    alternativas: [
      {
        alternativa: 'Receita C1',
        message:
          'Correto. Antipsicóticos estão na Lista C1 (Controle Especial em 2 vias).',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto. Exige retenção de receita.',
      },
      {
        alternativa: 'Receita B1',
        message:
          'Incorreto. B1 é para psicotrópicos controlados (tarja preta).',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita C1',
  },
  {
    id: 29,
    medicamento: 'Risperidona',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Risperidona pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Antipsicótico',
        message: 'Correto. Antipsicótico atípico.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'ISRS',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Antipsicótico',
  },
  {
    id: 30,
    medicamento: 'Risperidona',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Risperidona é indicada para:',
    alternativas: [
      {
        alternativa: 'Esquizofrenia e transtorno bipolar',
        message: 'Correto. Trata psicoses e estabiliza o humor.',
      },
      {
        alternativa: 'Insônia',
        message:
          'Incorreto. Sedação é efeito colateral, não indicação primária.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto. Pode baixar limiar convulsivo.',
      },
      {
        alternativa: 'Hipertensão',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Esquizofrenia e transtorno bipolar',
  },
  {
    id: 31,
    medicamento: 'Venvanse',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita necessário para Venvanse?',
    alternativas: [
      {
        alternativa: 'Receita B2',
        message: 'Incorreto. B2 é para anorexígenos.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Notificação A',
        message:
          'Correto (O gabarito diz B2, mas Venvanse/Lisdexanfetamina é lista A3 - Notificação Amarela. Se o gabarito for B2, cuidado, está desatualizado ou incorreto perante a ANVISA). NOTA: O código abaixo segue seu gabarito (B2), mas a lei é Notificação A (Amarela).',
      },
    ],
    resposta: 'Receita B2', // Atenção: Venvanse é Notificação A (Amarela) na vida real.
  },
  {
    id: 32,
    medicamento: 'Venvanse',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Venvanse pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Psicoestimulante',
        message: 'Correto. Lisdexanfetamina é um estimulante do SNC.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Psicoestimulante',
  },
  {
    id: 33,
    medicamento: 'Venvanse',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Venvanse é indicado principalmente para:',
    alternativas: [
      {
        alternativa: 'TDAH',
        message:
          'Correto. Transtorno de Déficit de Atenção e Hiperatividade e Compulsão Alimentar.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Causa insônia.',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto. Não é antidepressivo primário.',
      },
      {
        alternativa: 'Crises convulsivas',
        message: 'Incorreto.',
      },
    ],
    resposta: 'TDAH',
  },
  {
    id: 34,
    medicamento: 'Oxicodona',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é exigida para Oxicodona?',
    alternativas: [
      {
        alternativa: 'Notificação A',
        message: 'Correto. Opioide forte da lista A1 (Amarela).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Notificação A',
  },
  {
    id: 35,
    medicamento: 'Oxicodona',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Oxicodona pertence a qual classe?',
    alternativas: [
      {
        alternativa: 'Opioide forte',
        message: 'Correto. Potente analgésico.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Opioide forte',
  },
  {
    id: 36,
    medicamento: 'Oxicodona',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Oxicodona é indicada para:',
    alternativas: [
      {
        alternativa: 'Dor intensa',
        message: 'Correto. Dores que não respondem a analgésicos comuns.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Transtorno de ansiedade',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Dor intensa',
  },
  {
    id: 37,
    medicamento: 'Ritalina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita exigida para Ritalina?',
    alternativas: [
      {
        alternativa: 'Receita B2',
        message:
          'Incorreto (no gabarito diz B2, mas na lei Ritalina é lista A3 - Notificação Amarela). O código segue seu gabarito.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Notificação A',
        message:
          'Incorreto (no seu gabarito), mas é a resposta legalmente correta.',
      },
    ],
    resposta: 'Receita B2', // Atenção: Metilfenidato é Notificação A (Amarela) na vida real.
  },
  {
    id: 38,
    medicamento: 'Ritalina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Ritalina pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Psicoestimulante',
        message: 'Correto. Metilfenidato estimula o SNC.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Benzodiazepínico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Psicoestimulante',
  },
  {
    id: 39,
    medicamento: 'Ritalina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Ritalina é indicada para:',
    alternativas: [
      {
        alternativa: 'TDAH',
        message: 'Correto. Transtorno de Déficit de Atenção e Hiperatividade.',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Causa insônia.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
    ],
    resposta: 'TDAH',
  },
  {
    id: 40,
    medicamento: 'Lorazepam',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita usada para Lorazepam?',
    alternativas: [
      {
        alternativa: 'Receita B1',
        message: 'Correto. Benzodiazepínico Lista B1 (Azul).',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita B1',
  },
  {
    id: 41,
    medicamento: 'Lorazepam',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Lorazepam é pertencente ao grupo:',
    alternativas: [
      {
        alternativa: 'Benzodiazepínicos',
        message: 'Correto.',
      },
      {
        alternativa: 'Opioides',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicóticos',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Estimulantes',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Benzodiazepínicos',
  },
  {
    id: 42,
    medicamento: 'Lorazepam',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Lorazepam é indicado principalmente para:',
    alternativas: [
      {
        alternativa: 'Ansiedade',
        message: 'Correto. E também sedação pré-anestésica.',
      },
      {
        alternativa: 'Dor intensa',
        message: 'Incorreto.',
      },
      {
        alternativa: 'TDAH',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Ansiedade',
  },
  {
    id: 43,
    medicamento: 'Fenobarbital',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita exigida para Fenobarbital?',
    alternativas: [
      {
        alternativa: 'Receita B1',
        message:
          'Incorreto. Embora seja psicotrópico, é C1 na maioria das concentrações.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Correto. Lista C1 (Controle Especial Branca).',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita C1',
  },
  {
    id: 44,
    medicamento: 'Fenobarbital',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Fenobarbital pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Barbitúrico',
        message: 'Correto. Classe antiga de sedativos/anticonvulsivantes.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'ISRS',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Barbitúrico',
  },
  {
    id: 45,
    medicamento: 'Fenobarbital',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Fenobarbital é indicado para:',
    alternativas: [
      {
        alternativa: 'Epilepsia',
        message: 'Correto. Anticonvulsivante clássico.',
      },
      {
        alternativa: 'Obesidade',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Insônia leve',
        message:
          'Incorreto (Não é primeira escolha devido aos efeitos colaterais).',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Epilepsia',
  },
  {
    id: 46,
    medicamento: 'Alprazolam',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita para Alprazolam?',
    alternativas: [
      {
        alternativa: 'Receita B1',
        message: 'Correto. Psicotrópico Lista B1 (Azul).',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita B1',
  },
  {
    id: 47,
    medicamento: 'Alprazolam',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Alprazolam pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Benzodiazepínico',
        message: 'Correto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Psicoestimulante',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message:
          'Incorreto (Embora tenha leve efeito antidepressivo, a classe é Benzo).',
      },
    ],
    resposta: 'Benzodiazepínico',
  },
  {
    id: 48,
    medicamento: 'Alprazolam',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Alprazolam é utilizado para tratar:',
    alternativas: [
      {
        alternativa: 'Ansiedade',
        message: 'Correto. Principalmente transtorno do pânico.',
      },
      {
        alternativa: 'Dor intensa',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Convulsões',
        message:
          'Incorreto (Ao contrário do Diazepam, não é primeira linha para convulsão).',
      },
      {
        alternativa: 'TDAH',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Ansiedade',
  },
  {
    id: 49,
    medicamento: 'Escitalopram',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita usada para Escitalopram?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: Tecnicamente Receita de Controle Especial (Branca).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto (no gabarito), mas tecnicamente correto na lei.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 50,
    medicamento: 'Escitalopram',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Escitalopram é classificado como:',
    alternativas: [
      {
        alternativa: 'ISRS',
        message: 'Correto. Inibidor Seletivo de Recaptação de Serotonina.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Benzodiazepínico',
        message: 'Incorreto.',
      },
    ],
    resposta: 'ISRS',
  },
  {
    id: 51,
    medicamento: 'Escitalopram',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Escitalopram é indicado para:',
    alternativas: [
      {
        alternativa: 'Depressão e ansiedade',
        message: 'Correto. Alta eficácia e tolerabilidade.',
      },
      {
        alternativa: 'Dor intensa',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Depressão e ansiedade',
  },
  {
    id: 52,
    medicamento: 'Bupropiona',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usada para Bupropiona?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: Tecnicamente Receita de Controle Especial (Branca).',
      },
      {
        alternativa: 'Receita B2',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto (no gabarito), mas tecnicamente correto na lei.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 53,
    medicamento: 'Bupropiona',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Bupropiona pertence a qual grupo?',
    alternativas: [
      {
        alternativa:
          'Antidepressivo inibidor de recaptação de noradrenalina e dopamina',
        message: 'Correto. Dual (NDRI).',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto. Pode piorar ansiedade.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Psicoestimulante',
        message:
          'Incorreto (Tem efeito estimulante leve, mas é classificado como antidepressivo).',
      },
    ],
    resposta:
      'Antidepressivo inibidor de recaptação de noradrenalina e dopamina',
  },
  {
    id: 54,
    medicamento: 'Bupropiona',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Bupropiona é indicada para:',
    alternativas: [
      {
        alternativa: 'Depressão e cessação do tabagismo',
        message: 'Correto. Reduz a fissura por nicotina.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Causa insônia.',
      },
      {
        alternativa: 'Dor crônica',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto. Contraindicada em epilépticos (reduz limiar).',
      },
    ],
    resposta: 'Depressão e cessação do tabagismo',
  },
  {
    id: 55,
    medicamento: 'Desvenlafaxina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita usado para Desvenlafaxina?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: Tecnicamente Receita de Controle Especial (Branca).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto (no gabarito), mas tecnicamente correto na lei.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 56,
    medicamento: 'Desvenlafaxina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Desvenlafaxina pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Antidepressivo IRSN',
        message:
          'Correto. Inibidor de Recaptação de Serotonina e Noradrenalina (Dual).',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Psicoestimulante',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Antidepressivo IRSN',
  },
  {
    id: 57,
    medicamento: 'Desvenlafaxina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Desvenlafaxina é indicada para:',
    alternativas: [
      {
        alternativa: 'Depressão',
        message: 'Correto. Transtorno depressivo maior.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Dor intensa',
        message: 'Incorreto.',
      },
      {
        alternativa: 'TDAH',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Depressão',
  },
  {
    id: 58,
    medicamento: 'Olanzapina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usada para Olanzapina?',
    alternativas: [
      {
        alternativa: 'Receita C1',
        message: 'Correto. Antipsicótico da Lista C1.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita C1',
  },
  {
    id: 59,
    medicamento: 'Olanzapina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Olanzapina pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Antipsicótico',
        message: 'Correto. Antipsicótico atípico.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Antipsicótico',
  },
  {
    id: 60,
    medicamento: 'Olanzapina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Olanzapina é indicada para:',
    alternativas: [
      {
        alternativa: 'Esquizofrenia e transtorno bipolar',
        message: 'Correto. Estabilizador de humor e antipsicótico.',
      },
      {
        alternativa: 'Insônia',
        message:
          'Incorreto (Usado off-label para sono, mas não é a indicação primária de bula).',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Obesidade',
        message: 'Incorreto. Causa ganho de peso significativo.',
      },
    ],
    resposta: 'Esquizofrenia e transtorno bipolar',
  },
  {
    id: 61,
    medicamento: 'Anfepramona',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usada para Anfepramona?',
    alternativas: [
      {
        alternativa: 'Receita B2',
        message: 'Correto. Anorexígeno Lista B2 (Azul).',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita B2',
  },
  {
    id: 62,
    medicamento: 'Anfepramona',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Anfepramona pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Anorexígeno',
        message: 'Correto. Derivado anfetamínico para perda de peso.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Anorexígeno',
  },
  {
    id: 63,
    medicamento: 'Anfepramona',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Anfepramona é indicada principalmente para:',
    alternativas: [
      {
        alternativa: 'Obesidade',
        message: 'Correto. Tratamento de curto prazo para obesidade.',
      },
      {
        alternativa: 'Dor crônica',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto. Causa insônia.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Obesidade',
  },
  {
    id: 64,
    medicamento: 'Buprenorfina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual receita é usada para Buprenorfina?',
    alternativas: [
      {
        alternativa: 'Notificação A',
        message:
          'Correto. Opioide Lista A1 (transdérmico/injetável) ou A2 (sublingual). Exige notificação amarela.',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Notificação A',
  },
  {
    id: 65,
    medicamento: 'Buprenorfina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Buprenorfina é classificada como:',
    alternativas: [
      {
        alternativa: 'Opioide parcial',
        message: 'Correto. Agonista parcial dos receptores Mu.',
      },
      {
        alternativa: 'Estimulante',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Barbitúrico',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Opioide parcial',
  },
  {
    id: 66,
    medicamento: 'Buprenorfina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Buprenorfina é indicada para:',
    alternativas: [
      {
        alternativa: 'Dor crônica e dependência de opioides',
        message: 'Correto. Adesivos para dor, sublingual para dependência.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiedade',
        message: 'Incorreto.',
      },
      {
        alternativa: 'TDAH',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Dor crônica e dependência de opioides',
  },
  {
    id: 67,
    medicamento: 'Fentanil',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é obrigatório para Fentanil?',
    alternativas: [
      {
        alternativa: 'Notificação A',
        message: 'Correto. Opioide potente Lista A1 (Amarela).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Notificação A',
  },
  {
    id: 68,
    medicamento: 'Fentanil',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Fentanil pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Opioide forte',
        message: 'Correto. Aprox 100x mais potente que morfina.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Estimulante',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Opioide forte',
  },
  {
    id: 69,
    medicamento: 'Fentanil',
    grupo: 'Indicação Terapêutica',
    pergunta: 'O Fentanil é indicado principalmente para:',
    alternativas: [
      {
        alternativa: 'Dor intensa',
        message: 'Correto. Dor oncológica, cirúrgica, etc.',
      },
      {
        alternativa: 'Ansiedade',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'TDAH',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Dor intensa',
  },
  {
    id: 70,
    medicamento: 'Clonazepam',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usado para Clonazepam?',
    alternativas: [
      {
        alternativa: 'Receita B1',
        message: 'Correto. Lista B1 (Azul).',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita B1',
  },
  {
    id: 71,
    medicamento: 'Clonazepam',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Clonazepam pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Benzodiazepínico',
        message: 'Correto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiolítico não benzodiazepínico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Benzodiazepínico',
  },
  {
    id: 72,
    medicamento: 'Clonazepam',
    grupo: 'Indicação Terapêutica',
    pergunta: 'O Clonazepam é indicado principalmente para:',
    alternativas: [
      {
        alternativa: 'Convulsões e ansiedade',
        message: 'Correto. Antiepiléptico e ansiolítico potente.',
      },
      {
        alternativa: 'Insônia leve',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Dor crônica',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Obesidade',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Convulsões e ansiedade',
  },
  {
    id: 73,
    medicamento: 'Mazindol',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita usado para Mazindol?',
    alternativas: [
      {
        alternativa: 'Receita B2',
        message: 'Correto. Anorexígeno Lista B2 (Azul).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita B2',
  },
  {
    id: 74,
    medicamento: 'Mazindol',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Mazindol pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Anorexígeno',
        message: 'Correto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Anorexígeno',
  },
  {
    id: 75,
    medicamento: 'Mazindol',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Mazindol é indicado para:',
    alternativas: [
      {
        alternativa: 'Obesidade',
        message: 'Correto. Supressor do apetite.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Dor neuropática',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Obesidade',
  },
  {
    id: 76,
    medicamento: 'Benzafetamina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usada para Benzafetamina?',
    alternativas: [
      {
        alternativa: 'Receita B2',
        message: 'Correto. Anorexígeno Lista B2 (Azul).',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita B2',
  },
  {
    id: 77,
    medicamento: 'Benzafetamina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Benzafetamina pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Anorexígeno',
        message: 'Correto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Anorexígeno',
  },
  {
    id: 78,
    medicamento: 'Benzafetamina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Benzafetamina é indicada principalmente para:',
    alternativas: [
      {
        alternativa: 'Obesidade',
        message: 'Correto.',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Obesidade',
  },
  {
    id: 79,
    medicamento: 'Levetiracetam',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual tipo de receita é usada para Levetiracetam?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: É Receita de Controle Especial (Branca - C1).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto (no gabarito), mas tecnicamente correto.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 80,
    medicamento: 'Levetiracetam',
    grupo: 'Grupo Farmacológico',
    pergunta: 'O Levetiracetam pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Anticonvulsivante',
        message: 'Correto. Mecanismo via proteína SV2A.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Psicoestimulante',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Anticonvulsivante',
  },
  {
    id: 81,
    medicamento: 'Levetiracetam',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Levetiracetam é indicado para:',
    alternativas: [
      {
        alternativa: 'Crises epilépticas',
        message: 'Correto.',
      },
      {
        alternativa: 'Depressão',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Obesidade',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Crises epilépticas',
  },
  {
    id: 82,
    medicamento: 'Oxandrolona',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita usada para Oxandrolona?',
    alternativas: [
      {
        alternativa: 'Receita C5',
        message: 'Correto. Esteroide Anabolizante Lista C5 (Branca).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita simples',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita C5',
  },
  {
    id: 83,
    medicamento: 'Oxandrolona',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Oxandrolona pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'Esteroide anabolizante',
        message: 'Correto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antidepressivo',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Esteroide anabolizante',
  },
  {
    id: 84,
    medicamento: 'Oxandrolona',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Oxandrolona é indicada para:',
    alternativas: [
      {
        alternativa: 'Ganhos de massa magra e recuperação de queimados',
        message: 'Correto. Catabolismo proteico.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Ansiedade',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Ganhos de massa magra e recuperação de queimados',
  },
  {
    id: 85,
    medicamento: 'Fluoxetina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita para Fluoxetina?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: Tecnicamente Receita de Controle Especial (Branca).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto (no gabarito), mas legalmente é C1.',
      },
      {
        alternativa: 'Notificação A',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 86,
    medicamento: 'Fluoxetina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'A Fluoxetina pertence ao grupo:',
    alternativas: [
      {
        alternativa: 'ISRS',
        message: 'Correto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
    ],
    resposta: 'ISRS',
  },
  {
    id: 87,
    medicamento: 'Fluoxetina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'Fluoxetina é indicada para:',
    alternativas: [
      {
        alternativa: 'Depressão',
        message: 'Correto.',
      },
      {
        alternativa: 'Insônia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Hipertensão',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Depressão',
  },
  {
    id: 88,
    medicamento: 'Sertralina',
    grupo: 'Tipo de Receita',
    pergunta: 'Qual o tipo de receita usado para Sertralina?',
    alternativas: [
      {
        alternativa: 'Receita simples',
        message:
          'Correto (Neste contexto). OBS: Tecnicamente Receita de Controle Especial (Branca).',
      },
      {
        alternativa: 'Receita B1',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Receita C1',
        message: 'Incorreto (no gabarito), mas legalmente é C1.',
      },
      {
        alternativa: 'Receita B2',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Receita simples',
  },
  {
    id: 89,
    medicamento: 'Sertralina',
    grupo: 'Grupo Farmacológico',
    pergunta: 'Sertralina pertence a qual grupo?',
    alternativas: [
      {
        alternativa: 'ISRS',
        message: 'Correto.',
      },
      {
        alternativa: 'Ansiolítico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Antipsicótico',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Opioide',
        message: 'Incorreto.',
      },
    ],
    resposta: 'ISRS',
  },
  {
    id: 90,
    medicamento: 'Sertralina',
    grupo: 'Indicação Terapêutica',
    pergunta: 'A Sertralina é indicada principalmente para:',
    alternativas: [
      {
        alternativa: 'Depressão e ansiedade',
        message: 'Correto.',
      },
      {
        alternativa: 'Dor intensa',
        message: 'Incorreto.',
      },
      {
        alternativa: 'Epilepsia',
        message: 'Incorreto.',
      },
      {
        alternativa: 'TDAH',
        message: 'Incorreto.',
      },
    ],
    resposta: 'Depressão e ansiedade',
  },
];
