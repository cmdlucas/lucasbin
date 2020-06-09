import React, { FunctionComponent } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import { defaultTheme } from '../primitive-ui/theme';

interface MenuBarProps {
    theme: DefaultTheme
}

export const MenuBar: FunctionComponent<MenuBarProps> = ({ theme: { main } }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" fill="none" />
        <line x2="32" transform="translate(8 14)" fill="none" stroke={main.textColor} strokeWidth="2" />
        <line x2="22" transform="translate(18 24)" fill="none" stroke={main.textColor} strokeWidth="2" />
        <line x2="32" transform="translate(8 34)" fill="none" stroke={main.textColor} strokeWidth="2" />
    </svg>
)

MenuBar.defaultProps = {
    theme: defaultTheme
}

export default React.memo(withTheme(MenuBar));