import React from "react";
import Sliders from "../../Components/Pages/Sliders";
import LegalIntroSection from "../../Components/Pages/LegalIntroSection";
import LegalServices from "../../Components/Pages/LegalServices";

function Home() {
  return (
    <div>
      <Sliders />
      <LegalIntroSection />
      <LegalServices />
    </div>
  );
}

export default Home;
