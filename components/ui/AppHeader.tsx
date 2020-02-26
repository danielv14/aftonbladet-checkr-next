import * as React from 'react';

interface AppHeaderProps {
  text: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ text }) => {
  return (
    <h1>
      {text}
      <style jsx>
        {`
          h1 {
            font-family: 'Bungee Shade', Arial, Helvetica, sans-serif;
          }
        `}
      </style>
    </h1>
  );
};
