import React, { FunctionComponent } from 'react';
import { lightTheme } from '../primitive-ui/theme';
import { DefaultTheme, withTheme } from 'styled-components';

interface NavMenuProps {
    theme: DefaultTheme
}

export const NavMenu : FunctionComponent<NavMenuProps> = (props) => {
    return (
        <></>
    )
}

NavMenu.defaultProps = {
    theme: lightTheme
}

export default React.memo(withTheme(NavMenu));