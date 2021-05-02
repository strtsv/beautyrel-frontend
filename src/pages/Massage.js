import React from "react";

import Header from "../components/Header";
import Services from "../components/Massage/Services";
import WhatWeOffer from "../components/Massage/WhatWeOffer";
import Divider from "../components/Massage/Divider";
import MassageTherapist from "../components/Massage/MassageTherapist";
import Footer from "../components/Footer";

const Massage = () => {
  return (
    <div className="page animated">
      <Header />
      <Services />
      <WhatWeOffer />
      <Divider />
      <MassageTherapist />
      <Footer />
    </div>
  );
};

export default Massage;
