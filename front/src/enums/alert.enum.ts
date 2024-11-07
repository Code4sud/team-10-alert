export enum AlertType {
  HEAVY_RAIN = 'Forte pluie',
  HAIL = 'Grele',
  TSUNAMI = 'Tsunami',
  EARTHQUAKE = 'Tremblement de terre',
  FLOOD = 'Inondation',
  CYCLONE = 'Cyclone',
}

export enum AlertPower {
  GREEN = 'Vert',
  YELLOW = 'Jaune',
  ORANGE = 'Orange',
  RED = 'Rouge',
  ALERTE_DE_NIVEAU_1 = 'Alerte de niveau 1',
  ALERTE_DE_NIVEAU_2 = 'Alerte de niveau 2',
  ALERTE_DE_NIVEAU_3 = 'Alerte de niveau 3',
  LESS_THAN_3_0 = 'Inférieur à 3.0',
  BETWEEN_3_0_AND_3_9 = '3.0 à 3.9',
  BETWEEN_4_0_AND_4_9 = '4.0 à 4.9',
  BETWEEN_5_0_AND_5_9 = '5.0 à 5.9',
  BETWEEN_6_0_AND_6_9 = '6.0 à 6.9',
  MORE_THAN_7_0 = '7.0 et plus',
  DEPRESSION_TROPICALE = 'Dépression tropicale',
  TEMPETE_TROPICALE = 'Tempête tropicale',
  CYCLONE_OU_OURAGAN_DE_CATEGORIE_1_A_5 = 'Cyclone ou ouragan de catégorie 1 à 5',
}

export const alertPowerMapping = {
  [AlertType.HEAVY_RAIN]: [
    AlertPower.GREEN,
    AlertPower.YELLOW,
    AlertPower.ORANGE,
    AlertPower.RED,
  ],
  [AlertType.HAIL   ]: [
    AlertPower.GREEN,
    AlertPower.YELLOW,
    AlertPower.ORANGE,
    AlertPower.RED,
  ],
  [AlertType.TSUNAMI]: [
    AlertPower.ALERTE_DE_NIVEAU_1,
    AlertPower.ALERTE_DE_NIVEAU_2,
    AlertPower.ALERTE_DE_NIVEAU_3,
  ],
  [AlertType.EARTHQUAKE]: [
    AlertPower.LESS_THAN_3_0,
    AlertPower.BETWEEN_3_0_AND_3_9,
    AlertPower.BETWEEN_4_0_AND_4_9,
    AlertPower.BETWEEN_5_0_AND_5_9,
    AlertPower.BETWEEN_6_0_AND_6_9,
    AlertPower.MORE_THAN_7_0,
  ],
  [AlertType.FLOOD]: [
    AlertPower.GREEN,
    AlertPower.YELLOW,
    AlertPower.ORANGE,
    AlertPower.RED,
  ],
  [AlertType.CYCLONE]: [
    AlertPower.DEPRESSION_TROPICALE,
    AlertPower.TEMPETE_TROPICALE,
    AlertPower.CYCLONE_OU_OURAGAN_DE_CATEGORIE_1_A_5,
  ],
};

export const alertes = [
  { id: AlertType.HEAVY_RAIN, label: 'Forte pluie' },
  { id: AlertType.HAIL, label: 'Grêle' },
  { id: AlertType.TSUNAMI, label: 'Tsunami' },
  { id: AlertType.EARTHQUAKE, label: 'Tremblement de terre' },
  { id: AlertType.FLOOD, label: 'Inondation' },
  { id: AlertType.CYCLONE, label: 'Cyclone' },
];
