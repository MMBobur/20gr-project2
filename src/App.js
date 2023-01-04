import BANNER from "./Asilbek/BANNER/BANNER";
import SERVICES from './Asilbek/SERVICES/SERVICES'
import CONTACT from './Asilbek/CONTACT/CONTACT'

import Nav from "./navbar";
import About from "./pages/About";
import Our from "./our";
import Portfolio from "./pages/Portfolio";
import Team from "./team"
import Footer from "./pages/Footer";

function App() {
  return (
    <>      
      <Nav />
      <BANNER />
      <SERVICES />
      <CONTACT />
      <About />
      <Our />
      <Portfolio />
      <Team />
      <Footer />
    </>
  );
}

export default App;
