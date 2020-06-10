import React, { FunctionComponent } from 'react'
import { generalSkin } from '../primitive-ui/skin';
import { HMFContainer } from '../primitive-ui/container';
import styled from 'styled-components';

const MainSkin = styled.div(props => ({
    ...generalSkin(props.theme)
}))

const MainHolder = styled.main(props => ({
    paddingTop: "148px",
    paddingBottom: "60px"
}))

const MainContainer = styled(HMFContainer)(props => ({
    width: "100%",
    maxWidth: "992px"
}))

interface MainProps { }

export const Main: FunctionComponent<MainProps> = (props) => (
    <MainSkin>
        <MainHolder>
            <MainContainer>
                {props.children}
            </MainContainer>
        </MainHolder>
    </MainSkin>
)

export default React.memo(Main);