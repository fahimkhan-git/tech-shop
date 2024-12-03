import { Typography } from "@mui/material"
import { Carousel } from "./Carousel"
import { CoverSection } from "./CoverSection"
import { cover_carousel_images } from "../data"
export const Cover =()=>{
    return <>
    <Carousel imageUrls={cover_carousel_images}/>
    <CoverSection/>
    <CoverSection/>
    <CoverSection/>
    </>
}