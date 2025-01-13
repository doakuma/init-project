import React, { useMemo, useCallback } from "react";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import useSlider from "./useSlider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomCarousel = ({
  data,
  renderSlideItem,
  itemsPerPage,
  autoplayInterval = 3000,
}) => {
  const {
    visibleData,
    currentIndex,
    isAutoplaying,
    isSliderDisabled,
    handlePrev,
    handleNext,
    startAutoplay,
    stopAutoplay,
  } = useSlider(data, itemsPerPage, autoplayInterval);

  const currentPage = useMemo(
    () => Math.ceil(currentIndex / itemsPerPage) + 1,
    [currentIndex, itemsPerPage]
  );
  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data.length, itemsPerPage]
  );

  const toggleAutoplay = useCallback(() => {
    isAutoplaying ? stopAutoplay() : startAutoplay();
  }, [isAutoplaying, startAutoplay, stopAutoplay]);

  return (
    <CarouselWrapper itemsPerPage={itemsPerPage}>
      <Box className="slider-wrapper">
        <SliderButton
          className="prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ArrowBackIosNewIcon />
        </SliderButton>
        <Grid container className="slider-content">
          {visibleData.map((item, idx) => (
            <Grid item key={idx}>
              {renderSlideItem ? renderSlideItem(item, idx) : item}
            </Grid>
          ))}
        </Grid>
        <SliderButton
          className="next"
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= data.length}
        >
          <ArrowForwardIosIcon />
        </SliderButton>
      </Box>
      <Box className="slider-utils">
        <Pagination current={currentPage} total={totalPages} />
        <IconButton onClick={toggleAutoplay}>
          {isAutoplaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <PagersliderButton onClick={handlePrev}>
          <ArrowBackIosNewIcon />
        </PagersliderButton>
        <PagersliderButton>
          <ArrowForwardIosIcon onClick={handleNext} />
        </PagersliderButton>
      </Box>
    </CarouselWrapper>
  );
};

const Pagination = ({ current, total }) => (
  <Typography variant="label2" component="div" className="slider-pager">
    {current} / {total}
  </Typography>
);

const SliderButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  margin: "auto",
  borderRadius: "0.25rem",
  "&.prev": { left: "-2.5rem" },
  "&.next": { right: "-2.5rem" },
}));

const PagersliderButton = styled(IconButton)(({ theme }) => ({}));

const CarouselWrapper = styled(Paper)(({ itemsPerPage, theme }) => ({
  overflow: "hidden",
  borderRadius: "1rem",
  padding: "1rem 1.5rem 0",
  "& .slider-wrapper": {
    position: "relative",
    margin: "0 1.5rem",
  },
  "& .slider-content": {
    display: "grid",
    gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
    gap: "0.75rem",
    padding: "0.75rem 1.5rem",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  "& .slider-utils": {
    padding: "0.5rem 1.5rem",
    margin: "0 -1.5rem",
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
    background: "#3a3c3f30",
  },
  "& .slider-pager": {
    marginRight: "auto",
  },
}));

export default CustomCarousel;
