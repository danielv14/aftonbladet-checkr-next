import * as React from 'react';

export const AppContainer: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            max-width: 980px;
            width: 100%;
            margin: 0 auto;
          }
        `}
      </style>{' '}
    </div>
  );
};
