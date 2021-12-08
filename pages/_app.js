import React, { useEffect } from "react";

import Layout from "../src/components/layout";

import "../src/styles/globals.css";
import "../src/styles/sections.css";
import "../src/styles/buttons.css";

function MyApp({ Component, pageProps }) {
  // locomotive scroll
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    });

    return () => scroll.destroy();
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
