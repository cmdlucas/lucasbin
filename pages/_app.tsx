import App, { AppProps } from 'next/app'
import Head from 'next/head';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/shared/primitive-ui/global'
import { defaultTheme, Theme, invertTheme, invertThemeType } from '../src/shared/primitive-ui/theme'
import Layout from '../src/shared/layout/layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser, faNewspaper, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import router from 'next/router'
import nprogress from 'nprogress';
import { AnyMap } from '@cmdlucas/markdown-metadata';

library.add(faMoon, faSun, faCalendarAlt, faUser, faNewspaper, faEnvelope, faSuitcase, faGithub, faTwitter, faLinkedin);

export class MyApp extends App<AnyMap, AnyMap, { theme: Theme }> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            theme: {
                ...defaultTheme,
                switchTheme: this.toggleTheme
            }
        }
    }

    setThemeState(theme: Theme, callback?: () => void): void {
        this.setState({ ...this.state, theme: { ...theme }}, callback)
    }
    
    toggleTheme = (): void => {
        this.setThemeState({
            ...this.state.theme,
            type: invertThemeType(this.state.theme.type),
            main: invertTheme(this.state.theme.type)
        })
    }

    componentDidMount(): void {
        router.events.on('routeChangeStart', () => nprogress.start())
        router.events.on('hashChangeStart', () => nprogress.inc())
        router.events.on('hashChangeComplete', () => nprogress.inc())
        router.events.on('beforeHistoryChange', () => nprogress.inc())
        router.events.on('routeChangeComplete', () => nprogress.done())
        router.events.on('routeChangeError', () => nprogress.done())
    }

    render(): ReactElement {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/siteicons/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/siteicons/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/siteicons/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/siteicons/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/siteicons/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/siteicons/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/siteicons/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/siteicons/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/siteicons/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/siteicons/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/siteicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/siteicons/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/siteicons/favicon-16x16.png" />
                    <link rel="icon" type="image/ico" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/siteicons/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                    <title>Caleb I. Lucas</title>
                </Head>
                <ThemeProvider theme={this.state.theme}>
                    <GlobalStyle />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </>
        )
    }
}

export default MyApp;