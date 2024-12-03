//Earbudscard.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
import { CardSection } from "./card";

const imageEarbuds = [
  'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4K0VvSjFQM0pLN0VsK2pmbVJmK1hUZDhiZjRKRUJ6ZU96N3VHVCtXdS9WdVUzdWN4ZENIZEJCc01VOW1QK3BzTGVNdlIyKy9FMURXQmRzdk1KZVhnSDh1WjFlQndWT3ZmeW5zc3dRUHliS2dB&traceId=1tps://www.mistermobile.com.sg/wp-content/uploads/2024/09/Work-File-iPhone-16-Blog-Banner-2048x921.jpg',
  'https://www.mistermobile.com.sg/wp-content/uploads/2024/09/Work-File-iPhone-16-Blog-Banner-2048x921.jpg',
  'https://via.placeholder.com/300x200.png?text=Image+3',
  'https://via.placeholder.com/300x200.png?text=Image+4',
  'https://via.placeholder.com/300x200.png?text=Image+5',
  'https://via.placeholder.com/300x200.png?text=Image+6',
  'https://via.placeholder.com/300x200.png?text=Image+7',
  'https://via.placeholder.com/300x200.png?text=Image+8'
];

export const EarbudsCard = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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

  return (
    <Box className="slider-container" marginTop={10}>
      <Typography variant="h4">Earbuds</Typography>
      <Slider {...settings}>
        {imageEarbuds.map((url, index, arr) => {
          console.log("url", url, arr)
          return (
            <CardSection 
            key={index}
            img={url} 
            heading={`Slide ${index + 1}`} 
            Title={`Earbuds ${index + 1}`} 
            Description={` This is a description for Image ${index + 1}`}
            />
            
          )
        })}
      </Slider>
    </Box>
  );
};
