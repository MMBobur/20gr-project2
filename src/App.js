
import Our from "./our";

import Team from "./team"
import Navbar1 from "./navbar";
{/* import NAVBAR */}
{/* import BANNER */}
import About from "./pages/About";
{/* import OUR CLIENTS */}
{/* import SERVICES */}
import Portfolio from "./pages/Portfolio";
{/* import TEAM */}
{/* import CONTACT */}
import Footer from "./pages/Footer";

function App() {
  return (
    <>
    <Navbar1/>
      {/* BANNER */}
      {/* ABOUT US */}
      <Our />
      {/* SERVICES */}
      {/* PORTFOLIO */}
      <Team />
      <Portfolio/>
      {/* TEAM */}
      {/* CONTACT */}
      <Footer/>
    </>
  );
}

export default App;
