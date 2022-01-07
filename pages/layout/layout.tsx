import { Fragment } from "react";
import { Header } from './components/header';
import { Footer } from './components/footer';

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export {Layout}