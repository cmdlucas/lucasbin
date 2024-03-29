/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const Flex = styled.div(() => ({
    display: "flex",
    height: "100%",
    alignItems: "center"
}))

export const FlexRow = styled(Flex)(props => ({
    flexDirection: "row",
}))

export const FlexRowWrap = styled(FlexRow)(props => ({
    flexWrap: "wrap",
    alignContent: "space-between"
}))

export const FlexRowNoWrap = styled(FlexRow)(props => ({
    flexWrap: "nowrap",
}))

export const FlexColumn = styled(Flex)(props => ({
    flexDirection: "column"
}))
