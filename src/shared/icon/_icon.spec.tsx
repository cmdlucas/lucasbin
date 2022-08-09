import React from 'react';
import { Logo } from './logo';
import { defaultTheme } from '../primitive-ui/theme';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

describe('Images', () => {
  describe('Logo', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(
        <ThemeProvider theme={defaultTheme}>
          <Logo theme={defaultTheme} />
        </ThemeProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
