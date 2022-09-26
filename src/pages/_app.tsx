import { Cursor } from 'react-creative-cursor';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyles from '../styles/global';
import 'react-creative-cursor/dist/styles.css';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.colors.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Cursor
        isGelly={true}
        cursorSize={24}
        cursorBackgrounColor={theme.colors.cursorColor}
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
