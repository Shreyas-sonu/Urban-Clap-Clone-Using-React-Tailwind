import React from 'react'
import Navbar from "./ComponentsComposition/Header/Navbar";
import Main from "./ComponentsComposition/Main/Main";
import Footer from "./ComponentsComposition/Footer/Footer";

const Pages = () => {
  return (
    <div id="navBlock">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Pages