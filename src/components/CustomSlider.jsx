import React, { useState } from "react";
import { Slider } from "@mui/material";

const CustomSlider = (props) => {
  const {
    values,
    valueText,
    step,
    valueLabelDisplay,
    min,
    max,
    marks,
    style,
    colors,
  } = props;

  const [value, setValue] = useState(values);

  const onChange = (e, tValues) => {
    const [minVal, maxVal] = tValues;
    if (maxVal > minVal && maxVal !== minVal) {
      setValue(tValues);
    }
  };
  function generateLinearGradient(colors, tValues) {
    // 퍼센티지 배열 생성
    const percentages = tValues.map((val) => (val / max) * 100);

    if (colors.length !== percentages.length + 1) {
      throw new Error(
        "colors 배열의 길이는 tValues 배열의 길이보다 1만큼 더 길어야 합니다."
      );
    }

    // 그라데이션 문자열 생성
    let gradient = "linear-gradient(to right, ";

    colors.forEach((color, index) => {
      if (index === 0) {
        gradient += `${color} 0% ${percentages[0]}%, `;
      } else if (index === colors.length - 1) {
        gradient += `${color} ${percentages[index - 1]}% 100%)`;
      } else {
        gradient += `${color} ${percentages[index - 1]}% ${
          percentages[index]
        }%, `;
      }
    });

    return gradient;
  }

  const gradient = generateLinearGradient(colors, value);

  const styles = {
    "& .MuiSlider-track": {
      background: "transparent",
      borderColor: "transparent",
    },
    "& .MuiSlider-thumb": {
      background: "#fff",
      borderColor: "#47D7AC",
      borderWidth: 4,
      borderStyle: "solid",
    },
    "& .MuiSlider-mark": {
      background: "none",
    },
    "& .MuiSlider-rail": {
      opacity: 1,
      background: gradient,
    },
    "& .MuiSlider-valueLabel": {},
  };

  return (
    <Slider
      sx={{ ...styles, ...style }}
      aria-label="Always visible"
      defaultValue={value}
      getAriaValueText={valueText}
      step={step}
      marks={marks}
      valueLabelDisplay={valueLabelDisplay}
      disableSwap={true}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};

export default CustomSlider;
