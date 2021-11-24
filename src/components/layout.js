import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Menu />
    </>
  );
}
