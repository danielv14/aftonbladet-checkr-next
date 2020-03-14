import * as Nivo from '@nivo/bar';
import * as React from 'react';
import { Checker, CheckerFields, CheckerByWeekDay, CheckerByYear } from '../../interfaces/Checker';
import { commonPropertiesBarComponent } from './commonProperties';
import { useTheme } from '../../hooks/useTheme';

type BarLayout = 'vertical' | 'horizontal';

export interface ResponsiveBarProps {
  checkers: Checker[] | CheckerByWeekDay[] | CheckerByYear[];
  layout?: BarLayout;
  keys: CheckerFields[];
  indexBy: CheckerFields;
}

export const ResponsiveBar: React.FC<ResponsiveBarProps> = ({ checkers, layout = 'vertical', keys, indexBy }) => {
  const { colors } = useTheme();
  const properties = {
    ...commonPropertiesBarComponent,
    data: checkers,
    layout,
    keys,
    indexBy,
    colors: [colors.brand],
    labelTextColor: 'white',
  };
  return <Nivo.ResponsiveBar {...properties} />;
};

ResponsiveBar.displayName = 'ResponsiveBar';
