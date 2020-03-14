export interface Margins {
  large: string;
  small: string;
}

const marginLarge = 20;
const marginSmall = marginLarge / 2;

export const margins: Margins = {
  large: `${marginLarge}px`,
  small: `${marginSmall}px`,
};
