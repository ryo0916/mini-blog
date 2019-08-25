import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import preset from '@rebass/preset'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={preset}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
      )
  }
}

export default MyApp