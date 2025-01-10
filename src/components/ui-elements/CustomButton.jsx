import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  return <Button {...props}>{props.label}</Button>;
};

export default CustomButton;
