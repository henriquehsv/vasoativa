// Dados dos casos clínicos (módulo 9).
//
// Como editar:
//  - Cada caso tem `intro` (cenário inicial) e `perguntas`.
//  - `antes` (opcional) é o trecho "O caso evolui" exibido antes da pergunta.
//  - `correta` é a letra do gabarito (A–D). `comentario` é a explicação exibida após responder.
//  - Blocos aceitos em `intro`/`antes`: p, dados, ul, img. Use *texto* para itálico.

export const casos = [
  // ───────────────────────── CASO 1 ─────────────────────────
  {
    id: 1,
    intro: [
      { tipo: 'p', texto: `Um homem de 58 anos, internado na enfermaria para tratamento de uma infecção, está recebendo antibioticoterapia intravenosa. Hoje, com o resultado das novas culturas, o médico assistente resolveu trocar a antibioticoterapia. Cerca de 10 minutos após o início da infusão da medicação, o paciente começa a apresentar prurido intenso, urticária disseminada e edema dos lábios. Em seguida, refere sensação de aperto na garganta e dificuldade para respirar.` },
      { tipo: 'p', texto: `Você está de plantão do time de resposta rápida e é acionado. Ao exame, o paciente apresenta:` },
      { tipo: 'dados', itens: [
        ['Frequência cardíaca', '112 bpm'],
        ['Pressão arterial', '118 × 76 mmHg'],
        ['Frequência respiratória', '26 irpm'],
        ['SpO₂', '91% em ar ambiente'],
      ] },
      { tipo: 'ul', itens: [`Urticária disseminada e angioedema labial`, `Voz discretamente rouca`] },
    ],
    perguntas: [
      {
        enunciado: [`Diante do quadro clínico apresentado, qual é a conduta inicial mais adequada?`],
        opcoes: [
          `Administrar anti-histamínico por via intravenosa e aguardar a resposta clínica antes de instituir outras medidas terapêuticas.`,
          `Suspender a infusão do antibiótico, administrar adrenalina por via intramuscular e instituir medidas de suporte, incluindo avaliação imediata da via aérea e monitorização dos parâmetros clínicos.`,
          `Administrar hidrocortisona por via intravenosa como primeira medida terapêutica, visando ao controle rápido da reação inflamatória sistêmica.`,
          `Aguardar o desenvolvimento de hipotensão arterial para administrar adrenalina, considerando que a pressão arterial se encontra preservada.`,
        ],
        correta: 'B',
        comentario: [`A suspeita de anafilaxia é sustentada pelo início agudo após a exposição ao medicamento, associado ao comprometimento cutâneo, ao angioedema e aos sinais de comprometimento respiratório.`],
      },
      {
        antes: [
          { tipo: 'p', texto: `Após a primeira abordagem, o paciente recebe duas doses de adrenalina intramuscular, com intervalo de cinco minutos, além de oxigênio suplementar e expansão volêmica inicial com cristaloide intravenoso. Apesar das medidas instituídas, apresenta piora progressiva do edema de via aérea superior, com estridor, esforço respiratório intenso e queda do nível de consciência.` },
          { tipo: 'p', texto: `Diante do risco de obstrução completa da via aérea, a equipe realiza intubação orotraqueal. Após o procedimento, o paciente permanece gravemente instável, com hipotensão persistente e sinais de hipoperfusão periférica.` },
          { tipo: 'p', texto: `Novos parâmetros clínicos:` },
          { tipo: 'dados', itens: [
            ['Frequência cardíaca', '142 bpm'],
            ['Pressão arterial', '68 × 36 mmHg'],
            ['SpO₂', '94% sob ventilação mecânica'],
            ['Tempo de enchimento capilar', '5 segundos'],
          ] },
          { tipo: 'ul', itens: [`Diurese reduzida`, `Extremidades frias e perfusão periférica comprometida`] },
        ],
        enunciado: [
          `Durante a avaliação inicial, a equipe identifica sinais de hipoperfusão periférica e congestão pulmonar e sistêmica. Esses achados permitem caracterizar clinicamente o perfil hemodinâmico do paciente segundo a combinação entre perfusão e congestão.`,
          `Assinale a alternativa que corresponde ao perfil identificado.`,
        ],
        opcoes: [
          `Quente e seco, caracterizado por perfusão periférica preservada e ausência de congestão.`,
          `Quente e úmido, caracterizado por perfusão preservada, apesar da presença de congestão.`,
          `Frio e seco, caracterizado por hipoperfusão periférica sem evidências clínicas de congestão.`,
          `Frio e úmido, caracterizado por hipoperfusão periférica associada à congestão pulmonar e sistêmica.`,
        ],
        correta: 'B',
        comentario: [`O paciente apresenta choque anafilático.`],
      },
    ],
  },

  // ───────────────────────── CASO 2 ─────────────────────────
  {
    id: 2,
    intro: [
      { tipo: 'p', texto: `Homem, 68 anos, internado há dois dias por pneumonia comunitária, evolui com piora do estado geral, febre e redução progressiva do volume urinário. A equipe de enfermagem solicita avaliação médica devido à sonolência e hipotensão.` },
      { tipo: 'img', src: '/img/caso2-monitor-1.webp', w: 1123, h: 748,
        alt: `Monitor multiparamétrico do leito 12, às 14:23: frequência cardíaca 124 bpm; pressão arterial 86/48 mmHg (pressão arterial média 61); SpO₂ 91%; frequência respiratória 30 irpm; temperatura 39,2 °C.` },
      { tipo: 'p', texto: `Ao exame físico, apresenta extremidades quentes, tempo de enchimento capilar de 4 segundos e alteração do nível de consciência. Você checa o balanço das últimas 6 horas e identifica que a diurese está abaixo de 0,1 mL/kg/h.` },
    ],
    perguntas: [
      {
        enunciado: [`Considerando o quadro clínico apresentado, qual é a principal hipótese diagnóstica?`],
        opcoes: [
          `Choque hipovolêmico secundário à desidratação.`,
          `Choque cardiogênico decorrente de disfunção miocárdica primária.`,
          `Choque séptico secundário à pneumonia.`,
          `Choque obstrutivo secundário a tromboembolismo pulmonar.`,
        ],
        correta: 'C',
        comentario: [],
      },
      {
        enunciado: [`Diante da suspeita de choque séptico, qual deve ser a prioridade da equipe assistencial?`],
        opcoes: [
          `Aguardar culturas para iniciar antibióticos.`,
          `Administrar antitérmico e reavaliar posteriormente.`,
          `Iniciar fluidos e antibióticos precocemente.`,
          `Administrar diuréticos e monitorar a diurese.`,
        ],
        correta: 'C',
        comentario: [],
      },
      {
        antes: [
          { tipo: 'p', texto: `O paciente é transferido para a unidade de terapia intensiva devido à piora progressiva do quadro clínico. Apresenta rebaixamento do nível de consciência, taquipneia intensa e aumento do esforço respiratório, evoluindo com insuficiência respiratória aguda. Diante da deterioração clínica, é realizada intubação orotraqueal e iniciada ventilação mecânica invasiva.` },
          { tipo: 'p', texto: `São coletadas hemoculturas e amostras para investigação microbiológica, sem atrasar o início da antibioticoterapia. Os exames laboratoriais revelam lactato de 4,6 mmol/L, creatinina de 1,8 mg/dL e leucócitos de 19.200/mm³. Apesar das medidas iniciais, mantém hipotensão e sinais de hipoperfusão.` },
        ],
        enunciado: [`Diante da hipotensão persistente, qual é a conduta mais adequada?`],
        opcoes: [
          `Administrar cristaloides adicionais e iniciar dopamina.`,
          `Iniciar noradrenalina e reavaliar a reposição volêmica.`,
          `Iniciar dobutamina, independentemente do débito cardíaco.`,
          `Aguardar a normalização do lactato para iniciar vasopressores.`,
        ],
        correta: 'B',
        comentario: [`É necessário iniciar noradrenalina prontamente. A reposição de fluidos deve continuar sendo individualizada, com avaliação da responsividade e do risco de sobrecarga.`],
      },
      {
        enunciado: [`Ainda a respeito da deterioração do caso clínico e considerando as recomendações da *Surviving Sepsis Campaign 2026*, caso o paciente permanecesse gravemente hipotenso durante a expansão volêmica com cristaloides, qual seria a conduta mais adequada?`],
        opcoes: [
          `Aguardar o término da expansão volêmica para iniciar noradrenalina, caso persista a hipotensão.`,
          `Iniciar noradrenalina por acesso central, concomitantemente à expansão volêmica, devido à gravidade da hipotensão.`,
          `Suspender a expansão volêmica e aguardar a obtenção de acesso central para iniciar noradrenalina.`,
          `Iniciar noradrenalina por acesso periférico, concomitantemente à expansão volêmica, com reavaliação clínica contínua.`,
        ],
        correta: 'B',
        comentario: [
          `A abordagem habitual no choque séptico inclui reposição inicial com cristaloides e introdução de vasopressores quando a hipotensão persiste. Entretanto, a diretriz *Surviving Sepsis Campaign 2026* reconhece que, diante de instabilidade hemodinâmica grave, pode ser apropriado iniciar o vasopressor concomitantemente à expansão volêmica, sem aguardar o término da infusão.`,
          `Nesse cenário, a noradrenalina deve ser iniciada prontamente, enquanto a equipe reavalia a resposta aos fluidos e os sinais de perfusão. Quando necessário, pode-se utilizar um acesso venoso periférico apropriado para não atrasar o tratamento à espera de acesso central. A expansão volêmica deve ser individualizada, evitando a administração indiscriminada de fluidos.`,
        ],
      },
      {
        enunciado: [`Qual é a meta inicial usual de pressão arterial média (PAM) durante o uso de vasopressores?`],
        opcoes: [`50 mmHg.`, `55 mmHg.`, `65 mmHg.`, `90–100 mmHg para todos os pacientes.`],
        correta: 'C',
        comentario: [`A meta inicial usual é uma PAM de 65 mmHg. Essa referência deve ser individualizada conforme a condição clínica, a perfusão dos órgãos e a resposta ao tratamento.`],
      },
      {
        enunciado: [`Qual é o principal mecanismo pelo qual a noradrenalina eleva a pressão arterial nesse paciente?`],
        opcoes: [
          `Bloqueio dos receptores alfa-1, com redução da resistência vascular sistêmica.`,
          `Estimulação predominante dos receptores beta-2, com vasodilatação periférica.`,
          `Estimulação dos receptores alfa-1, promovendo vasoconstrição e aumento da resistência vascular sistêmica, além de efeitos beta-1.`,
          `Aumento direto da oferta de oxigênio por elevação da hemoglobina.`,
        ],
        correta: 'C',
        comentario: [`A noradrenalina estimula predominantemente os receptores α₁, promovendo vasoconstrição e aumento da resistência vascular sistêmica. Também exerce ação β₁ cardíaca, que pode contribuir para a contratilidade. No choque séptico, seu principal efeito terapêutico é restaurar a pressão de perfusão.`],
      },
      {
        antes: [
          { tipo: 'p', texto: `O paciente permanece na UTI. A noradrenalina é iniciada e titulada de acordo com a resposta hemodinâmica. Após algum tempo, a equipe observa melhora parcial da pressão arterial, mas persistem sinais de hipoperfusão.` },
          { tipo: 'img', src: '/img/caso2-monitor-2.webp', w: 1066, h: 711,
            alt: `Monitor multiparamétrico do leito 12, às 14:37: frequência cardíaca 116 bpm; pressão arterial 75/20 mmHg (pressão arterial média 38); SpO₂ 95%; frequência respiratória 26 irpm; temperatura 36,8 °C.` },
        ],
        enunciado: [`Diante da resposta insuficiente à noradrenalina isolada, qual é a conduta farmacológica mais apropriada a considerar?`],
        opcoes: [
          `Suspender a noradrenalina e iniciar dobutamina.`,
          `Associar vasopressina à noradrenalina.`,
          `Associar adrenalina, independentemente da dose de noradrenalina.`,
          `Substituir noradrenalina por dopamina para elevar a pressão arterial.`,
        ],
        correta: 'C',
        comentario: [`A vasopressina atua nos receptores V1a, promovendo vasoconstrição por uma via diferente da adrenérgica. É uma opção recomendada quando há necessidade crescente de noradrenalina.`],
      },
      {
        enunciado: [`Qual é o principal mecanismo de ação vascular da vasopressina?`],
        opcoes: [
          `Estimular receptores β₂, promovendo vasodilatação.`,
          `Bloquear receptores α₁, reduzindo a vasoconstrição.`,
          `Estimular receptores V1a, promovendo vasoconstrição.`,
          `Inibir a fosfodiesterase tipo 3, aumentando o inotropismo.`,
        ],
        correta: 'C',
        comentario: [],
      },
      {
        antes: [
          { tipo: 'p', texto: `No dia seguinte, o paciente apresenta piora dos sinais de hipoperfusão, com extremidades frias, tempo de enchimento capilar de 5 segundos, oligúria persistente e lactato que aumenta de 4,2 para 5,2 mmol/L.` },
          { tipo: 'p', texto: `Os parâmetros hemodinâmicos e os exames complementares revelam:` },
          { tipo: 'ul', itens: [
            `Pressão arterial: 96/54 mmHg em uso de noradrenalina a 0,4 µg/kg/min e vasopressina 0,03 UI/min`,
            `Frequência cardíaca: 122 bpm`,
            `Ecocardiograma à beira do leito: hipocinesia global do ventrículo esquerdo, com fração de ejeção estimada em 25%, sem alteração segmentar predominante`,
            `Avaliação hemodinâmica: sinais de redução do débito cardíaco`,
            `Persistência de sinais clínicos e laboratoriais de hipoperfusão, apesar da pressão arterial sustentada e da reposição volêmica considerada adequada`,
          ] },
        ],
        enunciado: [`Considerando a evolução clínica, os achados ecocardiográficos e os princípios atuais de manejo do choque séptico, qual estratégia terapêutica é mais adequada para esse paciente?`],
        opcoes: [
          `Aumentar progressivamente a noradrenalina até normalizar o lactato, uma vez que a persistência da hipoperfusão indica, necessariamente, pressão arterial insuficiente, mesmo quando a PAM já está próxima da meta inicial.`,
          `Associar dobutamina à noradrenalina, considerando a disfunção ventricular e a hipoperfusão persistente, com monitorização da resposta hemodinâmica, da pressão arterial e de possíveis efeitos adversos.`,
          `Substituir a noradrenalina por dobutamina em monoterapia, pois o componente cardiogênico passa a ser predominante e torna desnecessária a manutenção do suporte vasopressor.`,
          `Administrar novos bolus de cristaloide antes de considerar qualquer inotrópico, pois a redução da fração de ejeção na sepse indica, por si só, que o volume intravascular permanece insuficiente.`,
        ],
        correta: 'B',
        comentario: [`O paciente apresenta evidências de choque misto, com componentes distributivo e cardiogênico. A sepse provoca vasodilatação e alterações da regulação vascular, enquanto a disfunção miocárdica reduz a capacidade de bombeamento do coração. Nesse contexto, a redução do débito cardíaco pode contribuir para a hipoperfusão persistente, mesmo quando a PAM já está próxima da meta inicial.`],
      },
    ],
  },

  // ───────────────────────── CASO 3 ─────────────────────────
  {
    id: 3,
    intro: [
      { tipo: 'p', texto: `Homem, 68 anos, hipertenso, diabético e tabagista, chega ao pronto-socorro com dor torácica intensa há aproximadamente 2 horas, associada a dispneia, sudorese fria e náuseas. Ao exame paciente confuso, sudorético e com extremidades frias, tempo de enchimento capilar de 4 segundos, estertores crepitantes bilaterais até os terços médios dos pulmões, turgência jugular presente.` },
      { tipo: 'dados', itens: [
        ['Pressão arterial', '78/48 mmHg'],
        ['Frequência cardíaca', '118 bpm'],
        ['Frequência respiratória', '30 irpm'],
        ['Saturação de O₂', '88% em ar ambiente'],
      ] },
    ],
    perguntas: [
      {
        enunciado: [`Considerando os dados clínicos apresentados, qual alternativa identifica a síndrome circulatória mais provável e sua possível etiologia?`],
        opcoes: [
          `Choque hipovolêmico, causado por redução aguda do volume intravascular.`,
          `Choque distributivo, causado por vasodilatação sistêmica e redução da resistência vascular.`,
          `Choque cardiogênico, causado por disfunção miocárdica aguda associada à síndrome coronariana.`,
          `Choque obstrutivo, causado por impedimento ao enchimento ventricular associado ao tromboembolismo pulmonar.`,
        ],
        correta: 'C',
        comentario: [],
      },
      {
        enunciado: [
          `Durante a avaliação inicial, a equipe identifica sinais de hipoperfusão periférica e congestão pulmonar e sistêmica. Esses achados permitem caracterizar clinicamente o perfil hemodinâmico do paciente segundo a combinação entre perfusão e congestão.`,
          `Assinale a alternativa que corresponde ao perfil identificado.`,
        ],
        opcoes: [
          `Quente e seco, caracterizado por perfusão periférica preservada e ausência de congestão.`,
          `Quente e úmido, caracterizado por perfusão preservada, apesar da presença de congestão.`,
          `Frio e seco, caracterizado por hipoperfusão periférica sem evidências clínicas de congestão.`,
          `Frio e úmido, caracterizado por hipoperfusão periférica associada à congestão pulmonar e sistêmica.`,
        ],
        correta: 'D',
        comentario: [],
      },
      {
        enunciado: [`A associação entre hipotensão arterial, extremidades frias, alteração do estado mental, oligoperfusão periférica e congestão pulmonar sugere comprometimento importante da função cardíaca. A compreensão dos mecanismos fisiopatológicos envolvidos é fundamental para orientar a escolha do suporte farmacológico. Nesse contexto, assinale a alternativa que melhor explica os achados clínicos do paciente.`],
        opcoes: [
          `A redução da resistência vascular sistêmica promove aumento compensatório do débito cardíaco, mantendo a perfusão tecidual e favorecendo a congestão pulmonar.`,
          `A redução da função de bomba cardíaca compromete o débito cardíaco e a oferta de oxigênio aos tecidos, enquanto o aumento das pressões de enchimento favorece a congestão pulmonar e sistêmica.`,
          `A redução isolada do volume intravascular diminui as pressões de enchimento cardíaco, explicando simultaneamente a turgência jugular e os estertores pulmonares.`,
          `O aumento do débito cardíaco associado à vasodilatação periférica provoca redistribuição do fluxo sanguíneo, sendo o mecanismo predominante da hipotensão observada.`,
        ],
        correta: 'B',
        comentario: [],
      },
      {
        enunciado: [
          `Após a avaliação inicial, o paciente mantém pressão arterial de 78/48 mmHg, com confusão mental, extremidades frias e sinais de congestão pulmonar. A equipe suspeita de choque cardiogênico secundário a uma síndrome coronariana aguda. A ecocardiografia ainda não foi realizada, e a investigação etiológica está em andamento.`,
          `Considerando a gravidade da instabilidade hemodinâmica, assinale a alternativa que apresenta a conduta mais apropriada em relação ao início do suporte vasoativo.`,
        ],
        opcoes: [
          `Aguardar a confirmação ecocardiográfica da disfunção ventricular para iniciar o suporte vasoativo, evitando intervenções farmacológicas antes da definição etiológica.`,
          `Priorizar a administração de grandes volumes de cristaloides e iniciar a droga vasoativa apenas se a hipotensão persistir após a reposição volêmica.`,
          `Iniciar precocemente noradrenalina intravenosa, com titulação conforme a resposta hemodinâmica, enquanto se realiza a investigação etiológica e se organiza o tratamento definitivo.`,
          `Iniciar dobutamina isoladamente, independentemente da pressão arterial, uma vez que a correção da contratilidade é suficiente para restaurar a perfusão sistêmica.`,
        ],
        correta: 'C',
        comentario: [`A hipotensão grave associada a sinais de hipoperfusão exige intervenção imediata. A noradrenalina é uma opção inicial apropriada para sustentar a pressão arterial no choque cardiogênico com hipotensão importante. O tratamento não deve aguardar a conclusão dos exames, embora a avaliação diagnóstica e o tratamento da causa devam ocorrer simultaneamente. A reposição volêmica indiscriminada pode agravar a congestão pulmonar.`],
      },
      {
        enunciado: [`Após a decisão de iniciar suporte vasoativo, a noradrenalina é administrada por infusão intravenosa contínua, com titulação de acordo com a resposta clínica e hemodinâmica. Considerando a farmacodinâmica desse fármaco e sua aplicação no choque cardiogênico, assinale a alternativa correta.`],
        opcoes: [
          `A estimulação predominante dos receptores β₂ promove vasodilatação periférica, reduzindo a resistência vascular sistêmica e elevando a pressão arterial.`,
          `A estimulação predominante dos receptores α₁ promove vasoconstrição e elevação da pressão arterial, enquanto a atividade β₁ pode contribuir para os efeitos cardíacos do fármaco.`,
          `A inibição da fosfodiesterase III aumenta a concentração intracelular de AMP cíclico, promovendo vasodilatação e aumento da contratilidade miocárdica.`,
          `A estimulação dos receptores V₁ vasculares promove vasoconstrição por mecanismo não adrenérgico, constituindo o principal mecanismo de ação da noradrenalina.`,
        ],
        correta: 'B',
        comentario: [`A noradrenalina atua predominantemente sobre receptores α₁-adrenérgicos, promovendo vasoconstrição e aumento da pressão arterial. Sua atividade β₁ também pode produzir efeitos cardíacos. Entretanto, se houver baixo débito cardíaco persistente apesar da restauração da pressão arterial, pode ser necessário considerar um inotrópico, conforme a avaliação hemodinâmica.`],
      },
      {
        enunciado: [
          `Após o início da noradrenalina, a pressão arterial média do paciente atinge 68 mmHg. Entretanto, ele permanece com extremidades frias, oligúria e sinais de hipoperfusão. A ecocardiografia evidencia disfunção sistólica importante do ventrículo esquerdo, e a avaliação clínica sugere persistência de baixo débito cardíaco.`,
          `Considerando a resposta inicial ao suporte vasoativo e os achados da reavaliação, assinale a alternativa que apresenta a estratégia farmacológica mais adequada.`,
        ],
        opcoes: [
          `Suspender a noradrenalina e iniciar nitroglicerina intravenosa, com o objetivo de elevar a pressão arterial e aumentar diretamente a contratilidade ventricular.`,
          `Associar dobutamina, cuidadosamente titulada, para aumentar a contratilidade e o débito cardíaco, mantendo monitorização rigorosa da pressão arterial, do ritmo cardíaco e da perfusão tecidual.`,
          `Aumentar a dose de noradrenalina e associar vasopressina de forma sistemática, independentemente da pressão arterial alcançada e da avaliação do débito cardíaco.`,
          `Substituir a noradrenalina por vasopressina em monoterapia, considerando que esse fármaco estimula receptores β₁ e aumenta diretamente a contratilidade ventricular.`,
        ],
        correta: 'B',
        comentario: [`Quando a pressão arterial está sustentada, mas persiste hipoperfusão atribuível ao baixo débito cardíaco, pode ser necessário associar um inotrópico, como a dobutamina. Sua administração exige cautela, pois pode provocar taquicardia, arritmias e hipotensão. A escolha deve considerar a resposta hemodinâmica, a função ventricular e a evolução clínica.`],
      },
    ],
  },
];
