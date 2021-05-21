import "../styles/index.css";
import App from "next/app";
import MainLayout from "../components/layouts/main";
import DefaultLayout from "../components/layouts/default";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <div>
        <MainLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </div>
    );
  }
}

export default MyApp;
