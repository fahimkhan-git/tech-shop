import { Box,Typography } from "@mui/material"
import { CardSection } from "./card"
import Slider from "react-slick";
import { Heading } from "./common/Heading";
import { CarousalWrapper } from "./CarousalWrapper";

var tabletData = [{
    url: 'https://www.apple.com/in/ipad-10.9/images/overview/hero/hero__ecv967jz1y82_large.jpg',
    title: 'Apple Ipad',
    description: 'Price 60,000'
},
{
    url: 'https://images.samsung.com/in/galaxy-tab-s8/feature/buy/GalaxyTab_S8Ultra_AllColorKV_WithSPen_MO.jpg',
    title: 'S8 Ultra',
    description: 'Price 80,000'
},
{
    url: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/e56c4d9e-9438-43df-a0d2-8c908848fe98.__CR0,0,600,450_PT0_SX600_V1___.png',
    title: 'One Plus Pad Go',
    description: 'Price 25,000'
},
{
    url: 'https://www.91-cdn.com/hub/wp-content/uploads/2023/04/Xiaomi-Pad-6.jpg',
    title: 'Xiaomi Pad',
    description: 'Price 20,000'
},
{
    url: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/realme_pad_x_2_7.jpg',
    title: 'Realme Pad',
    description: 'Price 15,000'
},
{
    url: 'https://www.apple.com/in/ipad-10.9/images/overview/hero/hero__ecv967jz1y82_large.jpg',
    title: 'Apple Ipad',
    description: 'Price 60,000'
},


]



var settings = {
  // dots: true,
  infinite: true,
  speed: 1000,
  autoPlaySpeed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoPlay:true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const TabletSection = () => {
  return <>
      <Box marginTop={1} marginBottom={4} sx={{backgroundColor:"white"}}>
    <Heading text="Tablet" />
        <CarousalWrapper>
        {tabletData.map((data1,index)=>{
            return (
                <CardSection
                key={data1.url}
                img={data1.url}
                heading={data1.imageHeading}
                title={data1.title}
                description={data1.description}
                />
            )
        })}
        </CarousalWrapper>

    </Box>
  </>
}