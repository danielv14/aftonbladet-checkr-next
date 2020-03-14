export interface ThemeMargins {
  large: string;
  small: string;
}

const marginLarge = 20;
const marginSmall = marginLarge / 2;

export const margins: ThemeMargins = {
  large: `${marginLarge}px`,
  small: `${marginSmall}px`,
};
