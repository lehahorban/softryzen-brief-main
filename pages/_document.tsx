import { Html, Head, Main, NextScript } from 'next/document';
import seo from '@/data/seo.json';

const Document = () => {
  return (
    <Html>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" />
        <meta name="description" content={seo.description} />
        <meta name="title" content={seo.title} />

        <meta property="og:description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brief.softryzen.com/" />
        <meta property="og:image" content="/images/ogp/fb.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://brief.softryzen.com/" />
        <meta property="twitter:image" content="/images/ogp/tw.png" />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:title" content={seo.title} />

        <meta name="generator" content="React 18.2.0" />

        <link rel="canonical" href="https://brief.softryzen.com/" />
        <link rel="alternate" href="https://softryzen.com/" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
