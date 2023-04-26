import type { AirQualityMapped, ConditionMapped } from '@/types/weather.type';

export const weatherConditions: ConditionMapped[] = [
  {
    code: 1000,
    name: 'Sunny',
    imgName: 'Sunny',
  },
  {
    code: 1003,
    name: 'Partly Cloudy',
    imgName: 'PartlyCloudy',
  },
  {
    code: 1006,
    name: 'Cloudy',
    imgName: 'Cloudy',
  },
  {
    code: 1009,
    name: 'Overcast',
    imgName: 'Cloudy',
  },
  {
    code: 1030,
    name: 'Mist',
    imgName: 'Cloudy',
  },
  {
    code: 1063,
    name: 'Patchy Rain',
    imgName: 'PatchyRain',
  },
  {
    code: 1066,
    name: 'Patchy Snow',
    imgName: 'PatchySnow',
  },
  {
    code: 1069,
    name: 'Patchy Sleet',
    imgName: 'PatchySnow',
  },
  {
    code: 1072,
    name: 'Patchy Freezing Drizzle',
    imgName: 'PatchySnow',
  },
  {
    code: 1087,
    name: 'Thundery Outbreaks',
    imgName: 'Thunder',
  },
  {
    code: 1114,
    name: 'Blowing Snow',
    imgName: 'Blizzard',
  },
  {
    code: 1117,
    name: 'Blizzard',
    imgName: 'Blizzard',
  },
  {
    code: 1135,
    name: 'Fog',
    imgName: 'Cloudy',
  },
  {
    code: 1147,
    name: 'Freezing Fog',
    imgName: 'PatchySnow',
  },
  {
    code: 1150,
    name: 'Patchy Light Drizzle',
    imgName: 'PatchyRain',
  },
  {
    code: 1153,
    name: 'Light Drizzle',
    imgName: 'PatchyRain',
  },
  {
    code: 1168,
    name: 'Freezing Drizzle',
    imgName: 'PatchySnow',
  },
  {
    code: 1171,
    name: 'Heavy Freezing Drizzle',
    imgName: 'HeavySnow',
  },
  {
    code: 1180,
    name: 'Patchy Light Rain',
    imgName: 'PatchyRain',
  },
  {
    code: 1183,
    name: 'Light Rain',
    imgName: 'LightRain',
  },
  {
    code: 1186,
    name: 'Moderate Rain at times',
    imgName: 'ModerateRain',
  },
  {
    code: 1189,
    name: 'Moderate Rain',
    imgName: 'ModerateRain',
  },
  {
    code: 1192,
    name: 'Heavy Rain at times',
    imgName: 'HeavyRain',
  },
  {
    code: 1195,
    name: 'Heavy Rain',
    imgName: 'HeavyRain',
  },
  {
    code: 1198,
    name: 'Light Freezing Rain',
    imgName: 'LightRain',
  },
  {
    code: 1201,
    name: 'Moderate or Heavy Freezing Rain',
    imgName: 'ModerateRain',
  },
  {
    code: 1204,
    name: 'Light Sleet',
    imgName: 'LightSnow',
  },
  {
    code: 1207,
    name: 'Moderate or Heavy Sleet',
    imgName: 'HeavySnow',
  },
  {
    code: 1210,
    name: 'Patchy Light Snow',
    imgName: 'PatchySnow',
  },
  {
    code: 1213,
    name: 'Light Snow',
    imgName: 'LightSnow',
  },
  {
    code: 1216,
    name: 'Patchy Moderate Snow',
    imgName: 'PatchySnow',
  },
  {
    code: 1219,
    name: 'Moderate Snow',
    imgName: 'HeavySnow',
  },
  {
    code: 1222,
    name: 'Patchy Heavy snow',
    imgName: 'HeavySnow',
  },
  {
    code: 1225,
    name: 'Heavy Snow',
    imgName: 'HeavySnow',
  },
  {
    code: 1237,
    name: 'Ice Pellets',
    imgName: 'LightSnow',
  },
  {
    code: 1240,
    name: 'Light Rain Shower',
    imgName: 'LightRain',
  },
  {
    code: 1243,
    name: 'Moderate or Heavy Rain Shower',
    imgName: 'HeavyRain',
  },
  {
    code: 1246,
    name: 'Torrential Rain Shower',
    imgName: 'HeavyRain',
  },
  {
    code: 1249,
    name: 'Light Snow Shower',
    imgName: 'LightSnow',
  },
  {
    code: 1252,
    name: 'Moderate or Heavy Snow Shower',
    imgName: 'HeavySnow',
  },
  {
    code: 1255,
    name: 'Light Snow Showers',
    imgName: 'LightSnow',
  },
  {
    code: 1258,
    name: 'Moderate or Heavy Snow Showers',
    imgName: 'HeavySnow',
  },
  {
    code: 1261,
    name: 'Light Showers of Ice Pellets',
    imgName: 'LightSnow',
  },
  {
    code: 1264,
    name: 'Moderate or Heavy Showers of Ice Pellets',
    imgName: 'HeavySnow',
  },
  {
    code: 1273,
    name: 'Patchy Light Rain with Thunder',
    imgName: 'Thunder',
  },
  {
    code: 1276,
    name: 'Moderate or Heavy Rain with Thunder',
    imgName: 'Thunder',
  },
  {
    code: 1279,
    name: 'Patchy Light Snow with Thunder',
    imgName: 'Thunder',
  },
  {
    code: 1282,
    name: 'Moderate or Heavy Snow with Thunder',
    imgName: 'Thunder',
  },
];

export const airQuality: AirQualityMapped[] = [
  { index: 1, name: 'good' },
  { index: 2, name: 'moderate' },
  { index: 3, name: 'unhealthyForSensitive' },
  { index: 4, name: 'unhealthy' },
  { index: 5, name: 'veryUnhealthy' },
  { index: 6, name: 'hazardous' },
];
