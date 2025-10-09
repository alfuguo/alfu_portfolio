import Head from "next/head";
import { Fragment, useEffect } from "react";
import "../public/static/plugin/bootstrap/css/bootstrap.min.css";
import "../public/static/plugin/font-awesome/css/all.min.css";
import "../public/static/plugin/themify-icons/themify-icons.css";
import "../public/static/css/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add any global scripts here if needed
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;