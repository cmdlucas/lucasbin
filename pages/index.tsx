import React from 'react';
import styled from 'styled-components';
import { HMFContainer } from '../utils/components/primitive-ui/container';
import { Profile } from '../utils/components/ui/profile';
import { BlogPostsSummary } from '../utils/components/ui/blogposts-summary';

const HomeContainer = styled(HMFContainer)(props => ({
    padding: "0px 8px",
    "@media only screen and (max-width: 768px)": {
        padding: "0px 16px"
    }
}))

const ComponentWrapper = styled.div(props => ({
    paddingBottom: "72px"
}))

export function Home() {
    return (
        <HomeContainer>
            <ComponentWrapper><Profile /></ComponentWrapper>
            <ComponentWrapper><BlogPostsSummary /></ComponentWrapper>
            
        </HomeContainer>
    )
}

export default React.memo(Home);
