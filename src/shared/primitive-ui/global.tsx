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
    
    #nprogress {
        pointer-events: none;
    }

    #nprogress .bar {
        background: #29d;
        position: fixed;
        z-index: 20000;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #29d, 0 0 5px #29d;
        opacity: 1.0;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 20000;
        top: 4px;
        right: 15px;
    }

    #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: #29d;
        border-left-color: #29d;
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
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