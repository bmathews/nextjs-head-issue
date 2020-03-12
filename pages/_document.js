import Document, { Html, Head, Main, NextScript } from 'next/document'

const dynamicScript = `
  var s = document.createElement('script');
  s.innerHTML = "console.log('_document log')";
  document.head.appendChild(s);
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="test" />
          <script dangerouslySetInnerHTML={{ __html: dynamicScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
