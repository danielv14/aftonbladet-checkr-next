import * as React from 'react';
import { theme } from './theme';
import styled from 'styled-components';

export interface CardProps {
  height?: number;
  header?: string;
}

const CardHeader = styled.h2`
  text-align: center;
  margin: 4px;
`;

const CardContentWrapper = styled.div`
  display: block;
  height: ${props => props.height};
`;

const CardContainer = styled.div`
  background: ${props => props.background};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  position: relative;
  width: 100%;
  box-shadow: ${props => props.boxShadow};
`;

export const Card: React.FC<CardProps> = ({ height = 400, header, children }) => {
  const wrapperheight = `${height}px`;
  return (
    <CardContainer
      background={theme.card.background}
      borderRadius={theme.card.borderRadius}
      padding={theme.card.borderRadius}
      boxShadow={theme.card.boxShadow}
    >
      {header && <CardHeader>{header}</CardHeader>}
      <CardContentWrapper height={wrapperheight}>{children}</CardContentWrapper>
    </CardContainer>
  );
};
