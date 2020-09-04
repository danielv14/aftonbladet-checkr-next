import * as Nivo from '@nivo/pie';
import * as React from 'react';
import { CheckersByQuarter } from '../../interfaces/Checker';
import { PieDatum } from '@nivo/pie';
import { commonPropertiesPieComponent } from '../../settings/chart/commonProperties';

export interface ResponsivePieProps {
  checkers: CheckersByQuarter[];
}

export const ResponsivePie: React.FC<ResponsivePieProps> = ({ checkers }) => {
  return (
    <Nivo.ResponsivePie
      {...commonPropertiesPieComponent}
      data={(checkers as unknown) as PieDatum[]}
      animate={true}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

ResponsivePie.displayName = 'ResponsivePie';
