import React from "react";
import HomeBannerSection from "./HomeBannerSection";
import HomeProducts from "./HomeProducts";
import ItemAds from "./ItemAds";
import ItemBanner from "./ItemBanner";

const Home = () => {
  return (
    <>
      <HomeBannerSection></HomeBannerSection>
      <ItemBanner></ItemBanner>
      <HomeProducts></HomeProducts>
      <ItemAds></ItemAds>
    </>
  );
};

export default Home;
