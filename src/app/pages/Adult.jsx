import React from "react";
import Hero from "../components/Hero/Hero";
import Audience from "../components/Audience/Audience";
import Languages from "../components/Languages/Languages";
import ImagineTarget from "../components/ImagineTarget/ImagineTarget";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import TotalResult from "../components/TotalResult/TotalResult";
import Motivation from "../components/Motivation/Motivation";
import Package from "../components/Package/Package";
import AdultOfflinePackage from "../components/UI/PacageTabs/AdultOfflinePackage";
import Booking from "../components/Booking/Booking";

const pageData = {
  heroTitle: "ЭФФЕКТИВНОЕ ИЗУЧЕНИЕ ЯЗЫКОВ",
  heroDescr: "Прокачайте язык вместе с\xa0нами под любые цели",
  heroImage: "hero-adult.jpg",
  langTitle: "У нас вы можете выучить:",
};

const Adult = () => {
  return (
    <>
      <Hero
        data={{
          title: pageData.heroTitle,
          image: pageData.heroImage,
          descr: pageData.heroDescr,
        }}
      />
      <Audience page="adultPage" />
      <Languages title={pageData.langTitle} />
      <ImagineTarget />
      <WhatWeDo />
      <TotalResult />
      <Motivation
        image="motivation3.png"
        descr="А может быть язык вам нужен для путешествий? Для переезда в другую страну? Или у вас профессиональные цели и язык вам нужен для повышения? "
      />
      <Package>
        <AdultOfflinePackage />
      </Package>
      <Booking />
    </>
  );
};

export default Adult;
