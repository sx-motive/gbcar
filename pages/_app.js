import Layout from "../src/components/layout";

import "../src/styles/globals.css";
import "../src/styles/sections.css";
import "../src/styles/buttons.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
