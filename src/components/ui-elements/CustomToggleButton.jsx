import styled from "@emotion/styled";
import {
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
} from "@mui/material";
import React from "react";

const CustomToggleButton = (props) => {
  const {
    options,
    value,
    handleChange,
    color = "primary",
    exclusive = true,
  } = props;
  return (
    <ToggleWrap
      color={color}
      value={value}
      onChange={handleChange}
      exclusive={exclusive}
    >
      {options.map((item, idx) => {
        const { label, value } = item;
        return (
          <ToggleButton value={value} key={idx}>
            {label}
          </ToggleButton>
        );
      })}
    </ToggleWrap>
  );
};

export default CustomToggleButton;

const ToggleWrap = styled(ToggleButtonGroup)(() => ({
  [`&.${toggleButtonGroupClasses.root}`]: {
    border: "1px solid rgba(0, 0, 0, 0.54)",
  },
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: "0.25rem",
    padding: "0.25rem 0.5rem",
    border: 0,
  },
}));
