import styled from "styled-components";

const HFMContainer = styled.div(props => ({
    margin: "auto",
    maxWidth: "1140px",
}))

export const HeaderContainer = styled(HFMContainer)(props => ({
    height: "100%",
    "@media only screen and (max-width: 1024px)": {
        padding: "0px 8px"
    }
}))

export const MainContainer = styled(HFMContainer)(props => ({ 
    width: "100%",  
    "@media only screen and (max-width: 1024px)": {
        padding: "0px 16px"
    }
}))

export const FooterContainer = styled(HFMContainer)(props => ({
    height: "100%",
    "@media only screen and (max-width: 1024px)": {
        padding: "0px 16px"
    }
}))