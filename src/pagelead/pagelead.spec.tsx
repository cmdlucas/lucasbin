import React, { FunctionComponent } from 'react';
import PageLead from './pagelead.ui';
import { TextLink } from '../shared/primitive-ui/text';
import { defaultTheme } from '../shared/primitive-ui/theme';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

describe('PageLead Component', () => {
  const renderComponent = ({
    rightComponent,
    icon,
  }: {
    rightComponent?: FunctionComponent;
    icon?: IconDefinition;
  } = {}) =>
    render(
      <ThemeProvider theme={defaultTheme}>
        <PageLead text="BLOG" rightComponent={rightComponent} icon={icon} />
      </ThemeProvider>
    );

  it('should always render header intro', () => {
    renderComponent();
    expect(screen.getByText('BLOG')).toBeInTheDocument();
  });

  it('should match snapshot for when TextLink is supplied', () => {
    const Component = () => <TextLink href="/blog" />;
    const { asFragment } = renderComponent({ rightComponent: Component });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot for when IconText supplied', () => {
    const { asFragment } = renderComponent({ icon: faNewspaper });
    expect(asFragment()).toMatchSnapshot();
  });
});
