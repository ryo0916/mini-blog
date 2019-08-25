import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import preset from '@rebass/preset'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: rgb(246, 247, 248);
    margin: 0;
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
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
      )
  }
}

export default MyApp