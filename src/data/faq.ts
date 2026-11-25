export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

/**
 * Perguntas frequentes de caráter exclusivamente informativo.
 * Todas as respostas devem ser submetidas à revisão jurídica da advogada antes da publicação definitiva.
 */
export const HOME_FAQS: FaqItem[] = [
  {
    category: 'Atuação profissional',
    question: 'O que faz uma advogada previdenciarista?',
    answer:
      'A advogada previdenciarista atua na orientação jurídica, análise de documentos e defesa dos direitos previdenciários e assistenciais dos segurados do INSS e de seus dependentes, tanto na via administrativa quanto na via judicial, sempre considerando as particularidades de cada caso.',
  },
  {
    category: 'BPC/LOAS',
    question: 'O que é o BPC/LOAS?',
    answer:
      'O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (Lei nº 8.742/1993), é um benefício assistencial no valor de um salário mínimo mensal destinado a pessoas idosas com 65 anos ou mais e a pessoas com deficiência de qualquer idade que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida pela família, conforme os critérios legais.',
  },
  {
    category: 'BPC/LOAS',
    question: 'BPC e aposentadoria são o mesmo benefício?',
    answer:
      'Não. A aposentadoria é um benefício previdenciário que exige contribuições ao INSS, dá direito ao 13º salário e pode gerar pensão por morte aos dependentes. O BPC/LOAS tem natureza assistencial, não exige contribuições previdenciárias prévias, não paga 13º salário e não se converte em pensão por morte.',
  },
  {
    category: 'Salário-maternidade',
    question: 'Quem pode ter direito ao salário-maternidade?',
    answer:
      'Podem ter direito as seguradas do INSS — incluindo empregadas com carteira assinada, trabalhadoras avulsas, empregadas domésticas, contribuintes individuais (autônomas e MEI), seguradas facultativas, trabalhadoras rurais (seguradas especiais) e seguradas em período de graça — que atendam aos requisitos legais vigentes na data do parto, adoção, guarda judicial para fins de adoção ou aborto não criminoso.',
  },
  {
    category: 'Aposentadoria rural',
    question: 'Como comprovar atividade rural?',
    answer:
      'A comprovação envolve a autodeclaração do segurado especial acompanhada de início de prova material (como documentos da propriedade ou posse da terra, notas fiscais de produtor, certidões públicas, histórico escolar em zona rural, registros em associações ou documentos em nome de familiares do mesmo núcleo), complementada, quando cabível, por prova testemunhal.',
  },
  {
    category: 'Benefícios do INSS',
    question: 'O que acontece quando o INSS nega um benefício?',
    answer:
      'O indeferimento administrativo significa que, na análise inicial, o INSS entendeu que algum requisito legal ou documental não foi comprovado. É possível consultar a carta de indeferimento pelo Meu INSS para identificar o motivo exato e avaliar, de forma individualizada, se cabe apresentar recurso administrativo, novo requerimento com documentação complementar ou ação judicial.',
  },
  {
    category: 'Benefícios por incapacidade',
    question: 'Qual a diferença entre auxílio-doença e aposentadoria por invalidez?',
    answer:
      'O auxílio por incapacidade temporária (antigo auxílio-doença) é devido quando a incapacidade para o trabalho habitual é temporária e passível de recuperação. Já a aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez) aplica-se quando a avaliação médico-pericial conclui que a incapacidade é total e permanente, sem possibilidade de reabilitação profissional para outra atividade.',
  },
  {
    category: 'Aposentadoria do professor',
    question: 'Professores possuem regras específicas de aposentadoria?',
    answer:
      'Sim. No Regime Geral de Previdência Social (RGPS/INSS), professores que comprovam tempo exclusivo de efetivo exercício nas funções de magistério na educação infantil, no ensino fundamental e no ensino médio possuem redução na idade mínima e no tempo de contribuição exigidos, inclusive nas regras de transição da Emenda Constitucional nº 103/2019.',
  },
  {
    category: 'Pensão por morte',
    question: 'Quem pode ter direito à pensão por morte?',
    answer:
      'Podem ter direito os dependentes legalmente reconhecidos do segurado urbano ou rural falecido, divididos em classes pela Lei nº 8.213/1991 — com prioridade para cônjuge, companheiro(a) em união estável e filhos menores de 21 anos ou inválidos/com deficiência intelectual, mental ou grave — desde que comprovados a qualidade de segurado do falecido e o vínculo de dependência.',
  },
  {
    category: 'Aposentadorias',
    question: 'Como acompanhar as mudanças nas regras de aposentadoria?',
    answer:
      'A Emenda Constitucional nº 103/2019 estabeleceu regras de transição com progressão anual de pontos e de idade mínima até o cumprimento dos tetos previstos na norma. Acompanhar o extrato do CNIS no portal Meu INSS, as normas oficiais do Ministério da Previdência Social e contar com análise individualizada ajuda a compreender qual regra se aplica a cada histórico contributivo.',
  },
  {
    category: 'Atendimento',
    question: 'Como funciona o atendimento on-line?',
    answer:
      'O atendimento é realizado mediante agendamento prévio, de segunda a sexta-feira, em horário comercial, por videoconferência ou WhatsApp profissional. Durante a consulta, a advogada analisa as informações e orienta sobre os documentos e caminhos jurídicos pertinentes ao caso.',
  },
  {
    category: 'Atendimento',
    question: 'O atendimento está disponível para pessoas de outros estados?',
    answer:
      'Sim. Por meio do atendimento on-line e dos sistemas digitais do INSS e do Poder Judiciário brasileiro, Paloma Vidal presta assistência jurídica a segurados e dependentes de diferentes regiões de todo o Brasil.',
  },
];
