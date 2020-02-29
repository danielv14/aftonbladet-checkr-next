import * as React from 'react';
import { theme } from './theme';

export const IconChecker: React.FC = () => {
  return (
    <span className="checker">
      &#10004;
      <style jsx>
        {`
          .checker {
            color: ${theme.colors.brand};
          }
        `}
      </style>
    </span>
  );
};

IconChecker.displayName = 'IconChecker';
