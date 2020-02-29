import * as React from 'react';
import { theme } from './theme';

export interface CardProps {
  height?: number;
  header?: string;
}

export const Card: React.FC<CardProps> = ({ height = 400, header, children }) => {
  return (
    <div className="container">
      {header && <h2 className="header">{header}</h2>}
      <div className="content-wrapper">{children}</div>
      <style jsx>{`
        .container {
          background: ${theme.card.background};
          border-radius: ${theme.card.borderRadius};
          padding: ${theme.card.padding};
          position: relative;
          width: 100%;
          box-shadow: ${theme.card.boxShadow};
        }
        .content-wrapper {
          height: ${height}px;
          display: block;
        }
        h2.header {
          text-align: center;
          margin: 4px;
        }
      `}</style>
    </div>
  );
};
