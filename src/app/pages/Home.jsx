import React from "react";
import Hero from "../components/Hero/Hero";
import Audience from "../components/Audience/Audience";
import Languages from "../components/Languages/Languages";
import WhyWe from "../components/WhyWe/WhyWe";
import Booking from "../components/Booking/Booking";
import For from "../components/For/For";
import Smart from "../components/Smart/Smart";
import LearnPath from "../components/LearnPath/LearnPath";
import Example from "../components/Example/Example";
import TimeLineBlock from "../components/TimeLineBlock/TimeLineBlock";
import { Element } from "react-scroll";

const pageData = {
  heroTitle: "ШКОЛА ИНОСТРАННЫХ ЯЗЫКОВ ДЛЯ ВСЕЙ СЕМЬИ",
  heroImage: "hero.svg",
  langTitle: "У нас вы можете выучить:",
};

const Home = () => {
  return (
    <>
      <Hero data={{ title: pageData.heroTitle, image: pageData.heroImage }} />
      <Audience page="homePage" />
      <Languages title={pageData.langTitle} />
      <WhyWe />
      <Element name="booking">
        <Booking />
      </Element>
      <For />
      <Smart />
      <Example />
      <LearnPath />
      <Booking />
      <TimeLineBlock />
    </>
  );
};

export default Home;
