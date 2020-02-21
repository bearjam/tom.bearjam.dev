import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React from 'react';
import '../styles/global.css';
import { theme as initialTheme } from '../tailwind.config';

export default ({ Component, pageProps }) => {
  const Layout = Component.Layout || (x => x);

  return (
    <>
      <Head>
        <title>{pageProps.title || "Default Title"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={initialTheme}>
        {Layout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};
