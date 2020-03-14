import * as React from 'react';
import styled from 'styled-components';
import { StyledTheme } from '../../settings/theming/theme';

export interface CardProps {
  height?: number;
  header?: string;
}

export const Card: React.FC<CardProps> = ({ height = 400, header, children }) => {
  const wrapperheight = `${height}px`;
  return (
    <CardContainer>
      {header && <CardHeader>{header}</CardHeader>}
      <CardContentWrapper height={wrapperheight}>{children}</CardContentWrapper>
    </CardContainer>
  );
};

const CardHeader = styled.h2`
  text-align: center;
  margin: 4px;
`;

const CardContentWrapper = styled.div`
  display: block;
  height: ${props => props.height};
`;

const CardContainer = styled.div(
  ({ theme }: StyledTheme) => `
  background: ${theme.card.background};
  border-radius: ${theme.card.borderRadius};
  padding: ${theme.card.padding};
  position: relative;
  width: 100%;
  box-shadow: ${theme.card.boxShadow};
  `,
);
