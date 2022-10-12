import "../styles/globals.css";
import "../components/Layout";
import Layout from "../components/Layout";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
