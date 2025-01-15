import React from "react";
import { ButtonGroup } from "@mui/material";
import { CustomButton } from "..";

const CustomButtonGroup = (props) => {
  const { contents, color, disabled, fullWidth, orientation, size, variant } =
    props;
  return (
    <ButtonGroup
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      orientation={orientation}
      size={size}
      variant={variant}
    >
      {contents.map((item, idx) => {
        return <CustomButton {...item} key={idx} />;
      })}
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
