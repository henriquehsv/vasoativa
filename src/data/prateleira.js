// Prateleira de fármacos vasoativos: área clicável de cada caixa e PDF da prescrição.
//
// Como editar:
//  - `area` = [left, top, width, height], em % da imagem public/prateleira/prateleira.webp (1536 × 1024).
//  - `pdf` = arquivo em public/prateleira/pdfs/. Use null enquanto a prescrição não existir:
//    o clique mostra o aviso "prescrição em preparação".

export const prateleira = [
  { id: 'noradrenalina', rotulo: 'Noradrenalina (Norepinefrina)', pdf: '/prateleira/pdfs/noradrenalina.pdf', area: [10.74, 29.30, 24.74, 18.36] },
  { id: 'vasopressina', rotulo: 'Vasopressina', pdf: '/prateleira/pdfs/vasopressina.pdf', area: [39.52, 29.30, 23.63, 18.36] },
  { id: 'adrenalina', rotulo: 'Adrenalina (Epinefrina)', pdf: null, area: [67.58, 29.30, 25.39, 18.36] },
  { id: 'dobutamina', rotulo: 'Dobutamina', pdf: '/prateleira/pdfs/dobutamina.pdf', area: [10.09, 62.50, 25.39, 21.97] },
  { id: 'nitroprussiato-de-sodio', rotulo: 'Nitroprussiato de sódio', pdf: '/prateleira/pdfs/nitroprussiato-de-sodio.pdf', area: [39.39, 62.50, 24.09, 21.97] },
  { id: 'nitroglicerina', rotulo: 'Nitroglicerina', pdf: '/prateleira/pdfs/nitroglicerina.pdf', area: [67.58, 62.50, 26.04, 21.97] },
];
