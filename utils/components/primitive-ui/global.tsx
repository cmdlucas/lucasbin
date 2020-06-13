import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Poppins;
        src: url(/fonts/poppins/poppins-v6-latin-regular.ttf);
    }
    @font-face {
        font-family: Inconsolata;
        src: url(/fonts/inconsolata/Inconsolata-Regular.ttf);
    }
    @font-face {
        font-family: CooperHewitt;
        src: url(/fonts/cooper-hewitt/CooperHewitt-Medium.ttf);
    }
    
    * {
        margin: 0px;
        font-family: Inconsolata
    }

    a, button {
        cursor: pointer;
    }
`

export const AbsolutePosition = styled.div(props => ({
    position: "absolute",
}))

export const RelativePosition = styled.div(props => ({
    position: "relative"
}))

export const FixedPosition = styled.div(props => ({
    position: "fixed"
}))

export const HrLine = styled.hr(props => ({
    border: `1px solid ${props.theme.main.borderColor}`
}))