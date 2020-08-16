import { SUN, CLOUDY, THUNDERS, RAIN, SNOW } from "../constants/icons";
import {
  mdiWhiteBalanceSunny,
  mdiWeatherCloudy,
  mdiWeatherPouring,
  mdiWeatherLightning,
  mdiWeatherSnowy,
} from "@mdi/js";

const iconsConstants = {
  'Clear': SUN,
  'Clouds': CLOUDY,
  'Thunderstorm': THUNDERS,
  'Rain': RAIN,
  'Snow': SNOW
};
const iconRelation = {
  SUN: {
    iconPath: mdiWhiteBalanceSunny,
    color: "#f58747",
  },
  CLOUDY: {
    iconPath: mdiWeatherCloudy,
    color: "#00d8ff",
  },
  THUNDERS: {
    iconPath: mdiWeatherPouring,
    color: "#999",
  },
  RAIN: {
    iconPath: mdiWeatherLightning,
    color: "#555",
  },
  SNOW: {
    iconPath: mdiWeatherSnowy,
    color: "#aaa",
  },
};

export const getIcon = (icon) => {
  const iconConstant = iconsConstants[icon];
  const iconTransformed = iconRelation[iconConstant];
  return iconTransformed;
};
