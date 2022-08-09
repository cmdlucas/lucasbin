import React from 'react';
import {
  Profile,
  TopDivision,
  MidDivision,
  BottomDivision,
} from './profile.ui';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../shared/primitive-ui/theme';

describe('TopDivision Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider theme={defaultTheme}>
        <TopDivision />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('MidDivision Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider theme={defaultTheme}>
        <MidDivision />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('BottomDivision Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider theme={defaultTheme}>
        <BottomDivision />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Profile Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider theme={defaultTheme}>
        <Profile />
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
