import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        head: [
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
            key="pre-connect"
          />,
          <link rel="icon" href="/favicon.ico" key="favicon" />,

          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            key="pre-connect-google-api"
          />,
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="stylesheet"
            key="google-fonts"
          />,
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
            key="viewport"
          />,
        ],
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
