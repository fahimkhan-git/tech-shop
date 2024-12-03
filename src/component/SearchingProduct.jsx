import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Rating, Stack, Slider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

// Define valuetext for price slider
function priceValuetext(value) {
  return `${value} USD`;
}


export const SearchingProduct = () => {
  const value = 3.5;

  return (
    <Box sx={{ backgroundColor: "white", width: "100%", mt: 14, position: 'relative' }}>
      <Box>
        <Typography fontWeight={"bold"} variant="h5">Filters</Typography>

        {/* PRICE SLIDER */}
        <Typography fontFamily="sans-serif" fontSize="13px" fontWeight="bold" variant="p">PRICE</Typography>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Small steps"
            defaultValue={0}
            getAriaValueText={priceValuetext}
            step={1}
            marks
            min={-10}
            max={50}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>

      {/* BRAND SELECTION */}
      <Box>
        <Typography fontFamily="sans-serif" fontSize="13px" fontWeight="bold" variant="p">BRAND</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Samsung" />
          <FormControlLabel control={<Checkbox />} label="Apple" />
          <FormControlLabel control={<Checkbox />} label="Pixel" />
        </FormGroup>
      </Box>

      {/* CUSTOMER RATING */}
      <Box>
        <Typography fontFamily={"bold"} variant="p">Customer Rating</Typography>
        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Box>
      </Box>

      {/* SPECIFICATIONS */}
      <Box>
        <Typography fontWeight={"bold"} variant="p">Specifications</Typography>
        <Box>
          <Typography fontWeight={"bold"} variant="p">RAM</Typography>
        </Box>
      </Box>

      {/* IMAGE AND PRODUCT DESCRIPTION */}
      <Box position={"absolute"} left={100} top={-14}>
        <Box display={"flex"}>
          <img
            height={300}
            width={400}
            src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-s711blgbins/gallery/in-galaxy-s23-fe-s711-479553-sm-s711blgbins-538355944?$1300_1038_PNG$"
            alt="Samsung Galaxy S23 FE"
          />
          <Typography mt={4} ml={-10} variant="h6">SAMSUNG Galaxy S23 FE (Mint, 256 GB)</Typography>
          <Stack mt={10} ml={-47}>
            <li>8 GB | 256 GB ROM</li>
            <li>16.26 cm (6.4 inch) Full HD+ Display</li>
            <li>50MP + 12MP | 10MP Front Camera</li>
            <li>4500 mAh Battery</li>
            <li>Samsung Exynos 2200 Processor</li>
            <li>1 Year Manufacturer Warranty for Device and 6 months for in-box accessories</li>
          </Stack>
        </Box>
      </Box>

      {/* TEMPERATURE SLIDER (DiscreteSliderSteps) */}
      <Box>
        <Typography fontFamily="sans-serif" fontSize="13px" fontWeight="bold" variant="p">Temperature</Typography>
        
      </Box>

    </Box>
  );
};
