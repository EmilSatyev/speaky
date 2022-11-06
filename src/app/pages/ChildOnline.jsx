import React from "react";
import Hero from "../components/Hero/Hero";
import Languages from "../components/Languages/Languages";
import Feature from "../components/Feature/Feature";
import Motivation from "../components/Motivation/Motivation";
import ReachResult from "../components/ReachResult/ReachResult";
import WhatIsLanguage from "../components/WhatIsLanguage/WhatIsLanguage";
import Package from "../components/Package/Package";
import Booking from "../components/Booking/Booking";
import ChildOnlinePackage from "../components/UI/PacageTabs/ChildOnlinePackage";

const pageData = {
  heroTitle: "ИЗУЧЕНИЕ ЯЗЫКОВ ОНЛАЙН ДЛЯ ДЕТЕЙ С\xa03\xa0ЛЕТ",
  heroImage: "child-online.jpg",
  langTitle: "У нас ваши дети могут выучить:",
};

const ChildOnline = () => {
  return (
    <>
      <Hero data={{ title: pageData.heroTitle, image: pageData.heroImage }} />
      <Languages title={pageData.langTitle} />
      <Feature />
      <Motivation image="motivation.png" />
      <ReachResult />
      <WhatIsLanguage image="what_is_lang.jpg" />
      <Package>
        <ChildOnlinePackage />
      </Package>
      <Booking />
    </>
  );
};

export default ChildOnline;
