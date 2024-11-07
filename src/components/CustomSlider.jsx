import { Slider } from "@mui/material";
import React from "react";

const CustomSlider = (props) => {
  const { marks, defaultValue, valueText, step, valueLabelDisplay } = props;

  return (
    <Slider
      aria-label="Always visible"
      defaultValue={defaultValue}
      getAriaValueText={valueText}
      step={step}
      marks={marks}
      valueLabelDisplay={valueLabelDisplay}
    />
  );
};

export default CustomSlider;
