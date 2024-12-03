import React from "react";

// Import slick-carousel styles
import { EarbudsCard } from "./EarbudsCard";

import { Carousel } from "./Carousel";
import { SmartphoneCards } from "./SmartphoneCards";
import { SmartwatchCard } from "./smartwatchcard";
import { TabletSection } from "./TabletSection";
import { CoverSection } from "./CoverSection";
import { home_carousel_images } from "../data";

export const Home = () => {

  return (<>
  <Carousel imageUrls={home_carousel_images}/>
        <SmartphoneCards/>
        <EarbudsCard/>
        <SmartwatchCard/>
        <TabletSection/>
       <CoverSection/>

</>

);

};
