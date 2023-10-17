import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import SEO from "@/components/SEO";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="alGIRLithm Programming Contest"
        description="alGIRLithm is a programming competition for high school girls."
        url=""
        //image="/og.png"
        twitterCard="summary_large_image"
      >
        <meta name="theme-color" content="#FB7185" />
      </SEO>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
