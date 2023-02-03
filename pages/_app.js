import '../styles/globals.scss';
import * as React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme"; // theme object from step 2


export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <style jsx>{`
          @font-face {
              font-family: 'Zen Tokyo Zoo';
              src: url('/font/ZenTokyoZoo-regular.woff2');
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}