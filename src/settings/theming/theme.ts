import { margins, ThemeMargins } from './themeMargins';
import { colors, ThemeColors } from './themeColors';
import { card, ThemeCard } from './themeCard';
import { application, ThemeApplication } from './themeApplication';
import { typography, ThemeTypography } from './themeTypography';

export interface Theme {
  card: ThemeCard;
  margins: ThemeMargins;
  colors: ThemeColors;
  application: ThemeApplication;
  typography: ThemeTypography;
}

export const theme: Theme = {
  card,
  margins,
  colors,
  application,
  typography,
};
