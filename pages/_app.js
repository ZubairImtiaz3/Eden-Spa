//Styles
import "../styles/globals.css";

//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//ANIMATIONS
import "animate.css/animate.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
