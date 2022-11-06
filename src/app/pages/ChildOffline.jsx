import React from 'react';
import Hero from "../components/Hero/Hero";
import Languages from "../components/Languages/Languages";
import ComeToUs from "../components/UI/ComeToUs/ComeToUs";
import Motivation from "../components/Motivation/Motivation";
import ReachResult from "../components/ReachResult/ReachResult";
import WhatIsLanguage from "../components/WhatIsLanguage/WhatIsLanguage";
import Package from "../components/Package/Package";
import ChildOfflinePackage from "../components/UI/PacageTabs/ChildOfflinePackage";
import Booking from "../components/Booking/Booking";

const pageData = {
  heroTitle: "ИЗУЧЕНИЕ ЯЗЫКОВ В\xa0НАШЕЙ ШКОЛЕ В\xa0Г. ТРОИЦКЕ",
  heroImage: "child-offline.jpg",
  langTitle: "У нас ваши дети могут выучить:"
}

const ChildOffline = () => {
  return (
    <>
      <Hero data={{ title: pageData.heroTitle, image:pageData.heroImage }}/>
      <Languages title={pageData.langTitle}/>
      <ComeToUs/>
      <Motivation image='motivation2.png'/>
      <ReachResult/>
      <WhatIsLanguage image='what_is_lang2.jpg'/>
      <Package>
        <ChildOfflinePackage />
      </Package>
      <Booking/>
    </>
  );
};

export default ChildOffline;
