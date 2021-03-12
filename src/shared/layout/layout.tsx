import React, { FunctionComponent } from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';

export const Layout: FunctionComponent = (props) => (
    <>
        <Header />
        <Main>{ props.children }</Main>
        <Footer />
    </>
)

export default React.memo(Layout)