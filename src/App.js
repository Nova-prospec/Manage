
import { Fragment } from "react";
import svg from "./images/bg-tablet-pattern.svg";

import Navbar from '../src/Navbar/Navbar';
import Section1 from "./Section-1";
import Section2 from "./Section-2";
import Testimonials from "./Testimonials";
import Section4 from "./Section-4";
import Footer from "./Footer";
function App() {
  return (
    <Fragment>
      <img className="bg-image" src={svg} alt={svg} />
  <Navbar/>
  <Section1/>
  <Section2/>
  <img className="bg-image-2" src={svg} alt="" />
  <Testimonials/>
  <Section4/>
  <Footer/>
    </Fragment>
  );
}

export default App;
