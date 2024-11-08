import { type ChartConfig } from '@/components/ui/chart';
import { AlertType } from '@/enums/alert.enum';

export const chartData = [
  {
    year: 2018,
    [AlertType.HEAVY_RAIN]: 45,
    [AlertType.HAIL]: 4,
    [AlertType.TSUNAMI]: 1,
    [AlertType.EARTHQUAKE]: 1,
    [AlertType.FLOOD]: 8,
    [AlertType.CYCLONE]: 2,
  },
  {
    year: 2019,
    [AlertType.HEAVY_RAIN]: 42,
    [AlertType.HAIL]: 8,
    [AlertType.TSUNAMI]: 0,
    [AlertType.EARTHQUAKE]: 0,
    [AlertType.FLOOD]: 3,
    [AlertType.CYCLONE]: 1,
  },
  {
    year: 2020,
    [AlertType.HEAVY_RAIN]: 38,
    [AlertType.HAIL]: 2,
    [AlertType.TSUNAMI]: 1,
    [AlertType.EARTHQUAKE]: 0,
    [AlertType.FLOOD]: 7,
    [AlertType.CYCLONE]: 3,
  },
  {
    year: 2021,
    [AlertType.HEAVY_RAIN]: 23,
    [AlertType.HAIL]: 1,
    [AlertType.TSUNAMI]: 0,
    [AlertType.EARTHQUAKE]: 0,
    [AlertType.FLOOD]: 11,
    [AlertType.CYCLONE]: 4,
  },
  {
    year: 2022,
    [AlertType.HEAVY_RAIN]: 30,
    [AlertType.HAIL]: 2,
    [AlertType.TSUNAMI]: 1,
    [AlertType.EARTHQUAKE]: 0,
    [AlertType.FLOOD]: 15,
    [AlertType.CYCLONE]: 2,
  },
  {
    year: 2023,
    [AlertType.HEAVY_RAIN]: 35,
    [AlertType.HAIL]: 3,
    [AlertType.TSUNAMI]: 0,
    [AlertType.EARTHQUAKE]: 1,
    [AlertType.FLOOD]: 9,
    [AlertType.CYCLONE]: 1,
  },
  {
    year: 2024,
    [AlertType.HEAVY_RAIN]: 42,
    [AlertType.HAIL]: 5,
    [AlertType.TSUNAMI]: 0,
    [AlertType.EARTHQUAKE]: 0,
    [AlertType.FLOOD]: 13,
    [AlertType.CYCLONE]: 3,
  },
];

export const chartConfig = {
  [AlertType.HEAVY_RAIN]: {
    label: AlertType.HEAVY_RAIN,
    color: '#4A90E2', // Bleu doux
  },
  [AlertType.HAIL]: {
    label: AlertType.HAIL,
    color: '#B0BEC5', // Gris clair
  },
  [AlertType.TSUNAMI]: {
    label: AlertType.TSUNAMI,
    color: '#007BFF', // Bleu moyen
  },
  [AlertType.EARTHQUAKE]: {
    label: AlertType.EARTHQUAKE,
    color: '#8D6E63', // Marron doux
  },
  [AlertType.FLOOD]: {
    label: AlertType.FLOOD,
    color: '#00ACC1', // Cyan doux
  },
  [AlertType.CYCLONE]: {
    label: AlertType.CYCLONE,
    color: '#FF7043', // Orange doux
  },
} satisfies ChartConfig;

export const emergencyListBefore = [
  "Préparer une trousse d'urgence : eau, vivres, lampe de poche, radio, trousse de premiers secours.",
  'Vérifier les drains et les canalisations pour éviter les inondations.',
  'Sécuriser les objets extérieurs qui pourraient être emportés par les vents.',
  "Préparer un plan d'évacuation en cas de montée rapide des eaux.",
  'Vérifier les alertes météo locales et suivre les consignes des autorités.',
  "Écouter les alertes locales sur la radio ou l'application d'urgence.",
  'Éviter les déplacements dans les zones inondées, ne pas traverser les routes inondées.',
  "Rester à l'abri dans une zone sécurisée.",
  "Éviter de s'aventurer près des rivières ou des ruisseaux susceptibles de déborder.",
  'Écouter les consignes de sécurité sur les conditions de circulation et les zones de danger.',
];

export const emergencyListDuring = [
  'Vérifier les alertes météo locales et suivre les consignes des autorités.',
  "Écouter les alertes locales sur la radio ou l'application d'urgence.",
  'Éviter les déplacements dans les zones inondées, ne pas traverser les routes inondées.',
  "Rester à l'abri dans une zone sécurisée.",
  "Éviter de s'aventurer près des rivières ou des ruisseaux susceptibles de déborder.",
  'Après la forte pluie :',
  "Vérifier l'intégrité des bâtiments : rechercher des signes de fuites, d'infiltrations d'eau ou de dommages structurels.",
];

export const emergencyListAfter = [
  "Question 1 : Hey ! J'espère que tu vas bien. On voulait prendre de tes nouvelles après ce qui s'est passé. Comment tu te sens aujourd'hui ?",
  "Question 2 : Est-ce qu'il y a des moments où tu repenses à ce qui s'est passé ? Tu veux en parler ?",
  'Question 3 : Sur une échelle de 1 à 5 (1 = pas bien du tout, 5 = très bien), comment tu te sens quand tu y repenses ?',
];
