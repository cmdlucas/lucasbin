import React, { FunctionComponent } from 'react'
import { generalSkin } from '../primitive-ui/skin';
import { HMFContainer } from '../primitive-ui/container';
import styled from 'styled-components';

const MainSkin = styled.div(props => ({
    ...generalSkin(props.theme),
    marginTop: "76px"
}))

const MainContainer = styled(HMFContainer)(props => ({ 
    width: "100%"
}))

interface MainProps { }

export const Main: FunctionComponent<MainProps> = (props) => (
    <MainSkin>
        <MainContainer>
            {props.children}
        </MainContainer>
    </MainSkin>
)

export default React.memo(Main);