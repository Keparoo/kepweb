import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="canonical" href="https://kepweb.dev" />
          
          {/* Fonts and styles */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Asap:wght@700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

          {/* Page Title, description, author and keywords */}
          <title>Kep Kaeppeler | Web Developer Portfolio Site</title>
          <meta name="description"
            content="Full stack web developer from Cape Cod, Massachusetts: information, portfolio, and resume site" />
          <meta name="keywords"
            content="HMTL, CSS, Javascipt, React, Redux, Node, Next.js, Python, SQL, Postgres, Web Developer, Full Stack, Cape Cod, Boston, Massachusetts" />
          <meta name="author" content="Kep Kaeppeler" />

          {/*  Open Graph Setup (Facebook, LinkedIn etc. ) fb:app_id tag only needed for websites that are facebook apps */}

          <meta property="og:type" content="website" />
          {/* title: 60-90 chars. More than 100 is truncated to 88 */}
          <meta property="og:title" content="Kep Kaeppeler Web Developer Portfolio" />
          {/* description approx 200 chars. (216 here) Facebook can display up to 300 */}
          <meta property="og:description"
            content="A full stack web developer living in Cape Cod, Massachusetts, who loves to capture the personality and flair of a client in the websites and printed materials that represent them. Information and project portfolio site." />
          <meta property="og:url" content="https://kepweb.dev" />
          {/* image should be 1.91:1 ratio and minimum dimensions of 1200x627 for optimal clarity across all devices <= 5MB */}
          <meta property="og:image" content="https://kepweb.dev/kepweb_og_home.jpg" />

          {/* Twitter Card Setup */}
          <meta name="twitter:card" content="summary_large_image" />
          {/*  title: up to 70 chars */}
          <meta name="twitter:title" content="Kep Kaeppeler Web Developer Portfolio" />
          <meta name="twitter:description"
            content="A full stack web developer living in Cape Cod, Massachusetts, who loves to capture the personality and flair of a client in the websites and printed materials that represent them. Information and project portfolio site." />
          {/* image: minimum 280x150px <= 1MB  */}
          <meta name="twitter:image" content="https://kepweb.dev/kepweb_og_home.jpg" />
          <meta name="twitter:image:alt" content="react code" />
          <meta name="twitter:url" content="https://kepweb.dev" />
          <meta name="twitter:site" content="@KepKaeppeler" />

          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};