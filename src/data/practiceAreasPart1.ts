import type { FaqItem } from './faq';

export interface PracticeAreaDetail {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  group: string;
  sensitiveTopic: boolean;
  intro: string;
  overview: string[];
  eligiblePublic: string[];
  requirements: string[];
  documentation: string[];
  procedures: string[];
  extraSectionTitle?: string;
  extraSectionParagraphs?: string[];
  faqs: FaqItem[];
  references: { label: string; url: string }[];
  relatedCategory: string;
}

export const PRACTICE_AREAS_PART_1: PracticeAreaDetail[] = [
  {
    slug: 'bpc-loas',
    title: 'BPC/LOAS — Benefício de Prestação Continuada',
    seoTitle: 'BPC/LOAS: Requisitos, Documentos e Orientações | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Entenda o que é o BPC/LOAS, quem pode solicitar (pessoas idosas, pessoas com deficiência e crianças com autismo), critérios socioeconômicos, CadÚnico e avaliações no INSS.',
    group: 'Benefícios assistenciais',
    sensitiveTopic: true,
    intro:
      'O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (Lei nº 8.742/1993), garante um salário mínimo mensal a pessoas idosas e a pessoas com deficiência que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida pela família.',
    overview: [
      'O BPC possui natureza assistencial e não previdenciária. Isso significa que o requerente não precisa ter contribuído previamente ao INSS para pleitear o benefício, desde que preencha integralmente os critérios previstos na legislação vigente.',
      'Por ser um benefício assistencial, o BPC/LOAS não dá direito ao 13º salário e não gera pensão por morte aos dependentes, diferenciando-se da aposentadoria previdenciária.',
    ],
    eligiblePublic: [
      'Pessoas idosas com 65 anos de idade ou mais que atendam ao critério socioeconômico previsto em lei.',
      'Pessoas com deficiência de qualquer idade — inclusive crianças e adolescentes com Transtorno do Espectro Autista (TEA), reconhecidas legalmente como pessoas com deficiência pela Lei nº 12.764/2012 — que apresentem impedimentos de longo prazo de natureza física, mental, intelectual ou sensorial.',
      'Famílias em situação de vulnerabilidade socioeconômica regularmente inscritas e com dados atualizados no Cadastro Único (CadÚnico).',
    ],
    requirements: [
      'Inscrição ativa e atualizada no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) nos últimos 24 meses.',
      'Critério socioeconômico: renda familiar mensal per capita dentro dos parâmetros da Lei nº 8.742/1993. Com as recentes alterações na legislação (Lei nº 15.077/2024 e Decreto nº 12.534/2025, que alterou o Decreto nº 6.214/2007), os valores recebidos pelo Bolsa Família passaram a integrar, como regra geral, o cálculo da renda familiar para concessão do BPC/LOAS — existindo, contudo, particularidades relacionadas à data de concessão, a despesas contínuas com saúde e às circunstâncias de cada família.',
      'Para pessoas com deficiência: comprovação de impedimento de longo prazo (mínimo de 2 anos) que, em interação com barreiras, possa obstruir a participação plena e efetiva na sociedade em igualdade de condições, verificada em avaliação médica e avaliação social (biopsicossocial).',
      'Não acumular o BPC com outro benefício no âmbito da seguridade social ou de outro regime, salvo assistência médica e pensões especiais de natureza indenizatória.',
    ],
    documentation: [
      'Documentos de identificação com foto e CPF do requerente e de todos os membros do grupo familiar que residem sob o mesmo teto.',
      'Comprovante de inscrição e folha resumo atualizada do Cadastro Único (CadÚnico), obtida no CRAS.',
      'Comprovante de residência atualizado e comprovantes de renda ou declaração de ausência de rendimentos dos integrantes da família.',
      'Para BPC por deficiência (incluindo autismo): laudos médicos detalhados com CID, histórico clínico, exames, receitas, relatórios de terapias multidisciplinares e comprovação de despesas médicas contínuas, quando houver.',
    ],
    procedures: [
      'Atualizar o Cadastro Único no CRAS do município antes de protocolar o pedido.',
      'Protocolar o requerimento administrativo pelo portal ou aplicativo Meu INSS ou pela Central 135.',
      'Acompanhar o agendamento da perícia médica e da avaliação social, no caso de BPC para pessoa com deficiência.',
      'Em caso de indeferimento administrativo, consultar a carta de decisão para verificar o motivo exato e avaliar, de forma individualizada, eventual pedido de revisão, recurso administrativo ou medida judicial.',
    ],
    extraSectionTitle: 'Diferenças entre BPC/LOAS e aposentadoria',
    extraSectionParagraphs: [
      'Enquanto a aposentadoria depende de contribuições ao INSS (ou comprovação de atividade rural como segurado especial), paga 13º salário e pode gerar pensão por morte, o BPC/LOAS é um benefício assistencial sujeito a revisão periódica das condições socioeconômicas e da deficiência.',
      'Além disso, o diagnóstico médico isolado — inclusive de TEA, depressão ou outras condições de saúde — não gera concessão automática do BPC; é indispensável o preenchimento conjunto da avaliação biopsicossocial e dos critérios socioeconômicos.',
    ],
    faqs: [
      {
        category: 'BPC/LOAS',
        question: 'Toda criança com autismo tem direito automático ao BPC/LOAS?',
        answer:
          'Não. A Lei nº 12.764/2012 reconhece a pessoa com TEA como pessoa com deficiência para todos os efeitos legais, mas a concessão do BPC depende da comprovação conjunta dos impedimentos na avaliação biopsicossocial, da inscrição atualizada no CadÚnico e dos requisitos socioeconômicos vigentes.',
      },
      {
        category: 'BPC/LOAS',
        question: 'O Bolsa Família entra no cálculo da renda para o BPC/LOAS?',
        answer:
          'Com as recentes alterações na legislação (Lei nº 15.077/2024 e Decreto nº 12.534/2025), os valores recebidos pelo Bolsa Família passaram a integrar, como regra geral, o cálculo da renda familiar para concessão do BPC/LOAS. Entretanto, existem particularidades que devem ser consideradas, especialmente em relação à data de concessão do benefício e às circunstâncias de cada família.',
      },
      {
        category: 'BPC/LOAS',
        question: 'O que significa ter o BPC/LOAS negado pelo INSS?',
        answer:
          'O indeferimento administrativo pode decorrer de divergências cadastrais, cálculo da renda ou avaliação dos requisitos legais, mas não significa necessariamente inexistência do direito. A análise individualizada do motivo da negativa ajuda a identificar quais possibilidades cabem em cada caso.',
      },
    ],
    references: [
      { label: 'Lei nº 8.742/1993 — Lei Orgânica da Assistência Social (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8742.htm' },
      { label: 'Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da Pessoa com TEA (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm' },
      { label: 'Lei nº 15.077/2024 — Alterações no cálculo da renda do BPC (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15077.htm' },
      { label: 'Decreto nº 6.214/2007 (atualizado pelo Decreto nº 12.534/2025) — Regulamento do BPC (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6214.htm' },
    ],
    relatedCategory: 'BPC/LOAS',
  },
  {
    slug: 'salario-maternidade',
    title: 'Salário-maternidade',
    seoTitle: 'Salário-Maternidade INSS: Quem Tem Direito e Requisitos | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Saiba como funciona o salário-maternidade no INSS para trabalhadoras urbanas, rurais, autônomas, MEI, facultativas, desempregadas e mães adolescentes, à luz das regras vigentes.',
    group: 'Proteção à maternidade e à família',
    sensitiveTopic: false,
    intro:
      'O salário-maternidade é o benefício previdenciário destinado à proteção da maternidade e da infância, devido em razão de parto, adoção, guarda judicial para fins de adoção ou aborto não criminoso, desde que comprovada a qualidade de segurada no INSS.',
    overview: [
      'A proteção abrange diferentes categorias de seguradas do Regime Geral de Previdência Social (RGPS), com regras próprias de comprovação conforme o vínculo de trabalho ou contribuição.',
      'Em março de 2024, no julgamento conjunto das ADIs 2110 e 2111, o Supremo Tribunal Federal (STF) declarou inconstitucional a exigência de carência de 10 contribuições mensais para contribuintes individuais (incluindo MEI), seguradas facultativas e seguradas especiais, equiparando-as às trabalhadoras com carteira assinada no tocante à dispensa dessa carência diferenciada, mantida a exigência de qualidade de segurada regular antes do fato gerador.',
    ],
    eligiblePublic: [
      'Empregadas com carteira assinada, trabalhadoras avulsas e empregadas domésticas.',
      'Trabalhadoras autônomas (contribuintes individuais) e Microempreendedoras Individuais (MEI).',
      'Seguradas facultativas (como estudantes e donas de casa que contribuem regularmente).',
      'Trabalhadoras rurais em regime de economia familiar (seguradas especiais).',
      'Seguradas desempregadas que ainda mantenham a qualidade de segurada (período de graça).',
      'Mães adolescentes que comprovem atividade protegida e qualidade de segurada, conforme a jurisprudência do STJ e normas administrativas vigentes do INSS.',
    ],
    requirements: [
      'Ocorrência do fato gerador: parto (inclusive natimorto), adoção, guarda judicial para fins de adoção ou aborto não criminoso.',
      'Manutenção da qualidade de segurada na data do fato gerador, observados os prazos de período de graça previstos no art. 15 da Lei nº 8.213/1991.',
      'Observância das regras de carência e validade das contribuições vigentes, conforme a Lei nº 8.213/1991 e a decisão do STF nas ADIs 2110 e 2111, sempre resguardada a boa-fé objetiva.',
      'Para segurada especial rural: comprovação do exercício de atividade rural em regime de economia familiar no período anterior ao evento.',
    ],
    documentation: [
      'Documento de identificação com foto e CPF da segurada.',
      'Certidão de nascimento da criança, termo de guarda judicial para fins de adoção, certidão de natimorto ou atestado médico (conforme o caso).',
      'Carteira de Trabalho (CTPS), carnês de contribuição (GPS), guias DAS-MEI ou extrato do CNIS.',
      'Para trabalhadora rural: autodeclaração de segurada especial e documentos comprobatórios da atividade rural.',
    ],
    procedures: [
      'Para empregadas de empresas urbanas, em regra o pedido de afastamento por parto é encaminhado diretamente à empresa, que realiza o pagamento e compensa junto à Previdência.',
      'Para autônomas, MEI, facultativas, desempregadas, domésticas, trabalhadoras rurais e casos de adoção, o requerimento é feito diretamente pelo portal Meu INSS ou Central 135.',
      'O prazo legal para requerer o salário-maternidade é de até 5 anos a contar da data do fato gerador, observadas as regras de prescrição.',
    ],
    faqs: [
      {
        category: 'Salário-maternidade',
        question: 'Desempregada pode receber salário-maternidade?',
        answer:
          'Pode, desde que na data do parto ou adoção ainda mantenha a qualidade de segurada dentro do chamado período de graça (que varia conforme o histórico contributivo e situações previstas em lei).',
      },
      {
        category: 'Salário-maternidade',
        question: 'A decisão do STF acabou com a carência de 10 meses para MEI e autônomas?',
        answer:
          'Nas ADIs 2110 e 2111, o STF considerou inconstitucional a exigência de 10 meses de carência diferenciada. Contudo, continua indispensável comprovar a qualidade de segurada válida antes do fato gerador e a regularidade das contribuições, analisando-se cada caso individualmente.',
      },
    ],
    references: [
      { label: 'Lei nº 8.213/1991 — Arts. 71 a 73 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
      { label: 'STF — Julgamento das ADIs 2110 e 2111 (Portal do STF)', url: 'https://portal.stf.jus.br/' },
      { label: 'Decreto nº 3.048/1999 — Regulamento da Previdência Social (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm' },
    ],
    relatedCategory: 'Salário-maternidade',
  },
  {
    slug: 'auxilio-incapacidade-temporaria',
    title: 'Auxílio por incapacidade temporária',
    seoTitle: 'Auxílio por Incapacidade Temporária (Auxílio-Doença) | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Entenda os requisitos do auxílio por incapacidade temporária (antigo auxílio-doença), qualidade de segurado, carência, perícia médica do INSS, prorrogação e cessação.',
    group: 'Benefícios por incapacidade',
    sensitiveTopic: true,
    intro:
      'Anteriormente conhecido como auxílio-doença, o auxílio por incapacidade temporária é o benefício previdenciário devido ao segurado do INSS que ficar temporariamente incapaz para o seu trabalho ou para a sua atividade habitual por mais de 15 dias consecutivos.',
    overview: [
      'O benefício tem como finalidade assegurar a subsistência do trabalhador durante o período de recuperação clínica ou cirúrgica, sendo concedido mediante comprovação da incapacidade laboral em avaliação médico-pericial.',
      'A simples existência de uma doença não assegura automaticamente o benefício: o critério decisivo é a demonstração de que a condição de saúde impede temporariamente o exercício da atividade habitual.',
    ],
    eligiblePublic: [
      'Segurados do INSS (empregados, domésticos, avulsos, contribuintes individuais, MEI, facultativos e segurados especiais rurais) que estejam incapacitados temporariamente para o trabalho.',
    ],
    requirements: [
      'Qualidade de segurado na data de início da incapacidade (DII).',
      'Carência mínima de 12 contribuições mensais, salvo nas hipóteses legais de isenção de carência (como acidente de qualquer natureza ou causa, acidente do trabalho, doença profissional ou doenças graves especificadas em lista interministerial).',
      'Comprovação de incapacidade temporária para o trabalho habitual por meio de perícia médica federal ou análise documental (Atestmed), quando cabível.',
    ],
    documentation: [
      'Documento de identificação com foto e CPF.',
      'Atestados e relatórios médicos atualizados, legíveis, contendo nome completo, diagnóstico (CID, quando autorizado pelo paciente), data de início do repouso, prazo estimado de afastamento, assinatura e carimbo com CRM do médico.',
      'Exames complementares, receitas, prontuários hospitalares e comprovantes de tratamento.',
      'Para empregados: declaração do último dia trabalhado (DUT) emitida pela empresa.',
    ],
    procedures: [
      'Solicitar o benefício pelo Meu INSS ou Central 135, selecionando a opção de benefício por incapacidade temporária.',
      'Comparecer à perícia médica presencial ou anexar a documentação médica solicitada, conforme o enquadramento do pedido.',
      'Caso a incapacidade persista próximo à data de cessação, solicitar prorrogação dentro dos últimos 15 dias de vigência do benefício.',
      'Em caso de indeferimento ou cessação indevida, analisar o laudo pericial e os documentos médicos para avaliar recurso administrativo ou medida judicial.',
    ],
    faqs: [
      {
        category: 'Benefícios por incapacidade',
        question: 'Posso pedir prorrogação se ainda não tiver condições de voltar ao trabalho?',
        answer:
          'Sim. O pedido de prorrogação deve ser realizado nos últimos 15 dias antes da data prevista para a cessação do benefício, pelo Meu INSS ou pela Central 135, com documentação médica atualizada.',
      },
      {
        category: 'Benefícios por incapacidade',
        question: 'Todo problema de saúde exige 12 meses de carência?',
        answer:
          'Não. A Lei nº 8.213/1991 dispensa a carência de 12 contribuições em casos de acidente de qualquer natureza, acidente do trabalho e doenças graves listadas em portaria interministerial, mantendo-se a exigência de qualidade de segurado.',
      },
    ],
    references: [
      { label: 'Lei nº 8.213/1991 — Arts. 26 e 59 a 63 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
      { label: 'Decreto nº 3.048/1999 — Benefícios por Incapacidade (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/decreto/d3048.htm' },
    ],
    relatedCategory: 'Benefícios por incapacidade',
  },
  {
    slug: 'aposentadoria-incapacidade-permanente',
    title: 'Aposentadoria por incapacidade permanente',
    seoTitle: 'Aposentadoria por Incapacidade Permanente (Invalidez) | Paloma Vidal — OAB/BA 61.001',
    seoDescription:
      'Saiba quais são os requisitos da aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez), avaliação médico-pericial, reabilitação e documentação.',
    group: 'Benefícios por incapacidade',
    sensitiveTopic: true,
    intro:
      'Anteriormente denominada aposentadoria por invalidez, a aposentadoria por incapacidade permanente é devida ao segurado do INSS considerado total e permanentemente incapaz para o trabalho e insuscetível de reabilitação para o exercício de atividade que lhe garanta a subsistência.',
    overview: [
      'A avaliação sobre a permanência da incapacidade considera não apenas o quadro clínico, mas também a possibilidade concreta de reabilitação profissional, levando em conta fatores como idade, escolaridade e histórico laboral na análise judicial e pericial.',
      'Aposentados por incapacidade permanente que necessitem de assistência permanente de outra pessoa podem pleitear o acréscimo de 25% previsto no art. 45 da Lei nº 8.213/1991, mediante avaliação pericial.',
    ],
    eligiblePublic: [
      'Segurados do INSS com qualidade de segurado que apresentem incapacidade laboral total e permanente, sem perspectiva de recuperação ou reabilitação profissional.',
    ],
    requirements: [
      'Qualidade de segurado na data de início da incapacidade.',
      'Carência de 12 contribuições mensais, dispensada nos casos de acidente de qualquer natureza, acidente do trabalho ou doenças graves especificadas em norma oficial.',
      'Constatação médico-pericial de incapacidade total e permanente para qualquer atividade laborativa, sem viabilidade de reabilitação profissional.',
    ],
    documentation: [
      'Documento de identificação com foto, CPF e histórico contributivo (CNIS).',
      'Laudos médicos completos que atestem a cronicidade, gravidade e irreversibilidade ou prognóstico desfavorável do quadro clínico.',
      'Exames de imagem, laboratoriais, relatórios de internações, cirurgias e acompanhamento contínuo.',
    ],
    procedures: [
      'Em muitos casos, o segurado inicia recebendo auxílio por incapacidade temporária e, após nova perícia médica, o benefício é convertido em aposentadoria por incapacidade permanente.',
      'Também é possível requerer a avaliação diretamente pelo Meu INSS quando os laudos já apontam incapacidade definitiva.',
      'O aposentado pode ser convocado periodicamente para revisões periciais, ressalvadas as hipóteses legais de isenção previstas na Lei nº 8.213/1991.',
    ],
    extraSectionTitle: 'Diferença entre incapacidade temporária e permanente',
    extraSectionParagraphs: [
      'No auxílio por incapacidade temporária, há expectativa clínica de recuperação e retorno ao trabalho após tratamento. Na aposentadoria por incapacidade permanente, constata-se que o segurado não tem condições de retornar à atividade habitual nem de ser reabilitado para outra função compatível.',
    ],
    faqs: [
      {
        category: 'Benefícios por incapacidade',
        question: 'Quem tem doença preexistente pode receber aposentadoria por incapacidade permanente?',
        answer:
          'Em regra, a doença ou lesão anterior à filiação ao INSS não gera direito ao benefício, salvo quando a incapacidade resultar de progressão ou agravamento posterior à filiação, conforme prevê o art. 42, § 2º, da Lei nº 8.213/1991.',
      },
    ],
    references: [
      { label: 'Lei nº 8.213/1991 — Arts. 42 a 47 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
      { label: 'Emenda Constitucional nº 103/2019 — Cálculo da Incapacidade Permanente (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' },
    ],
    relatedCategory: 'Benefícios por incapacidade',
  },
];
