import React from "react";

import Header from "../components/Header";
import Content from "../components/GiftVouchers/Content";
import Caption from "../components/GiftVouchers/Caption";
import GiftVoucher from "../components/GiftVouchers/GiftVoucher";
import Footer from "../components/Footer";
import FAQ from "../components/GiftVouchers/FAQ";

const GiftVouchers = () => {
  return (
    <div className="page animated">
      <Header />
      <Caption />
      <Content />
      <GiftVoucher />
      <FAQ />
      <Footer />
    </div>
  );
};

export default GiftVouchers;
