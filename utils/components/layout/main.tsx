import React, { FunctionComponent } from 'react'
import { MainSkin } from '../primitive-ui/skin';
import { MainContainer } from '../primitive-ui/container';

interface MainProps { }

export const Main: FunctionComponent<MainProps> = (props) => (
    <MainSkin>
        <MainContainer>
            {props.children}
        </MainContainer>
    </MainSkin>
)

export default React.memo(Main);