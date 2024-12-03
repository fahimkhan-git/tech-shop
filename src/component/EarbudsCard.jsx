import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { CardSection } from "./card";
import { CarousalWrapper } from "./CarousalWrapper";
import { earbuds_data } from "../data";
import { Heading } from "./common/Heading";

export const EarbudsCard = () => {
  
  return <>
    <Box marginTop={1} marginBottom={4} sx={{ backgroundColor: "white" }}>
      <Heading text="Earbuds" />
      <CarousalWrapper>
        {earbuds_data.map((data) => {
          console.log("hi");

          return (
            <CardSection
              key={data.url}//unique value as an identity
              img={data.url}
              heading={data.imageHeading}
              title={data.title}
              description={data.description}
            />
          )
        })}

      </CarousalWrapper>
    </Box>
  </>
}