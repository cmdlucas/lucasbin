import styled from "styled-components";

const HFMContainer = styled.div(props => ({
    margin: "auto",
    maxWidth: "1140px",
}))

export const HeaderContainer = styled(HFMContainer)(props => ({
    height: "100%"
}))

export const MainContainer = styled(HFMContainer)(props => ({ 
    width: "100%"
}))

export const FooterContainer = styled(HFMContainer)(props => ({
    height: "100%"
}))