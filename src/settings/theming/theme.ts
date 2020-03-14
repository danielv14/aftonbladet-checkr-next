import { margins, Margins } from './margins';
import { colors, Colors } from './colors';
import { card, Card } from './card';
import { application, Application } from './application';
import { typography, Typography } from './typography';

export interface Theme {
  card: Card;
  margins: Margins;
  colors: Colors;
  application: Application;
  typography: Typography;
}

export const theme: Theme = {
  card,
  margins,
  colors,
  application,
  typography,
};
