import "../styles/index.css";
import App from "next/app";
import MainLayout from "../components/layouts/Main";
import DefaultLayout from "../components/layouts/Default";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <>
          <MainLayout>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MainLayout>
      </>
    );
  }
}

export default MyApp;
