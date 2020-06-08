import React, { FunctionComponent } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import { lightTheme } from '../primitive-ui/themes';

interface MenuBarProps {
    theme: DefaultTheme
}

export const MenuBar: FunctionComponent<MenuBarProps> = ({theme}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" fill="none" />
        <line x2="32" transform="translate(4 14)" fill="none" stroke={theme.textColor} strokeWidth="2" />
        <line x2="22" transform="translate(14 24)" fill="none" stroke={theme.textColor} strokeWidth="2" />
        <line x2="32" transform="translate(4 34)" fill="none" stroke={theme.textColor} strokeWidth="2" />
    </svg>
)

MenuBar.defaultProps = {
    theme: lightTheme
}

export default withTheme(React.memo(MenuBar));