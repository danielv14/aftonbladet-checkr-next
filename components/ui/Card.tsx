import * as React from 'react';
import { theme } from './theme';

export const Card: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          background: ${theme.card.background};
          border-radius: ${theme.card.borderRadius};
          padding: ${theme.card.padding};
          position: relative;
          width: 100%;
          box-shadow: ${theme.card.boxShadow};
        }
      `}</style>
    </div>
  );
};
