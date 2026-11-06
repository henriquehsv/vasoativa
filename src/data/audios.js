// Áudios dos módulos, servidos pelo próprio site (pasta public/audio).
// Uma cópia de cada arquivo também está no Google Drive do projeto.
//
// Como trocar um áudio:
//  - Comprima para AAC mono 64 kbps (.m4a) e salve em public/audio/.
//  - Atualize o caminho e a duração abaixo.
//  - Módulo sem entrada não mostra o player.

export const audios = {
  1: { arquivo: '/audio/modulo1-o-conceito-de-choque.m4a', duracao: '24 min' },
  2: { arquivo: '/audio/modulo2-como-reconhecer-o-choque.m4a', duracao: '17 min' },
  3: { arquivo: '/audio/modulo3-fisiologia-cardiovascular-aplicada-ao-choque.m4a', duracao: '21 min' },
  4: { arquivo: '/audio/modulo4-os-tipos-de-choque.m4a', duracao: '28 min' },
  5: { arquivo: '/audio/modulo5-o-que-sao-drogas-vasoativas.m4a', duracao: '18 min' },
  6: { arquivo: '/audio/modulo6-vasopressores.m4a', duracao: '19 min' },
  8: { arquivo: '/audio/modulo8-inotropicos.m4a', duracao: '20 min' },
};
