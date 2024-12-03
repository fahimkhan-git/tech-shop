import { Box } from "@mui/material";
import { Carousel } from "./Carousel";
import { SmartphoneCards } from "./SmartphoneCards";
import { home_carousel_images, smartphones_carousel_images } from "../data";



export const Smartphone = () => {
  return <>
    <Carousel imageUrls={smartphones_carousel_images} />
    <SmartphoneCards/>
    <SmartphoneCards/>
    <SmartphoneCards/>
  </>
};
