import Head from "next/head";

import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <main data-scroll-container>
      <Head>
        <title>Автоподбор в Оренбурге</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      {children}
      <Footer />
      <Menu />
    </main>
  );
}
