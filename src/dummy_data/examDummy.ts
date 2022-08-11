import { Prisma } from '@prisma/client'

export default [
  {
    name: 'T4',
    synonym: 'Tiroxina, tetraiodotironina, T4 total',
    material: 'Soro. Volume mínimo: 0,5 mL.',
    conservation: 'Se o exame não for realizado no mesmo dia, congelar a amostra.',
    preparation: 'Jejum de 4 horas. Anotar medicamentos nos últimos 30 dias.',
    method: 'Radioimunoensaio.',
    interferer:
      'Uso de hormônios tiroidianos e qualquer condição que altere os níveis das proteínas transportadoras (em especial TBG) como gravidez ou uso de anticoncepcionais. Pode também estar alterado pelo uso de drogas que interferem no seu metabolismo periférico como betabloqueadores e amiodarona.',
    normalValues:
      'Primeira semana de vida: valor médio de 15 e mínimo de 8 g/dL. (193 e 103 nmol/L).\nAté 1 mês: 8,2 a 16,6 g/dL. (105 a 213 nmol/L)\n1 a 12 meses: 7,2 a 15,6 g/dL. (93 a 200 nmol/L)\n1 a 5 anos: 7,3 a 15,0 g/dL. (94 ó 193 nmol/L)\n5 a 12 anos: 6,4 a 13,3 m g/dL. ( 82 a 171 nmol/L)\nAcima de 12 anos: 4,5 a 12,0 m g/dL. ( 58 a 154 nmol/L)',
    measureUnit: 'g/dL',
  },
  {
    name: 'Calcitocina',
    synonym: 'Tirocalcitonina',
    material: 'Soro ou plasma EDTA. Volume mínimo: 2,0 mL.',
    conservation: 'Se o exame não for realizado no mesmo dia, congelar a amostra.',
    preparation: 'Jejum de 8 horas.',
    method: 'Radioimunoensaio, com extração prévia do soro.',
    normalValues: 'até 18 picomoles/L.',
    interpretation:
      'A calcitonina (hCT) é um hormônio secretado pelas células C da tiróide e relaciona-se ao metabolismo do cálcio. Pacientes portadores de carcinoma medular de tiróide apresentam níveis elevados de hCT, quer com o tumor original, quer com metástases, Alguns tumores de pâncreas e pulmão também podem produzir hCT. O carcinoma medular pode fazer parte da síndrome de poliendocrinopatia múltipla (MEA) e sendo assim pode ser familiar. Testes de estímulo (cálcio, pentagastrina) têm sido usados para detectar de maneira precoce os indivíduos portadores do tumor.',
    measureUnit: 'picomoles/L',
  },
  {
    name: 'Tiroglobulina',
    material: 'Soro. Volume mínimo: 1,0mL',
    conservation: 'Se o exame não for realizado no mesmo dia, congelar a amostra.',
    preparation: 'Jejum de 4 horas.',
    method: 'Radioimunoensaio.',
    normalValues: '2 a 30 ng/dL',
    interpretation:
      'A tiroglobulina é uma glicoproteína produzida pelas células acinares tiroidianas sendo o principal componente do colóide dos folículos tiroidianos. Os seus níveis séricos variam com o estado funcional da tiróide, estando elevados nas tireoidites, carcinomas de tiróide, hipertiroidismo ou mesmo ap6s palpação vigorosa dessa glândula. Sua principal utilidade é no seguimento de carcinomas operados da tiróide, especialmente dos tipos papilífero, folicular e misto papilífero-folicutar.',
    measureUnit: 'ng/dL',
  },
  {
    name: 'Cortisol',
    synonym: '17OH no sangue, composto F, hidrocortisona.',
    material: 'Soro, plasma EDTA ou plasma heparinizado. Volume mínimo: 0,5 mL.',
    conservation: 'Se o exame não for realizado no mesmo dia, congelar a amostra.',
    preparation: 'Recomenda-se jejum de 8 horas. Colher de preferência entre 7 e 9 horas da manhã.',
    method:
      'Radioimunoensaio, após inativação térmica da globulina transportadora de cortisol (CBG).',
    interferer: 'Lipemia.',
    normalValues:
      'Entre 7 e 9 h: 5,4 a 25 pg/dL. (149 a 690 nmol/L). Entre 16 e 17 h: 2,4 a 13,6 pg/dL. (66 a 375 nmol/L).',
    interpretation:
      'O cortisol é o principal glicocorticóide produzido pelas adrenais no homem. Obedece a um ritmo circadiano, sendo mais elevado pela manhã e mais baixo à noite. Sua determinação está indicada no diagnóstico de hiperfunção da adrenal (síndrome de Cushing), onde o teste de depressão com dexametasona é bastante sensível e na hipofunção adrenal primária (Addison) ou secundária, onde é útil o teste de estímulo com ACTN.',
    measureUnit: 'pg/dL',
  },
  {
    name: 'Aldosterona',
    synonym: 'Dosagem na urina, Mineratocorticóide.',
    material: 'Urina de 24 horas – Alíquota de 10 mL.',
    conservation:
      'Colher urina de 24 horas; manter refrigerada durante a colheita; se o exame não for realizado no mesmo dia, congelar a amostra.',
    preparation: 'Anotar uso de hipotensores, diuréticos e/ou dieta com conteúdo anormal de sódio.',
    method: 'Radioimunoensaio com extração prévia.',
    normalValues: '4 a 20 pg/24h, quando em dieta normossódica (11 a 55 nmol/d).',
    interpretation:
      'A aldosterona é um hormônio esteróide produzido pelas células da zona glomerulosa do córtex adrenal, sendo o principal mineralocorticóide. A principal indicação clínica da sua determinação é no diagnóstico do hiperaldosteronismo primário (Síndrome de Conn, adenoma de supra-renal) ou secundário. Altera-se de acordo com o conteúdo de sal da dieta, postura e uso de drogas, principalmente diuréticos.',
    measureUnit: 'pg/24h',
  },
] as Prisma.ExamCreateManyInput[]
