import React from "react";
import HomeBannerSection from "./HomeBannerSection";
import HomeProducts from "./HomeProducts";
import ItemBanner from "./ItemBanner";

const Home = () => {
  return (
    <>
      <HomeBannerSection></HomeBannerSection>
      <ItemBanner></ItemBanner>
      <HomeProducts></HomeProducts>
    </>
  );
};

export default Home;
