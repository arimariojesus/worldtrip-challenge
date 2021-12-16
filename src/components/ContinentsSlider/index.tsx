import { AspectRatio, Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SliderItem } from "./SliderItem";

export default function ContinentsSlider() {
  return (
    <Box my="9" w="100%" maxW={1200} px="6">
      <Swiper modules={[Navigation, Pagination]} navigation pagination>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
