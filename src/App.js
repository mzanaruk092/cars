
import React from "react";
import Find from "./components/find/Find";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Driver from "./components/driver/Driver";
import Luxury from "./components/luxury/Luxury";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
