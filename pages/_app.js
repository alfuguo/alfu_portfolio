import Head from "next/head";
import { Fragment, useEffect } from "react";
import "../public/static/plugin/bootstrap/css/bootstrap.min.css";
import "../public/static/plugin/font-awesome/css/all.min.css";
import "../public/static/plugin/themify-icons/themify-icons.css";
import "../public/static/css/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add global font styles
    const style = document.createElement('style');
    style.textContent = `
      body, p, span, div, li, td, th, input, textarea, select, button {
        font-family: 'Roboto', sans-serif !important;
      }
      h1, h2, h3, h4, h5, h6, .font-alt {
        font-family: 'Space Grotesk', sans-serif !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Al Fu - Fullstack Developer Portfolio</title>
        <meta
          name="description"
          content="Al Fu - Passionate Fullstack Software Developer specializing in modern web applications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;