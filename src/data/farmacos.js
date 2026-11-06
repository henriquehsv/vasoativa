// Dados e cálculo da calculadora de doses (/calculadora).
//
// Como editar:
//  - `nome` aparece exatamente assim na coluna "Medicação".
//  - `conc` é a concentração por mL da solução final (mcg/mL ou UI/mL).
//  - `usaPeso` = true divide também pelo peso (dose por kg).
//  - Noradrenalina: concentração em norepinefrina base (4 mg/4 mL por ampola).

export const farmacos = [
  { nome: "Noradrenalina 4 amp (4mg/4ml) + 234 ml Soro Glicosado 5% ou Soro Fisiológico 0,9%", conc: 64, unidade: "mcg/kg/min", usaPeso: true },
  { nome: "Noradrenalina 8 amp (4mg/4ml) + 218 ml Soro Glicosado 5%", conc: 128, unidade: "mcg/kg/min", usaPeso: true },
  { nome: "Vasopressina 1 amp (20 UI/1ml) + 99 ml Soro Fisiológico 0,9%", conc: 0.2, unidade: "UI/min", usaPeso: false },
  { nome: "Vasopressina 2 amp (20 UI/1ml) + 98 ml Soro Fisiológico 0,9%", conc: 0.4, unidade: "UI/min", usaPeso: false },
  { nome: "Dobutamina 4 amp (250mg/20ml) + 170 ml Soro Glicosado 5% ou Soro Fisiológico 0,9%", conc: 4000, unidade: "mcg/kg/min", usaPeso: true },
  { nome: "Nitroprussiato de Sódio 1 amp (50mg/2ml) + 248 ml Soro Glicosado 5%", conc: 200, unidade: "mcg/kg/min", usaPeso: true },
  { nome: "Nitroglicerina 1 amp (50mg/10ml) + 240 ml Soro Glicosado 5%", conc: 200, unidade: "mcg/min", usaPeso: false },
];

// Aceita vírgula ou ponto. Retorna NaN se vazio ou inválido.
export function lerNumero(txt) {
  const s = String(txt ?? "").trim().replace(",", ".");
  if (!/^(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
  return Number(s);
}

// Texto da célula de resultado: "" | "Informe o peso" | "A dose é 0,15 mcg/kg/min"
export function textoDose(farmaco, vazaoTxt, pesoTxt) {
  const vazao = lerNumero(vazaoTxt);
  if (!(vazao > 0)) return "";
  let dose = (vazao * farmaco.conc) / 60;
  if (farmaco.usaPeso) {
    const peso = lerNumero(pesoTxt);
    if (!(peso > 0)) return "Informe o peso";
    dose /= peso;
  }
  return `A dose é ${dose.toFixed(2).replace(".", ",")} ${farmaco.unidade}`;
}
