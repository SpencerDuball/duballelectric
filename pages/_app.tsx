import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { NotificationSystemProvider } from "context/notification-system";
import { Header, Footer, NotificationSystem } from "lib/ui";
import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Duball Electric Inc.</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="author" content="Duball Electric Inc." />
        <meta
          name="description"
          content={
            "Duball Electric is an electrical contractor providing residential " +
            "and commercial electrial services for the Cedar Rapids and " +
            "surrounding areas."
          }
        />
        <meta property="og:image" content="/images/DuballElectric.png" />
        <meta
          property="og:description"
          content={
            "Duball Electric is an electrical contractor providing residential " +
            "and commercial electrial services for the Cedar Rapids and " +
            "surrounding areas."
          }
        />
        <meta property="og:title" content="Duball Electric Inc." />
        <meta name="twitter:title" content="Duball Electric Inc." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <NotificationSystemProvider>
          <NotificationSystem placement="top-end" />
          <Box as="main" display="grid">
            <Header position="fixed" zIndex="banner" />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </NotificationSystemProvider>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
