import React, { FunctionComponent } from "react";
import styled, {
  WebsiteDefaultTheme,
  withTheme,
  keyframes,
  css,
} from "styled-components";
import { defaultTheme } from "../primitive-ui/theme";

const MenuSvg = styled.svg(() => ({
  cursor: "pointer",
}));

const topLineOpen = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(45deg)",
  },
});

const topLineClosed = keyframes({
  from: {
    transform: "rotate(45deg)",
  },
  to: {
    transform: "rotate(0deg)",
  },
});

const midLineOpen = keyframes({
  from: {
    transform: "scaleX(1)",
  },
  to: {
    transform: "scaleX(0)",
  },
});

const midLineClosed = keyframes({
  from: {
    transform: "scaleX(0)",
  },
  to: {
    transform: "scaleX(1)",
  },
});

const bottomLineOpen = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(-45deg)",
  },
});

const bottomLineClosed = keyframes({
  from: {
    transform: "rotate(-45deg)",
  },
  to: {
    transform: "rotate(0deg)",
  },
});

const topLineAnimation = (props: MenuSvgLineProps) =>
  css`
    animation: ${props.open ? topLineOpen : topLineClosed} 0.2s linear 0s forwards;
  `;

const midLineAnimation = (props: MenuSvgLineProps) =>
  css`
    animation: ${props.open ? midLineOpen : midLineClosed} 0.2s linear 0s forwards;
  `;
  
const bottomLineAnimation = (props: MenuSvgLineProps) =>
  css`
    animation: ${props.open ? bottomLineOpen : bottomLineClosed} 0.2s linear 0s forwards;
  `;

interface MenuSvgLineProps {
  open: boolean;
}

const MenuSvgLineTop = styled.line<MenuSvgLineProps>`
  ${topLineAnimation}
`;

const MenuSvgLineMid = styled.line<MenuSvgLineProps>`
  ${midLineAnimation}
`;

const MenuSvgLineBottom = styled.line<MenuSvgLineProps>`
  ${bottomLineAnimation}
`;

interface MenuBarProps {
  theme: WebsiteDefaultTheme;
  open: boolean;
  onClick?: () => void;
}

export const MenuBar: FunctionComponent<MenuBarProps> = ({
  open,
  onClick,
  theme: { main },
}) => (
  <MenuSvg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    onClick={onClick}
  >
    <rect width="48" height="48" fill="none" />
    <MenuSvgLineTop
      open={open}
      x1={open ? "16" : "8"}
      x2={open ? "52" : "40"}
      y1={open ? "0" : "14"}
      y2={open ? "0" : "14"}
      fill="none"
      stroke={main.textColor}
      strokeWidth="2"
    />
    <MenuSvgLineMid
      open={open}
      x1="18"
      x2="40"
      y1="24"
      y2="24"
      fill="none"
      stroke={main.textColor}
      strokeWidth="2"
    />
    <MenuSvgLineBottom
      open={open}
      x1={open ? "-18" : "8"}
      x2={open ? "18" : "40"}
      y1="34"
      y2="34"
      fill="none"
      stroke={main.textColor}
      strokeWidth="2"
    />
  </MenuSvg>
);

MenuBar.defaultProps = {
  theme: defaultTheme,
  open: false,
};

export default React.memo(withTheme(MenuBar));
