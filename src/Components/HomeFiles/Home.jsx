import React from "react";
import Sliders from "../../Components/Pages/Sliders";
import LegalIntroSection from "../../Components/Pages/LegalIntroSection";
import LegalServices from "../../Components/Pages/LegalServices";
import ChoosePage from "../../Components/Pages/ChoosePage";
import Testimonial from "../../Components/Pages/Testimonial";

function Home() {
  return (
    <div>
      <Sliders />
      <LegalIntroSection />
      <LegalServices />
      <ChoosePage />
      <Testimonial/>
    </div>
  );
}

export default Home;
