/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

export const AbsolutePosition = styled.div((props) => ({
  position: "absolute",
}));

export const RelativePosition = styled.div((props) => ({
  position: "relative",
}));

export const FixedPosition = styled.div((props) => ({
  position: "fixed",
}));

export const HrLine = styled.hr((props) => ({
  border: `1px solid ${props.theme.main.borderColor}`,
}));
