import React, { useState, useEffect } from 'react';
import Banner from "../components/Banner.js";
import Features from "../components/Features.js";
// import Navbar from '../components/NavBar.js';
// import Services from "../components/Services.js";
// import Impact from "../components/Impact.js";
// import Footer from "../components/Footer.js";

const LandingPage = (props) => {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <main>
          <Banner />
          <Features />
          {/* <Services />
          <Impact /> */}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }

export default LandingPage;