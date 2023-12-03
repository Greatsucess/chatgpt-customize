import { VisuallyHidden } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Amazon Assistance</title>
      </Head>
      <body suppressHydrationWarning={true}
            >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
