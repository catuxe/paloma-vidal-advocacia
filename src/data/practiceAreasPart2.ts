import type { PracticeAreaDetail } from './practiceAreasPart1';

export const PRACTICE_AREAS_PART_2: PracticeAreaDetail[] = [
  {
    slug: 'aposentadoria-urbana',
    title: 'Aposentadoria urbana',
    seoTitle: 'Aposentadoria Urbana no INSS: Regras e Transição | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Informações sobre aposentadoria urbana no INSS: idade mínima, tempo de contribuição, regras de transição da EC nº 103/2019, sistema de pontos, CNIS e documentos.',
    group: 'Aposentadorias',
    sensitiveTopic: false,
    intro:
      'A aposentadoria urbana no Regime Geral de Previdência Social (RGPS/INSS) reúne regras permanentes instituídas pela Emenda Constitucional nº 103/2019 e regras de transição aplicáveis a quem já contribuía antes de 13 de novembro de 2019.',
    overview: [
      'A escolha ou identificação da modalidade mais adequada depende da conferência minuciosa do histórico contributivo no Cadastro Nacional de Informações Sociais (CNIS), da verificação de vínculos omitidos ou com indicadores de pendência e da comparação entre as regras de transição.',
      'Algumas regras de transição — como o sistema de pontos e a idade mínima progressiva — passam por alterações anuais até atingirem o limite previsto na Reforma da Previdência, enquanto o pedágio de 50%, o pedágio de 100% e a aposentadoria programada possuem parâmetros fixos.',
    ],
    eligiblePublic: [
      'Trabalhadores urbanos empregados, domésticos, avulsos, contribuintes individuais (autônomos), Microempreendedores Individuais (MEI) e segurados facultativos.',
      'Segurados que já estavam filiados antes de 13/11/2019 (regras de transição ou direito adquirido) e segurados filiados após essa data (regra permanente).',
    ],
    requirements: [
      'Regra permanente (programada): 62 anos de idade e 15 anos de contribuição para mulheres; 65 anos de idade e 20 anos de contribuição para homens filiados após 13/11/2019.',
      'Regra de transição por idade (filiados antes da reforma): 62 anos para mulheres e 65 anos para homens, com mínimo de 15 anos de contribuição.',
      'Regra de transição por pontos (art. 15 da EC 103/2019): soma da idade + tempo mínimo de contribuição (30 anos mulheres / 35 anos homens), com pontuação progressiva anual (93/103 pontos em 2026; 94/104 pontos em 2027).',
      'Regra da idade mínima progressiva (art. 16): tempo mínimo de contribuição somado à idade progressiva (59a6m/64a6m em 2026; 60a/65a em 2027).',
      'Regras de pedágio de 50% e pedágio de 100%, observados os requisitos específicos de cada modalidade.',
    ],
    documentation: [
      'Documento de identificação com foto, CPF e comprovante de residência.',
      'Extrato completo do CNIS (emitido no Meu INSS).',
      'Carteiras de Trabalho (CTPS) físicas e digitais, carnês de recolhimento (GPS), guias DAS-MEI e termos de rescisão.',
      'Certidão de Tempo de Contribuição (CTC) para períodos em outros regimes ou Perfil Profissiográfico Previdenciário (PPP) em caso de atividades especiais.',
    ],
    procedures: [
      'Emitir e revisar o extrato do CNIS para identificar pendências, salários zerados ou vínculos sem data de saída.',
      'Reunir a documentação comprobatória para retificação prévia de dados cadastrais e contributivos, se necessário.',
      'Analisar em qual regra o segurado possui direito adquirido ou melhor enquadramento legal antes de protocolar o requerimento no Meu INSS.',
    ],
    faqs: [
      {
        category: 'Aposentadoria urbana',
        question: 'O simulador do Meu INSS sempre mostra o tempo exato de contribuição?',
        answer:
          'Nem sempre. O simulador utiliza exclusivamente os dados já registrados no CNIS e pode desconsiderar vínculos sem baixa, períodos rurais, tempo especial, contribuições em atraso ou indicadores de pendência que exigem análise técnica.',
      },
    ],
    references: [
      { label: 'Emenda Constitucional nº 103/2019 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' },
      { label: 'Lei nº 8.213/1991 — Planos de Benefícios da Previdência Social (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
      { label: 'Portal Meu INSS — Ministério da Previdência Social', url: 'https://www.gov.br/inss/pt-br' },
    ],
    relatedCategory: 'Aposentadoria urbana',
  },
  {
    slug: 'aposentadoria-rural',
    title: 'Aposentadoria rural',
    seoTitle: 'Aposentadoria Rural e Segurado Especial | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Entenda os direitos previdenciários do trabalhador rural e do segurado especial em regime de economia familiar, autodeclaração, documentação rural e idade mínima.',
    group: 'Aposentadorias',
    sensitiveTopic: false,
    intro:
      'A aposentadoria por idade rural assegura redução de cinco anos na idade mínima em relação à aposentadoria urbana para trabalhadores rurais e agricultores familiares (segurados especiais) que comprovem o tempo mínimo de efetivo exercício de atividade rural.',
    overview: [
      'O segurado especial — como o produtor rural em regime de economia familiar, meeiro, parceiro, comodatário, arrendatário ou pescador artesanal — não precisa comprovar recolhimentos mensais em carnê para ter acesso à aposentadoria rural no valor de um salário mínimo, devendo demonstrar o efetivo labor rural pelo período de carência exigido em lei.',
      'A jurisprudência dos tribunais federais também admite, em situações específicas devidamente comprovadas por prova material e testemunhal, o reconhecimento de períodos de trabalho rural exercidos durante a infância em regime de economia familiar, sem que isso signifique autorização ao trabalho infantil.',
    ],
    eligiblePublic: [
      'Agricultores familiares e produtores rurais em regime de economia familiar (segurados especiais).',
      'Empregados rurais, trabalhadores avulsos rurais e contribuintes individuais que prestam serviço no campo.',
      'Trabalhadores que alternaram períodos rurais e urbanos (aposentadoria híbrida, observados os requisitos legais).',
    ],
    requirements: [
      'Idade mínima de 55 anos para mulheres e 60 anos para homens na aposentadoria por idade rural pura.',
      'Comprovação de efetivo exercício de atividade rural por, no mínimo, 180 meses (15 anos), ainda que de forma descontínua, nos termos da Lei nº 8.213/1991.',
      'Apresentação de autodeclaração do segurado especial acompanhada de início de prova material contemporânea ao período alegado.',
    ],
    documentation: [
      'Autodeclaração do segurado especial devidamente preenchida.',
      'Documentos da terra ou exploração rural: escritura, ITR, CCIR, CAF/DAP, contratos de arrendamento, parceria, comodato ou meação.',
      'Notas fiscais de produtor rural, blocos de notas, recibos de venda de produção ou compra de insumos.',
      'Certidões de nascimento, casamento ou óbito que indiquem a profissão de lavrador/agricultor, histórico escolar em escola rural, título eleitoral, fichas médicas e documentos em nome de familiares do mesmo núcleo, quando admissíveis.',
      'Registros em sindicatos rurais ou associações de agricultores (como elemento complementar de prova).',
    ],
    procedures: [
      'Reunir documentos antigos e recentes que cubram os anos de atividade rural, organizando-os em ordem cronológica.',
      'Preencher com rigor a autodeclaração rural, evitando contradições com o CNIS e outros cadastros públicos.',
      'Protocolar o pedido pelo Meu INSS e acompanhar eventual exigência documental ou justificação administrativa.',
    ],
    faqs: [
      {
        category: 'Aposentadoria rural',
        question: 'Documentos em nome do cônjuge ou dos pais servem como prova de trabalho rural?',
        answer:
          'Sim, em regra a jurisprudência admite que documentos rurais em nome de membros do mesmo grupo familiar sirvam como início de prova material para os demais integrantes que trabalharam em regime de economia familiar, avaliando-se o conjunto probatório de cada caso.',
      },
    ],
    references: [
      { label: 'Constituição Federal — Art. 201, § 7º, II (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
      { label: 'Lei nº 8.213/1991 — Arts. 11, VII, 48 e 106 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
    ],
    relatedCategory: 'Aposentadoria rural',
  },
  {
    slug: 'aposentadoria-professor',
    title: 'Aposentadoria do professor',
    seoTitle: 'Aposentadoria do Professor no INSS (RGPS) | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Conheça as regras da aposentadoria do professor no RGPS/INSS: tempo exclusivo de magistério, idade mínima, regras de transição da Reforma da Previdência e documentos.',
    group: 'Aposentadorias',
    sensitiveTopic: false,
    intro:
      'No Regime Geral de Previdência Social (RGPS/INSS), professores que comprovam tempo exclusivo de efetivo exercício nas funções de magistério na educação infantil e no ensino fundamental e médio possuem redução de cinco anos na idade e no tempo de contribuição exigidos para a aposentadoria.',
    overview: [
      'Esta página aborda prioritariamente as regras aplicáveis aos professores vinculados ao Regime Geral de Previdência Social (RGPS/INSS), como profissionais da rede privada e servidores de municípios sem regime próprio. Professores vinculados a Regimes Próprios de Previdência Social (RPPS) seguem estatutos específicos de cada ente federativo.',
      'Para fins previdenciários, as funções de magistério compreendem a docência em sala de aula e também as funções de direção de unidade escolar, coordenação e assessoramento pedagógico exercidas por professores de carreira em estabelecimentos de educação básica, nos termos da Lei nº 11.301/2006 e da jurisprudência do STF.',
    ],
    eligiblePublic: [
      'Professores da educação infantil, do ensino fundamental e do ensino médio vinculados ao RGPS/INSS.',
      'Profissionais em funções de direção escolar, coordenação e assessoramento pedagógico na educação básica, conforme enquadramento legal.',
    ],
    requirements: [
      'Regra permanente (pós-EC 103/2019): 57 anos de idade para professoras e 60 anos para professores, com mínimo de 25 anos de contribuição exclusiva em funções de magistério.',
      'Regra de transição por pontos (art. 15, § 3º): 25 anos de magistério (mulheres) ou 30 anos (homens), com pontuação reduzida em 5 pontos (88/98 pontos em 2026; 89/99 pontos em 2027).',
      'Regra da idade mínima progressiva (art. 16, § 2º): 25 anos de magistério (mulheres) ou 30 anos (homens), com idade progressiva (54a6m/59a6m em 2026; 55a/60a em 2027).',
      'Regra do pedágio de 100% (art. 20, § 1º): idade mínima de 52 anos (professoras) ou 55 anos (professores), tempo mínimo de magistério e cumprimento do pedágio de 100% sobre o tempo que faltava em 13/11/2019.',
    ],
    documentation: [
      'Documento de identificação, CPF e extrato do CNIS.',
      'Carteiras de Trabalho (CTPS) com registro da função de professor(a).',
      'Declarações das instituições de ensino especificando o período trabalhado, a função exercida e o nível de ensino (educação infantil, fundamental ou médio).',
      'Diploma ou comprovante de habilitação legal para o exercício do magistério, quando solicitado.',
    ],
    procedures: [
      'Conferir no CNIS se todos os vínculos escolares constam com as datas corretas e sem pendências de recolhimento.',
      'Obter declarações atualizadas das escolas quando a CTPS não especificar o nível de ensino básico.',
      'Comparar as regras de transição e a regra permanente antes do protocolo no Meu INSS.',
    ],
    faqs: [
      {
        category: 'Aposentadoria do professor',
        question: 'Professor universitário tem direito à redução de tempo do magistério?',
        answer:
          'Não. A Constituição Federal (art. 201, § 8º) restringe a redução de requisitos aos professores que comprovem tempo exclusivo de efetivo exercício na educação infantil e no ensino fundamental e médio.',
      },
    ],
    references: [
      { label: 'Constituição Federal — Art. 201, § 8º (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm' },
      { label: 'Emenda Constitucional nº 103/2019 — Regras de Transição do Magistério (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' },
      { label: 'Lei nº 11.301/2006 — Funções de Magistério (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11301.htm' },
    ],
    relatedCategory: 'Aposentadoria do professor',
  },
  {
    slug: 'pensao-por-morte',
    title: 'Pensão por morte rural e urbana',
    seoTitle: 'Pensão por Morte Rural e Urbana no INSS | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Saiba quem são os dependentes na pensão por morte urbana e rural, como comprovar união estável, qualidade de segurado, duração do benefício e documentos necessários.',
    group: 'Proteção à maternidade e à família',
    sensitiveTopic: false,
    intro:
      'A pensão por morte é o benefício previdenciário pago aos dependentes legalmente reconhecidos do segurado urbano ou rural que falecer (ou tiver morte presumida declarada judicialmente), esteja ele aposentado ou em atividade, desde que mantivesse a qualidade de segurado na data do óbito.',
    overview: [
      'A pensão por morte não exige carência mínima de contribuições para a concessão em si, embora o tempo de contribuição do falecido e a duração do casamento ou da união estável influenciem diretamente o prazo de duração do benefício para o cônjuge ou companheiro(a).',
      'Tanto dependentes de trabalhadores urbanos quanto dependentes de segurados especiais rurais podem requerer o benefício, observando-se as formas próprias de comprovação da atividade urbana ou rural do falecido.',
    ],
    eligiblePublic: [
      'Classe 1 (dependência econômica presumida): cônjuge, companheiro(a) em união estável e filhos não emancipados menores de 21 anos ou inválidos ou com deficiência intelectual, mental ou grave.',
      'Classe 2 (na ausência da Classe 1, mediante comprovação de dependência econômica): pais do segurado.',
      'Classe 3 (na ausência das Classes 1 e 2, mediante comprovação de dependência econômica): irmãos não emancipados menores de 21 anos ou inválidos/com deficiência intelectual, mental ou grave.',
    ],
    requirements: [
      'Comprovação do óbito ou da morte presumida do segurado.',
      'Qualidade de segurado do falecido na data do óbito (ou preenchimento dos requisitos para aposentadoria antes do falecimento).',
      'Qualidade de dependente do requerente, com comprovação do casamento, da união estável ou da dependência econômica, conforme a classe.',
      'Para pensão por morte rural: comprovação de que o segurado falecido exercia atividade rural na condição de segurado especial.',
    ],
    documentation: [
      'Certidão de óbito do segurado e documentos pessoais (RG e CPF) do falecido e dos dependentes.',
      'Certidão de casamento atualizada ou início de prova material contemporânea de união estável (como certidão de nascimento de filhos em comum, conta conjunta, comprovante de mesmo domicílio, declaração de imposto de renda, plano de saúde, entre outros).',
      'Documentos previdenciários do falecido (CTPS, CNIS, carnês) ou, no caso rural, autodeclaração e documentos comprobatórios da atividade rural.',
    ],
    procedures: [
      'Protocolar o requerimento pelo Meu INSS ou Central 135, observando os prazos legais para fixação da data de início do benefício (DIB) — em regra, até 90 dias após o óbito (ou até 180 dias para filhos menores de 16 anos) para receber desde a data do falecimento.',
      'Acompanhar eventuais exigências documentais de comprovação de união estável ou atividade rural.',
      'A duração do benefício para cônjuge ou companheiro(a) varia conforme a idade na data do óbito, o tempo de casamento/união estável e o número de contribuições do falecido, conforme a Lei nº 8.213/1991 e a Portaria ME nº 424/2020.',
    ],
    faqs: [
      {
        category: 'Pensão por morte',
        question: 'União estável sem registro em cartório dá direito à pensão por morte?',
        answer:
          'A ausência de escritura pública não impede, por si só, o reconhecimento da união estável para fins previdenciários, desde que haja início de prova material contemporânea aos fatos nos termos do art. 16, § 5º, da Lei nº 8.213/1991.',
      },
    ],
    references: [
      { label: 'Lei nº 8.213/1991 — Arts. 16 e 74 a 79 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
      { label: 'Emenda Constitucional nº 103/2019 — Art. 23 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' },
    ],
    relatedCategory: 'Pensão por morte',
  },
];
