import React, { FunctionComponent } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import { defaultTheme } from '../primitive-ui/theme';

interface LogoProps {
    theme: DefaultTheme
}

export const Logo: FunctionComponent<LogoProps> = ({ theme: { main } }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="218" height="48" viewBox="0 0 218 48">
        <rect width="218" height="48" fill="none" />
        <path d="M10.569-2.424a5.578,5.578,0,0,0,2.815-.732,6.143,6.143,0,0,0,2.1-1.956l2.084,1.56A8.793,8.793,0,0,1,14.558-.96,8.376,8.376,0,0,1,10.569,0,8.292,8.292,0,0,1,7.191-.7,8.837,8.837,0,0,1,4.436-2.58,8.9,8.9,0,0,1,2.579-5.364,8.6,8.6,0,0,1,1.9-8.784a8.6,8.6,0,0,1,.683-3.42,8.9,8.9,0,0,1,1.857-2.784,8.837,8.837,0,0,1,2.755-1.884,8.292,8.292,0,0,1,3.378-.7,8.376,8.376,0,0,1,3.989.96,8.793,8.793,0,0,1,3.007,2.592l-2.084,1.56a6.143,6.143,0,0,0-2.1-1.956,5.578,5.578,0,0,0-2.815-.732,5.5,5.5,0,0,0-2.336.5,6.125,6.125,0,0,0-1.9,1.368,6.606,6.606,0,0,0-1.294,2.016,6.372,6.372,0,0,0-.479,2.472,6.372,6.372,0,0,0,.479,2.472A6.606,6.606,0,0,0,6.328-4.3a6.125,6.125,0,0,0,1.9,1.368A5.5,5.5,0,0,0,10.569-2.424Zm10.782,2.4,7.164-17.592L35.678-.024H33.067L32.54-1.416H24.513L23.962-.024Zm4.025-3.648h6.277l-3.139-8.064Zm16.652-13.92V-2.5h7.164V.024H39.464V-17.592ZM55.517-6.744v4.176h7.811v2.52H52.977v-17.52H63.16V-15.1H55.517v5.952h6.876v2.4ZM76.745-9.312a4.34,4.34,0,0,1,1.689,1.668,4.85,4.85,0,0,1,.635,2.484,4.938,4.938,0,0,1-.407,1.992,5.4,5.4,0,0,1-1.1,1.644A5.14,5.14,0,0,1,75.93-.408,4.915,4.915,0,0,1,73.941,0H67.113V-17.592h6.709a4.549,4.549,0,0,1,1.821.372,4.792,4.792,0,0,1,1.509,1.02,4.8,4.8,0,0,1,1.018,1.512,4.63,4.63,0,0,1,.371,1.848,3.846,3.846,0,0,1-.156,1.116,4.4,4.4,0,0,1-.407.948,5.244,5.244,0,0,1-.575.8A6.414,6.414,0,0,1,76.745-9.312ZM69.677-10.32H73.39a2.5,2.5,0,0,0,.982-.192,2.358,2.358,0,0,0,.791-.54,2.6,2.6,0,0,0,.527-.8,2.452,2.452,0,0,0,.192-.96,2.444,2.444,0,0,0-.719-1.8,2.407,2.407,0,0,0-1.773-.72H69.677ZM73.51-2.256a2.685,2.685,0,0,0,1.126-.24,3.114,3.114,0,0,0,.922-.636,2.944,2.944,0,0,0,.623-.924,2.76,2.76,0,0,0,.228-1.1,2.819,2.819,0,0,0-.228-1.128,2.944,2.944,0,0,0-.623-.924,2.938,2.938,0,0,0-.922-.624,2.806,2.806,0,0,0-1.126-.228H69.677v5.808ZM96.1-2.544a1.223,1.223,0,0,1,.9.372,1.227,1.227,0,0,1,.371.9,1.227,1.227,0,0,1-.371.9A1.223,1.223,0,0,1,96.1,0a1.223,1.223,0,0,1-.9-.372,1.227,1.227,0,0,1-.371-.9,1.227,1.227,0,0,1,.371-.9A1.223,1.223,0,0,1,96.1-2.544ZM101.159,0V-17.592h2.564V0Zm7.619-2.544a1.223,1.223,0,0,1,.9.372,1.227,1.227,0,0,1,.371.9,1.227,1.227,0,0,1-.371.9,1.223,1.223,0,0,1-.9.372,1.223,1.223,0,0,1-.9-.372,1.227,1.227,0,0,1-.371-.9,1.227,1.227,0,0,1,.371-.9A1.223,1.223,0,0,1,108.778-2.544Zm19.6-15.048V-2.5h7.164V.024h-9.727V-17.592Zm20.269,0h2.516v11.76a5.572,5.572,0,0,1-.467,2.28,5.716,5.716,0,0,1-1.282,1.836A6.2,6.2,0,0,1,147.52-.48a5.9,5.9,0,0,1-2.324.456,5.757,5.757,0,0,1-2.288-.456,6.091,6.091,0,0,1-1.869-1.236,5.651,5.651,0,0,1-1.258-1.836,5.7,5.7,0,0,1-.455-2.28v-11.76h2.516v11.76a3.272,3.272,0,0,0,.264,1.308,3.546,3.546,0,0,0,.719,1.08,3.261,3.261,0,0,0,1.078.732,3.342,3.342,0,0,0,1.318.264,3.4,3.4,0,0,0,1.342-.264,3.4,3.4,0,0,0,1.09-.732,3.441,3.441,0,0,0,.731-1.08,3.272,3.272,0,0,0,.264-1.308ZM163.621-2.424a5.578,5.578,0,0,0,2.815-.732,6.143,6.143,0,0,0,2.1-1.956l2.084,1.56A8.793,8.793,0,0,1,167.61-.96a8.376,8.376,0,0,1-3.989.96,8.292,8.292,0,0,1-3.378-.7,8.837,8.837,0,0,1-2.755-1.884,8.9,8.9,0,0,1-1.857-2.784,8.6,8.6,0,0,1-.683-3.42,8.6,8.6,0,0,1,.683-3.42,8.9,8.9,0,0,1,1.857-2.784,8.837,8.837,0,0,1,2.755-1.884,8.292,8.292,0,0,1,3.378-.7,8.376,8.376,0,0,1,3.989.96,8.793,8.793,0,0,1,3.007,2.592l-2.084,1.56a6.143,6.143,0,0,0-2.1-1.956,5.578,5.578,0,0,0-2.815-.732,5.5,5.5,0,0,0-2.336.5,6.125,6.125,0,0,0-1.9,1.368,6.607,6.607,0,0,0-1.294,2.016,6.372,6.372,0,0,0-.479,2.472,6.372,6.372,0,0,0,.479,2.472A6.607,6.607,0,0,0,159.38-4.3a6.125,6.125,0,0,0,1.9,1.368A5.5,5.5,0,0,0,163.621-2.424ZM174.4-.024l7.164-17.592L188.73-.024h-2.612l-.527-1.392h-8.026l-.551,1.392Zm4.025-3.648H184.7l-3.139-8.064Zm23.72-5.088a2.026,2.026,0,0,1,.311.276q.144.156.264.3a5.64,5.64,0,0,1,.863,1.524,4.9,4.9,0,0,1,.311,1.74,1.814,1.814,0,0,1-.024.336,4.631,4.631,0,0,1-.815,2.424,4.928,4.928,0,0,1-1.725,1.6,4.737,4.737,0,0,1-2.348.588H197.4a4.737,4.737,0,0,1-2.348-.588,4.928,4.928,0,0,1-1.725-1.6,6.282,6.282,0,0,1-.383-.672l2.228-1.728a2.466,2.466,0,0,0,.3.852,2.8,2.8,0,0,0,.563.7,2.5,2.5,0,0,0,.767.468,2.486,2.486,0,0,0,.91.168h.958a2.483,2.483,0,0,0,1.7-.636,2.56,2.56,0,0,0,.863-1.572,1.55,1.55,0,0,1,.012-.192,1.544,1.544,0,0,0,.012-.192,2.513,2.513,0,0,0-.192-.984,2.6,2.6,0,0,0-.527-.8,2.686,2.686,0,0,0-.791-.564,2.491,2.491,0,0,0-.958-.24h-1.462a4.622,4.622,0,0,1-1.665-.348,4.986,4.986,0,0,1-1.4-.876,2.458,2.458,0,0,1-.575-.576,5.64,5.64,0,0,1-.863-1.524,4.9,4.9,0,0,1-.311-1.74v-.336a5.006,5.006,0,0,1,.839-2.424,4.928,4.928,0,0,1,1.725-1.6,4.737,4.737,0,0,1,2.348-.588h1.557a4.8,4.8,0,0,1,2.36.588,4.9,4.9,0,0,1,1.737,1.6q.072.12.156.264t.156.264l-2.18,1.7a2.666,2.666,0,0,0-.91-1.44,2.442,2.442,0,0,0-1.605-.576h-.958a2.581,2.581,0,0,0-.922.168,2.467,2.467,0,0,0-.779.468,2.717,2.717,0,0,0-.563.708,2.588,2.588,0,0,0-.3.864.79.79,0,0,0-.024.192v.192a2.513,2.513,0,0,0,.192.984,2.6,2.6,0,0,0,.527.8,2.686,2.686,0,0,0,.791.564,2.491,2.491,0,0,0,.958.24h1.462a4.622,4.622,0,0,1,1.665.348A4.985,4.985,0,0,1,202.147-8.76Z" transform="translate(6.104 32)" fill={main.textColor} stroke={main.textColor} strokeWidth="1" />
    </svg>
)

Logo.defaultProps = {
    theme: defaultTheme
}

export default React.memo(withTheme(Logo));