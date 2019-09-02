import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import markdownStyle from '../components/MarkdownStyle'
import preset from '@rebass/preset'
import reset from 'styled-reset'
import Footer from '../components/Footer'

const copyright = '© 2019 ウバ活する by @ryosuber';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    background-color: rgb(246, 247, 248);
    margin: 0;
    height: 100%;
  }

  h1,h2,h3,h4,h5 {
    font-weight: 800;
  }
`

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={preset}>
          <MDXProvider components={markdownStyle}>
            <>
              <GlobalStyle />
              <Component {...pageProps} />
              <Footer copyright={copyright} />
            </>
          </MDXProvider>          
        </ThemeProvider>
      </Container>
      )
  }
}

export default MyApp