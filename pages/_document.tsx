import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import { ServerStyleSheet } from "styled-components";

// import useStore from "../store";
// import { Theme } from "../ThemeConfig";

export default class MyDocument extends Document {
    
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
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
            // styles: (
                //   <>
                //     {initialProps.styles}
                //     {sheet.getStyleElement()}
                //   </>
                // ),
            };
        } finally {
            sheet.seal();
        }
    }
    
    render(): ReactElement {
    return(
      <Html lang="nl">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}