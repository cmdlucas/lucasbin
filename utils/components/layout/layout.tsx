import React, { ReactElement, FunctionComponent } from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';

interface LayoutProps {}

export const Layout: FunctionComponent<LayoutProps> = (props) => (
    <>
        <Header />
        <Main>{ props.children }</Main>
        <Footer />
    </>
)

export default React.memo(Layout)