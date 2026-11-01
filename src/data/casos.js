// Dados dos casos clínicos (módulo 9).
//
// Como editar:
//  - Cada caso tem `intro` (cenário inicial) e `perguntas`.
//  - `antes` (opcional) é o trecho "O caso evolui" exibido antes da pergunta.
//  - `correta` é a letra do gabarito (A–D). `comentario` (opcional) é a explicação exibida após responder.
//  - Blocos aceitos em `intro`/`antes`: p, dados, ul, img. Use *texto* para itálico.
//  - Em `img`, `fonte` (opcional) é exibida como legenda abaixo da imagem.

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
        enunciado: [`Diante da persistência da hipotensão grave após duas doses apropriadas de adrenalina intramuscular e expansão volêmica inicial, qual é a próxima conduta farmacológica mais adequada?`],
        opcoes: [
          `Substituir a adrenalina por noradrenalina em infusão contínua, uma vez que a hipotensão persistente indica predomínio da vasodilatação periférica.`,
          `Iniciar infusão intravenosa contínua de adrenalina, titulada conforme a resposta clínica e hemodinâmica, mantendo a reposição volêmica e a monitorização contínua em ambiente apropriado.`,
          `Administrar bolus intravenosos repetidos de adrenalina até a normalização da pressão arterial, antes de considerar uma infusão contínua.`,
          `Iniciar infusão de dobutamina, associada à suspensão da adrenalina, para aumentar o débito cardíaco e corrigir a hipoperfusão sistêmica.`,
        ],
        correta: 'B',
        comentario: [`O paciente apresenta anafilaxia refratária, com choque persistente apesar do tratamento inicial. Nessa situação, está indicada a escalada para infusão intravenosa contínua de adrenalina, titulada por equipe experiente, com monitorização hemodinâmica rigorosa. A noradrenalina pode ser considerada como agente adicional se o choque persistir apesar da otimização da adrenalina e das demais medidas.`],
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
        correta: 'D',
        comentario: [
          `A abordagem habitual no choque séptico inclui reposição inicial com cristaloides e introdução de vasopressores quando a hipotensão persiste. Entretanto, a diretriz Surviving Sepsis Campaign 2026 reconhece que, diante de instabilidade hemodinâmica grave, pode ser apropriado iniciar o vasopressor concomitantemente à expansão volêmica, sem aguardar o término da infusão.`,
          `Nesse cenário, a noradrenalina deve ser iniciada prontamente, enquanto a equipe reavalia a resposta aos fluidos e os sinais de perfusão. Quando necessário, pode-se utilizar um acesso venoso periférico apropriado para não atrasar o tratamento à espera de acesso central. A expansão volêmica deve ser individualizada, evitando a administração indiscriminada de fluidos.`,
        ],
      },
      {
        enunciado: [`Qual é a meta inicial usual de pressão arterial média (PAM) durante o uso de vasopressores?`],
        opcoes: [
          `50 mmHg.`,
          `55 mmHg.`,
          `65 mmHg.`,
          `90–100 mmHg para todos os pacientes.`,
        ],
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
          { tipo: 'p', texto: `O paciente permanece na UTI. A noradrenalina é iniciada e titulada de acordo com a resposta hemodinâmica. Após algum tempo, a equipe observa hipotensão persistente.` },
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
        correta: 'B',
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
      },
      {
        antes: [
          { tipo: 'p', texto: `No dia seguinte, o paciente apresenta piora dos sinais de hipoperfusão, com extremidades frias, tempo de enchimento capilar de 5 segundos, oligúria persistente e lactato que aumenta para 5,2 mmol/L.` },
          { tipo: 'p', texto: `Os parâmetros hemodinâmicos e os exames complementares revelam:` },
          { tipo: 'ul', itens: [
            `Pressão arterial: 96/54 mmHg em uso de noradrenalina a 0,4 µg/kg/min e vasopressina 0,03 UI/min.`,
            `Frequência cardíaca: 122 bpm.`,
            `Ecocardiograma à beira do leito: hipocinesia global do ventrículo esquerdo, com fração de ejeção estimada em 25%, sem alteração segmentar predominante;`,
            `Avaliação hemodinâmica: sinais de redução do débito cardíaco;`,
            `Persistência de sinais clínicos e laboratoriais de hipoperfusão, apesar da pressão arterial sustentada e da reposição volêmica considerada adequada.`,
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

  // ───────────────────────── CASO 4 ─────────────────────────
  {
    id: 4,
    intro: [
      { tipo: 'p', texto: `Um homem de 32 anos é levado ao pronto-socorro após sofrer acidente motociclístico. Segundo a equipe do atendimento pré-hospitalar, o paciente foi encontrado consciente, com dor abdominal intensa e palidez cutânea. Durante o transporte, apresentou piora progressiva do estado geral.` },
      { tipo: 'p', texto: `Na admissão, os dados clínicos são:` },
      { tipo: 'dados', itens: [
        ['Pressão arterial', '78 × 46 mmHg'],
        ['Frequência cardíaca', '138 bpm'],
        ['Frequência respiratória', '30 irpm'],
        ['Saturação periférica', '96%'],
        ['Temperatura', '35,6 °C'],
        ['Escala de Glasgow', '14 pontos'],
      ] },
      { tipo: 'p', texto: `Ao exame físico, apresenta pele fria e sudoreica, enchimento capilar de 5 segundos, pulsos periféricos finos e abdome distendido, doloroso à palpação, com sinais de irritação peritoneal. A ultrassonografia realizada à beira do leito pelo protocolo Focused Assessment with Sonography for Trauma (FAST) evidencia líquido livre na cavidade abdominal. A equipe suspeita de hemorragia intra-abdominal significativa. Os exames iniciais mostram lactato de 5,8 mmol/L e déficit de base de −7 mmol/L. A hemoglobina inicial é de 8,4 g/dL.` },
    ],
    perguntas: [
      {
        enunciado: [`Considerando a história clínica, os sinais vitais e os achados do exame físico, assinale a alternativa que apresenta o diagnóstico sindrômico mais provável e sua principal alteração fisiopatológica.`],
        opcoes: [
          `Choque cardiogênico, decorrente de redução primária da contratilidade miocárdica e consequente diminuição do débito cardíaco.`,
          `Choque distributivo, caracterizado por redução da resistência vascular sistêmica em decorrência de vasodilatação periférica predominante.`,
          `Choque hipovolêmico hemorrágico, caracterizado pela redução do volume circulante efetivo, do retorno venoso e do volume sistólico, com comprometimento do débito cardíaco e da perfusão tecidual.`,
          `Choque obstrutivo, decorrente de impedimento mecânico ao enchimento ventricular, com elevação das pressões de enchimento cardíaco.`,
        ],
        correta: 'C',
        comentario: [`O trauma, o líquido livre abdominal, a hipotensão, a taquicardia e os sinais periféricos de hipoperfusão sugerem perda sanguínea importante. A redução da pré-carga compromete o volume sistólico e pode reduzir o débito cardíaco.`],
      },
      {
        enunciado: [`Considerando os mecanismos fisiopatológicos envolvidos no choque, um estudante afirma que a saturação periférica preservada indica oferta adequada de oxigênio aos tecidos. A interpretação fisiológica mais adequada para esse caso é:`],
        opcoes: [
          `A saturação periférica preservada indica que a oferta de oxigênio está mantida, sendo o lactato elevado explicado exclusivamente pela resposta adrenérgica ao trauma.`,
          `A redução do volume intravascular compromete o retorno venoso e o débito cardíaco, podendo reduzir a oferta de oxigênio aos tecidos mesmo com saturação periférica preservada.`,
          `A hemoglobina acima de 7,0 g/dL exclui redução da oferta de oxigênio, tornando improvável que a hipoperfusão seja responsável pela elevação do lactato.`,
          `A taquicardia compensatória aumenta necessariamente o débito cardíaco e garante a manutenção da perfusão tecidual, mesmo diante de hipotensão grave.`,
        ],
        correta: 'B',
        comentario: [`A oferta sistêmica de oxigênio depende tanto do conteúdo arterial de oxigênio quanto do débito cardíaco. Na hemorragia aguda, a redução do retorno venoso pode diminuir o volume sistólico e o débito cardíaco, comprometendo a oferta de oxigênio mesmo quando a saturação periférica está preservada. Além disso, a hemoglobina inicial pode não refletir imediatamente a magnitude da perda sanguínea aguda.`],
      },
      {
        antes: [
          { tipo: 'p', texto: `Após as medidas iniciais, a equipe ativa o protocolo de hemorragia maciça e encaminha o paciente para controle cirúrgico da fonte hemorrágica. A reposição volêmica e transfusional é iniciada, com monitorização contínua.` },
          { tipo: 'p', texto: `Apesar das medidas em andamento, o paciente mantém pressão arterial de 68 × 38 mmHg, com sinais de hipoperfusão grave. A equipe avalia a necessidade de suporte vasoativo temporário enquanto prossegue a ressuscitação e o controle definitivo do sangramento.` },
        ],
        enunciado: [`Nesse contexto de hipotensão grave persistente, qual alternativa apresenta a conduta farmacológica mais adequada?`],
        opcoes: [
          `Dobutamina isolada, pois seu principal efeito é aumentar a resistência vascular sistêmica e restaurar a pressão arterial.`,
          `Noradrenalina, como suporte vasoativo temporário associado à ressuscitação volêmica e hemostática, quando a hipotensão grave persiste apesar das medidas iniciais.`,
          `Nitroglicerina, pois a redução da pré-carga aumenta o retorno venoso e melhora a perfusão sistêmica.`,
          `Nitroprussiato de sódio, pois a vasodilatação arterial aumenta diretamente a pressão de perfusão em pacientes hipovolêmicos.`,
        ],
        correta: 'B',
        comentario: [`A noradrenalina aumenta principalmente o tônus vascular por ação alfa-adrenérgica. Pode ser considerada em hipotensão grave persistente, em associação à ressuscitação e ao controle do sangramento. Não é a intervenção definitiva para a hipovolemia.`],
      },
    ],
  },

  // ───────────────────────── CASO 5 ─────────────────────────
  {
    id: 5,
    intro: [
      { tipo: 'p', texto: `Uma mulher de 62 anos, com diagnóstico de hipertensão arterial sistêmica há aproximadamente 15 anos e baixa adesão ao tratamento medicamentoso, procura o pronto-socorro por dispneia de início súbito, com piora progressiva nas últimas duas horas. Refere que, desde a noite anterior, apresenta dificuldade para dormir na posição horizontal e episódios de despertar durante a madrugada com sensação de falta de ar.` },
      { tipo: 'p', texto: `Ao exame físico, encontra-se ansiosa, sudorética, com dificuldade para falar frases completas e uso de musculatura acessória. Apresenta pressão arterial de 226/134 mmHg, frequência cardíaca de 120 bpm, frequência respiratória de 34 irpm e saturação periférica de oxigênio de 82% em ar ambiente.` },
      { tipo: 'p', texto: `A ausculta pulmonar revela estertores crepitantes bilaterais até os terços médios dos campos pulmonares. Observam-se turgência jugular e extremidades aquecidas, sem assimetria de pulsos periféricos. A paciente está consciente, orientada e sem déficits neurológicos focais. Você solicita um eletrocardiograma e uma radiografia de tórax.` },
      { tipo: 'img', src: '/img/caso5-rx-torax.webp', w: 667, h: 592,
        alt: `Radiografia de tórax em incidência posteroanterior com aumento da área cardíaca e opacidades intersticiais bilaterais, mais evidentes nas regiões peri-hilares, sugestivas de congestão pulmonar.` },
      { tipo: 'img', src: '/img/caso5-ecg.webp', w: 443, h: 206,
        alt: `Eletrocardiograma de 12 derivações com ritmo regular e frequência cardíaca elevada.` },
      { tipo: 'p', texto: `Diante do quadro, a equipe inicia suporte ventilatório, monitorização contínua e avaliação para tratamento anti-hipertensivo intravenoso.` },
    ],
    perguntas: [
      {
        enunciado: [`Considerando a história clínica, os sinais vitais, o exame físico e os exames complementares, qual é o diagnóstico sindrômico mais provável?`],
        opcoes: [
          `Hipertensão arterial grave sem lesão aguda de órgão-alvo, associada à descompensação respiratória de causa não cardiovascular.`,
          `Emergência hipertensiva, manifestada por edema agudo de pulmão decorrente de comprometimento cardiovascular agudo.`,
          `Choque cardiogênico, caracterizado por disfunção circulatória com hipoperfusão sistêmica secundária à falência da bomba cardíaca.`,
          `Síndrome coronariana aguda com choque obstrutivo, manifestada por congestão pulmonar e elevação importante da pressão arterial.`,
        ],
        correta: 'B',
        comentario: [`A paciente apresenta emergência hipertensiva associada a edema agudo de pulmão, uma manifestação de lesão cardiovascular aguda relacionada à elevação importante da pressão arterial. A presença de dispneia intensa, hipoxemia, estertores bilaterais, turgência jugular e congestão pulmonar radiológica sustenta o diagnóstico. A ausência de déficits neurológicos focais não exclui emergência hipertensiva, pois a lesão aguda de órgão-alvo pode acometer diferentes sistemas.`],
      },
      {
        enunciado: [`Após o reconhecimento da emergência hipertensiva, a equipe precisa selecionar um fármaco intravenoso capaz de reduzir rapidamente a pressão arterial e melhorar a congestão pulmonar, com possibilidade de titulação conforme a resposta clínica. Considerando a apresentação predominante, qual estratégia farmacológica é a mais apropriada?`],
        opcoes: [
          `Administrar metoprolol intravenoso como medida inicial, visando reduzir a frequência cardíaca e o consumo miocárdico de oxigênio.`,
          `Iniciar nitroglicerina intravenosa, titulada conforme a resposta clínica e pressórica, associada ao suporte respiratório e às demais medidas indicadas.`,
          `Administrar nifedipina de liberação imediata por via sublingual, visando reduzir rapidamente a resistência vascular sistêmica.`,
          `Iniciar noradrenalina intravenosa para aumentar a pressão de perfusão coronariana e preservar a função renal.`,
        ],
        correta: 'B',
        comentario: [`A nitroglicerina intravenosa é uma opção apropriada na emergência hipertensiva associada a edema agudo de pulmão, especialmente quando há necessidade de redução rápida e titulável da pressão arterial.`],
      },
      {
        enunciado: [
          `Durante o tratamento, o médico residente propõe reduzir imediatamente a pressão arterial da paciente para valores próximos de 120/80 mmHg, a fim de normalizar a hemodinâmica o mais rapidamente possível.`,
          `Considerando as recomendações para emergências hipertensivas associadas a edema agudo de pulmão, qual conduta apresenta a melhor relação entre controle pressórico e segurança?`,
        ],
        opcoes: [
          `Normalizar a pressão arterial nos primeiros minutos, pois a manutenção de valores elevados necessariamente agrava a lesão miocárdica.`,
          `Reduzir a pressão arterial em até 25% na primeira hora em todos os casos, sem considerar o órgão-alvo acometido.`,
          `Promover redução controlada da pressão arterial, buscando pressão sistólica inferior a 140 mmHg na primeira hora, conforme a resposta clínica e a tolerância hemodinâmica.`,
          `Adiar o tratamento anti-hipertensivo até a normalização da oxigenação, pois a redução da pressão arterial pode agravar a congestão pulmonar.`,
        ],
        correta: 'C',
        comentario: [`O objetivo do tratamento não é normalizar imediatamente a pressão arterial, mas reduzir a sobrecarga hemodinâmica e limitar a progressão da lesão de órgão-alvo sem comprometer a perfusão cerebral, coronariana e renal.`],
      },
      {
        enunciado: [`Após o início da nitroglicerina intravenosa e do suporte ventilatório, a paciente apresenta melhora da dispneia e da saturação de oxigênio. Entretanto, a pressão arterial diminui de 226/134 mmHg para 118/72 mmHg em aproximadamente 20 minutos, acompanhada de tontura e rebaixamento do nível de consciência. Qual é a interpretação e a conduta mais apropriadas diante dessa evolução?`],
        opcoes: [
          `Considerar a resposta terapêutica ideal, mantendo a mesma velocidade de infusão até a completa resolução radiológica do edema pulmonar.`,
          `Reconhecer possível redução excessiva da pressão arterial, reavaliar imediatamente a perfusão e o estado neurológico e reduzir ou interromper temporariamente a infusão conforme a avaliação clínica.`,
          `Associar nitroprussiato de sódio à nitroglicerina para estabilizar a pressão arterial e evitar oscilações hemodinâmicas.`,
          `Iniciar noradrenalina obrigatoriamente, independentemente da avaliação de perfusão, para manter a pressão arterial sistólica acima de 180 mmHg.`,
        ],
        correta: 'B',
        comentario: [`A queda da pressão arterial de 226/134 mmHg para 118/72 mmHg em cerca de 20 minutos, associada a tontura e rebaixamento da consciência, sugere redução excessivamente rápida da pressão arterial, com possível comprometimento da perfusão cerebral.`],
      },
    ],
  },

  // ───────────────────────── CASO 6 ─────────────────────────
  {
    id: 6,
    intro: [
      { tipo: 'p', texto: `Uma mulher de 58 anos, hipertensa e diabética, procura o pronto-socorro com queixa de dor torácica e dispneia súbitos, iniciada há aproximadamente duas horas. Relata ainda ter sido submetida a uma artroplastia total de joelho há 12 dias. Desde a cirurgia, permanece com mobilidade reduzida. Nega febre, tosse produtiva ou história prévia de doença pulmonar.` },
      { tipo: 'p', texto: `Ao exame físico, apresenta-se ansiosa, taquipneica e com extremidades discretamente frias.` },
      { tipo: 'p', texto: `Dados da avaliação inicial:` },
      { tipo: 'dados', itens: [
        ['Pressão arterial', '112/74 mmHg'],
        ['Frequência cardíaca', '124 bpm'],
        ['Frequência respiratória', '30 irpm'],
        ['SpO₂', '85% em ar ambiente'],
        ['Temperatura', '36,5 °C'],
      ] },
      { tipo: 'p', texto: `Você solicita uma radiografia de tórax da paciente e um eletrocardiograma.` },
      { tipo: 'img', src: '/img/caso6-rx-torax.webp', w: 1062, h: 1051,
        alt: `Radiografia de tórax em incidência posteroanterior, sem alterações evidentes: campos pulmonares sem consolidações, sem derrame pleural ou pneumotórax e área cardíaca normal.` },
      { tipo: 'img', src: '/img/caso6-ecg.webp', w: 772, h: 516,
        alt: `Eletrocardiograma de 12 derivações com taquicardia de QRS estreito e ritmo regular.` },
    ],
    perguntas: [
      {
        enunciado: [`Considerando a apresentação clínica, os fatores de risco e os achados do exame físico, qual é a hipótese diagnóstica mais provável?`],
        opcoes: [
          `Síndrome coronariana aguda, com insuficiência ventricular esquerda aguda como principal mecanismo da dispneia.`,
          `Tromboembolismo pulmonar agudo, possivelmente associado a trombose venosa profunda.`,
          `Pneumonia comunitária grave, com insuficiência respiratória aguda secundária à consolidação pulmonar.`,
          `Pneumotórax espontâneo, com comprometimento ventilatório e obstrução do retorno venoso.`,
        ],
        correta: 'B',
        comentario: [`A cirurgia recente e a imobilização aumentam o risco de tromboembolismo venoso. A dispneia súbita, a taquicardia e a hipoxemia.`],
      },
      {
        antes: [
          { tipo: 'p', texto: `A paciente recebe oxigênio suplementar e é submetida à investigação diagnóstica. São solicitados exames laboratoriais e uma angiotomografia de tórax da paciente.` },
          { tipo: 'dados', itens: [
            ['Troponina ultrassensível', 'Elevada'],
            ['BNP', 'Elevado'],
            ['Lactato arterial', '2,8 mmol/L'],
            ['Hemoglobina', '12,4 g/dL'],
            ['Creatinina', '0,9 mg/dL'],
          ] },
          { tipo: 'img', src: '/img/caso6-angiotc.webp', w: 821, h: 541,
            alt: `Angiotomografia de tórax em corte axial com falhas de enchimento nas artérias pulmonares direita e esquerda, indicadas por setas.` },
          { tipo: 'p', texto: `Enquanto aguarda transferência para a unidade de terapia intensiva, a paciente apresenta piora súbita do estado geral, com rebaixamento do nível de consciência, aumento da sudorese e intensificação da dispneia.` },
          { tipo: 'p', texto: `A nova avaliação revela:` },
          { tipo: 'dados', itens: [
            ['Pressão arterial', '76/48 mmHg'],
            ['Frequência cardíaca', '138 bpm'],
            ['SpO₂', '91% com oxigênio suplementar'],
            ['Lactato arterial', '5,1 mmol/L'],
          ] },
          { tipo: 'ul', itens: [`Extremidades frias e tempo de enchimento capilar de 5 segundos.`] },
          { tipo: 'p', texto: `O médico assistente realiza o ultrassom a beira leito, que revela aumento de ventrículo direito.` },
          { tipo: 'img', src: '/img/caso6-pocus.webp', w: 720, h: 757,
            alt: `Imagem de ultrassom cardíaco realizado à beira do leito após a deterioração clínica da paciente.` },
        ],
        enunciado: [`Qual é a estratégia mais adequada diante da deterioração apresentada?`],
        opcoes: [
          `Realizar expansão volêmica inicial e associar dobutamina caso persista a hipoperfusão, reservando a reperfusão pulmonar para a ausência de resposta ao suporte farmacológico.`,
          `Iniciar noradrenalina para sustentar a pressão de perfusão, considerar suporte inotrópico conforme a resposta hemodinâmica e providenciar avaliação imediata para reperfusão, considerando o risco hemorrágico e as contraindicações.`,
          `Instituir anticoagulação plena e suporte com noradrenalina, aguardando a redução espontânea da obstrução tromboembólica antes de indicar reperfusão.`,
          `Iniciar dobutamina como agente hemodinâmico principal e utilizar noradrenalina apenas se houver piora da função ventricular direita, priorizando a melhora da contratilidade antes da reperfusão.`,
        ],
        correta: 'B',
      },
      {
        antes: [
          { tipo: 'p', texto: `A paciente é estabilizada e encaminhado a unidade de terapia intensiva.` },
        ],
        enunciado: [`Qual mecanismo explica melhor a disfunção ventricular direita observada nessa paciente?`],
        opcoes: [
          `A obstrução vascular pulmonar aumenta a pós-carga do ventrículo direito, podendo provocar dilatação, redução do débito cardíaco e comprometimento da perfusão sistêmica.`,
          `A obstrução pulmonar reduz a resistência vascular pulmonar e aumenta o retorno venoso, causando sobrecarga volumétrica isolada do ventrículo direito.`,
          `A hipóxia provoca primariamente falência do ventrículo esquerdo, com aumento da pressão hidrostática pulmonar como mecanismo predominante.`,
          `A elevação da pressão arterial pulmonar aumenta diretamente a contratilidade do ventrículo direito, mantendo o débito cardíaco até ocorrer hipoxemia grave.`,
        ],
        correta: 'A',
        comentario: [`A obstrução das artérias pulmonares eleva a resistência vascular pulmonar. O ventrículo direito dilata e pode falhar, reduzindo o fluxo para o ventrículo esquerdo e o débito cardíaco sistêmico. A elevação da troponina e do BNP sugere sobrecarga e lesão miocárdica direita.`],
      },
    ],
  },

  // ───────────────────────── CASO 7 ─────────────────────────
  {
    id: 7,
    intro: [
      { tipo: 'p', texto: `Um homem de 27 anos é levado ao pronto-socorro após sofrer uma queda de aproximadamente quatro metros de altura. Segundo os acompanhantes, ele caiu de costas e, imediatamente após o acidente, relatou dor intensa na região cervical e incapacidade de movimentar os membros inferiores.` },
      { tipo: 'p', texto: `Na avaliação inicial, encontra-se consciente, orientado, ansioso e com dor cervical. Ao exame físico, apresenta redução importante da força muscular nos quatro membros, com maior comprometimento dos membros inferiores.` },
      { tipo: 'p', texto: `O serviço de atendimento móvel de urgência (SAMU) encaminha o paciente ao hospital de trauma mais próximo. Ao chegar na unidade, esses são os sinais vitais:` },
      { tipo: 'dados', itens: [
        ['Pressão arterial', '78/42 mmHg'],
        ['Frequência cardíaca', '48 bpm'],
        ['Frequência respiratória', '22 irpm'],
        ['Saturação periférica de oxigênio', '91%'],
        ['Temperatura', '35,8 °C'],
        ['Extremidades', 'Quentes'],
      ] },
    ],
    perguntas: [
      {
        enunciado: [`Considerando o mecanismo do trauma, os achados neurológicos e o perfil hemodinâmico apresentado, qual hipótese diagnóstica melhor explica a instabilidade cardiovascular do paciente?`],
        opcoes: [
          `Choque hemorrágico, caracterizado pela redução do retorno venoso e pela resposta compensatória mediada pelo sistema nervoso simpático, com taquicardia e vasoconstrição periférica.`,
          `Choque neurogênico, decorrente da perda do tônus simpático após lesão medular, com redução da resistência vascular sistêmica e comprometimento da resposta cronotrópica cardíaca.`,
          `Choque medular, caracterizado pela perda transitória dos reflexos e do tônus motor abaixo da lesão, sendo a hipotensão e a bradicardia manifestações suficientes para confirmar essa síndrome.`,
          `Choque cardiogênico, decorrente de disfunção miocárdica aguda secundária ao trauma, com redução do débito cardíaco e vasoconstrição periférica compensatória.`,
        ],
        correta: 'B',
        comentario: [`A lesão medular cervical pode interromper as vias simpáticas descendentes, provocando vasodilatação, redução da resistência vascular sistêmica e perda da resposta cronotrópica simpática. A combinação de hipotensão, bradicardia e extremidades aquecidas favorece essa hipótese.`],
      },
      {
        enunciado: [
          `Após a avaliação inicial, a equipe mantém a investigação de possíveis fontes hemorrágicas, sem identificar, até aquele momento, evidências de sangramento significativo. A hipotensão persiste, acompanhada de bradicardia e extremidades aquecidas. A equipe considera que a perda do tônus simpático associada à lesão medular seja o principal mecanismo da instabilidade.`,
          `Qual estratégia terapêutica é mais adequada para esse cenário?`,
        ],
        opcoes: [
          `Administrar cristaloides em grandes volumes até a normalização da pressão arterial, uma vez que a hipotensão decorre principalmente da redução do volume intravascular efetivo.`,
          `Iniciar dobutamina como monoterapia, visando aumentar a frequência cardíaca e o débito cardíaco, independentemente da resistência vascular sistêmica.`,
          `Realizar reposição volêmica criteriosa, reavaliar a resposta hemodinâmica e iniciar noradrenalina se persistir a hipotensão, considerando sua ação vasopressora e o suporte à pressão de perfusão.`,
          `Iniciar nitroprussiato de sódio para reduzir a pós-carga e melhorar a perfusão dos tecidos, associando reposição volêmica caso a pressão arterial diminua ainda mais.`,
        ],
        correta: 'C',
        comentario: [`A hipotensão decorre principalmente da perda do tônus vascular, e não necessariamente de uma deficiência absoluta de volume. A reposição volêmica deve ser individualizada, evitando tanto a hipovolemia quanto a administração excessiva de fluidos. Se a hipotensão persistir, a noradrenalina é uma opção apropriada para recuperar o tônus vascular e sustentar a pressão de perfusão.`],
      },
    ],
  },

  // ───────────────────────── CASO 8 ─────────────────────────
  {
    id: 8,
    intro: [
      { tipo: 'p', texto: `Uma mulher de 26 anos, com diagnóstico de lúpus eritematoso sistêmico há quatro anos, procura o serviço de emergência com história de dispneia progressiva há cinco dias, associada a dor torácica ventilatório-dependente, fadiga intensa e desconforto ao permanecer em decúbito dorsal. Refere piora importante da tolerância aos esforços nas últimas 24 horas.` },
      { tipo: 'p', texto: `Faz uso irregular de hidroxicloroquina e prednisona. Ao exame físico, encontra-se consciente, porém ansiosa, com extremidades frias, sudorese e tempo de enchimento capilar de quatro segundos.` },
      { tipo: 'p', texto: `Sinais vitais na admissão:` },
      { tipo: 'dados', itens: [
        ['Pressão arterial', '86/58 mmHg'],
        ['Frequência cardíaca', '102 bpm'],
        ['Frequência respiratória', '28 irpm'],
        ['Saturação periférica de oxigênio', '94% em ar ambiente'],
        ['Temperatura', '37,2 °C'],
      ] },
      { tipo: 'p', texto: `À ausculta cardíaca, as bulhas apresentam-se hipofonéticas, presença de turgência jugular. A ausculta pulmonar não tem alterações.` },
      { tipo: 'p', texto: `É realizado um eletrocardiograma.` },
      { tipo: 'img', src: '/img/caso8-ecg.webp', w: 717, h: 467,
        alt: `Eletrocardiograma de 12 derivações com complexos QRS de baixa amplitude em todas as derivações.` },
      { tipo: 'p', texto: `Diante da instabilidade hemodinâmica, a equipe solicita ecocardiograma à beira do leito, o médico decide realizar um ultrassom point of care.` },
      { tipo: 'img', src: '/img/caso8-eco-subcostal.webp', w: 552, h: 390,
        alt: `Ecocardiograma em janela subcostal com derrame pericárdico volumoso envolvendo o coração; estão identificados o esterno, o derrame, o átrio direito, o ventrículo direito, o átrio esquerdo, o ventrículo esquerdo e a parede torácica.`,
        fonte: `Fonte: CardioNetworks/ECHOpedia (2010), sob licença Creative Commons Atribuição-CompartilhaIgual 3.0 (CC BY-SA 3.0).` },
    ],
    perguntas: [
      {
        enunciado: [`Considerando a história clínica, os achados do exame físico e os resultados da avaliação ecocardiográfica, a classificação mais adequada da condição hemodinâmica apresentada pela paciente é:`],
        opcoes: [
          `Choque cardiogênico, decorrente de comprometimento primário da contratilidade miocárdica associado à inflamação sistêmica do lúpus.`,
          `Choque distributivo, relacionado à vasodilatação periférica decorrente de atividade inflamatória sistêmica, com redução da resistência vascular sistêmica.`,
          `Choque obstrutivo, decorrente da restrição ao enchimento das câmaras cardíacas causada pelo aumento da pressão intrapericárdica.`,
          `Choque hipovolêmico, decorrente da redução do volume circulante efetivo associada à doença autoimune e à possível perda de líquidos para o terceiro espaço.`,
        ],
        correta: 'C',
        comentario: [
          `A paciente apresenta hipotensão, taquicardia, sinais de hipoperfusão periférica e pressão venosa jugular elevada. O ecocardiograma demonstra derrame pericárdico volumoso com colapso diastólico do ventrículo direito, indicando comprometimento do enchimento cardíaco pelo aumento da pressão intrapericárdica.`,
          `Esse mecanismo caracteriza o choque obstrutivo: o retorno venoso pode ocorrer, mas a compressão das câmaras cardíacas limita o enchimento ventricular, reduzindo o volume sistólico e o débito cardíaco.`,
        ],
      },
      {
        enunciado: [`A paciente apresenta pressão arterial reduzida, taquicardia e elevação da pressão venosa jugular. Considerando a fisiopatologia do tamponamento cardíaco, qual alternativa explica melhor a associação desses achados?`],
        opcoes: [
          `A elevação da pressão intrapericárdica aumenta a pressão de enchimento ventricular, favorecendo a elevação do volume sistólico, mas desencadeia hipotensão por redução reflexa da frequência cardíaca.`,
          `A restrição ao enchimento ventricular reduz o volume sistólico e o débito cardíaco, enquanto a dificuldade de drenagem venosa contribui para a elevação da pressão venosa jugular.`,
          `A redução da resistência vascular sistêmica provoca represamento sanguíneo no território venoso, enquanto o aumento compensatório da contratilidade mantém o débito cardíaco.`,
          `A perda de volume intravascular reduz a pré-carga e a pressão venosa central, desencadeando taquicardia compensatória e congestão venosa periférica.`,
        ],
        correta: 'B',
        comentario: [`No tamponamento, a pressão intrapericárdica elevada limita a expansão das câmaras cardíacas durante a diástole. Consequentemente, há redução do enchimento ventricular, do volume sistólico e do débito cardíaco. A elevação das pressões venosas decorre da dificuldade de retorno e de acomodação do sangue nas câmaras cardíacas comprimidas. A taquicardia é uma resposta compensatória à redução do volume sistólico, mas pode não ser suficiente para manter o débito cardíaco e a perfusão tecidual.`],
      },
      {
        enunciado: [`A paciente mantém hipotensão e sinais de hipoperfusão. O ecocardiograma confirma tamponamento cardíaco com repercussão hemodinâmica. Considerando o mecanismo responsável pela instabilidade, qual estratégia terapêutica deve ser priorizada?`],
        opcoes: [
          `Iniciar dobutamina para aumentar a contratilidade miocárdica e aguardar a resposta hemodinâmica antes de realizar uma intervenção sobre o derrame pericárdico.`,
          `Administrar reposição volêmica agressiva até a normalização da pressão arterial, postergando procedimentos invasivos até que a paciente apresente estabilidade clínica.`,
          `Iniciar noradrenalina como tratamento definitivo da obstrução ao enchimento cardíaco, reservando a drenagem pericárdica para casos de persistência da hipotensão após a infusão.`,
          `Realizar drenagem pericárdica urgente, preferencialmente por pericardiocentese guiada por imagem quando apropriado, utilizando medidas de suporte hemodinâmico como ponte, se necessárias.`,
        ],
        correta: 'D',
        comentario: [
          `O tamponamento cardíaco com instabilidade hemodinâmica é uma emergência que exige a remoção da causa mecânica da obstrução. A drenagem pericárdica permite reduzir a pressão intrapericárdica e recuperar o enchimento ventricular.`,
          `A reposição volêmica cautelosa pode ser considerada temporariamente em pacientes selecionados, enquanto a noradrenalina pode auxiliar na manutenção da pressão de perfusão quando necessária. Entretanto, nenhuma dessas medidas substitui a drenagem. A dobutamina também não corrige a restrição mecânica ao enchimento cardíaco.`,
        ],
      },
      {
        enunciado: [`Durante uma discussão clínica, um estudante afirma que a presença de hipotensão, taquicardia e extremidades frias permite classificar o quadro como choque cardiogênico. Considerando os mecanismos fisiopatológicos envolvidos, assinale a alternativa que apresenta a melhor interpretação.`],
        opcoes: [
          `A classificação como choque cardiogênico é adequada, pois qualquer redução do débito cardíaco decorrente de comprometimento do funcionamento do coração caracteriza falência primária da bomba cardíaca.`,
          `A classificação como choque hipovolêmico é mais provável, pois a redução do volume sistólico é o principal determinante da hipotensão, independentemente da pressão venosa jugular.`,
          `A classificação como choque obstrutivo é mais apropriada, pois a redução do débito cardíaco decorre de uma barreira mecânica ao enchimento ventricular, e não necessariamente de falência contrátil primária.`,
          `A classificação como choque distributivo é mais apropriada, pois a inflamação autoimune pode reduzir a resistência vascular sistêmica, mesmo na presença de elevação da pressão venosa jugular e derrame pericárdico com repercussão hemodinâmica.`,
        ],
        correta: 'C',
        comentario: [`A redução do débito cardíaco ocorre em diferentes tipos de choque, portanto não é suficiente, isoladamente, para caracterizar choque cardiogênico. No choque obstrutivo, o comprometimento hemodinâmico decorre de uma barreira mecânica ao fluxo sanguíneo ou ao enchimento cardíaco. No caso apresentado, a compressão das câmaras cardíacas pelo derrame pericárdico explica a instabilidade.`],
      },
    ],
  },

  // ───────────────────────── CASO 9 ─────────────────────────
  {
    id: 9,
    intro: [
      { tipo: 'p', texto: `Um homem de 62 anos, com histórico de hipertensão arterial sistêmica e diabetes mellitus tipo 2, encontra-se internado em uma unidade de terapia intensiva (UTI) há cinco dias devido a pneumonia bacteriana e choque séptico. Durante a internação, evoluiu com lesão renal aguda, oligúria persistente e necessidade de terapia renal substitutiva.` },
      { tipo: 'p', texto: `Nas últimas 12 horas, o paciente apresentou melhora clínica e hemodinâmica, com redução progressiva da dose de noradrenalina. Naquele momento, encontrava-se sob monitorização contínua, com os seguintes parâmetros:` },
      { tipo: 'dados', itens: [
        ['Pressão arterial', '112/68 mmHg'],
        ['Frequência cardíaca', '96 bpm'],
        ['Frequência respiratória', '20 irpm'],
        ['SpO₂', '96%, em oxigenoterapia'],
        ['Noradrenalina', '0,05 µg/kg/min'],
      ] },
      { tipo: 'p', texto: `Como o paciente havia retirado acidentalmente o cateter de hemodiálise utilizado anteriormente, a equipe realizou uma nova punção venosa central para obtenção de acesso para terapia renal substitutiva.` },
      { tipo: 'p', texto: `Poucos minutos após o procedimento, o paciente apresentou dispneia, agitação psicomotora e piora progressiva da perfusão periférica. A monitorização revelou:` },
      { tipo: 'dados', itens: [
        ['Pressão arterial', '76/42 mmHg'],
        ['Frequência cardíaca', '138 bpm'],
        ['Frequência respiratória', '34 irpm'],
        ['SpO₂', '86%, apesar do aumento da oferta de oxigênio'],
      ] },
      { tipo: 'ul', itens: [`Extremidades frias, tempo de enchimento capilar de 5 segundos e redução do nível de consciência.`] },
      { tipo: 'p', texto: `Ao exame físico, observou-se redução importante do murmúrio vesicular à esquerda, com assimetria da expansibilidade torácica. A seguir a radiografia de tórax:` },
      { tipo: 'img', src: '/img/caso9-rx-torax.webp', w: 1166, h: 1071,
        alt: `Radiografia de tórax em incidência anteroposterior: hemitórax esquerdo hipertransparente, sem trama vascular periférica, com a borda do pulmão colabado indicada por setas, compatível com pneumotórax à esquerda; cateter venoso central e eletrodos de monitorização visíveis.` },
    ],
    perguntas: [
      {
        enunciado: [`Considerando a evolução clínica, o momento de início da deterioração e os achados do exame físico, qual é a hipótese diagnóstica que melhor explica o quadro atual?`],
        opcoes: [
          `Progressão do choque séptico, decorrente do agravamento da infecção pulmonar e da vasoplegia, com necessidade de aumentar a dose de noradrenalina.`,
          `Choque cardiogênico, decorrente de disfunção miocárdica aguda associada à sepse, com redução da contratilidade ventricular e do débito cardíaco.`,
          `Choque obstrutivo por provável pneumotórax hipertensivo relacionado à punção venosa central, com comprometimento do retorno venoso e do débito cardíaco.`,
          `Choque hipovolêmico, decorrente de perda sanguínea durante a punção, com redução do volume circulante efetivo e do retorno venoso.`,
        ],
        correta: 'C',
        comentario: [`A deterioração hemodinâmica súbita após a punção, associada à hipoxemia, à assimetria torácica e à redução unilateral do murmúrio vesicular, sugere pneumotórax hipertensivo. O aumento da pressão intrapleural compromete o retorno venoso, reduz o enchimento ventricular e diminui o débito cardíaco, provocando choque obstrutivo. Embora o paciente apresente choque séptico prévio, a nova instabilidade exige a identificação de uma causa adicional, potencialmente reversível.`],
      },
    ],
  },
];
