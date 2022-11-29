import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />

          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Repository Viability | AnyWay</title>
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
