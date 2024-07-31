import React from "react";
import { CustomButton, CustomInput, CustomIcon } from "@/components";

export const RenderItem = (item, type) => {
  switch (type) {
    case "custominput":
      return <CustomInput {...item} />;
    case "custombutton":
      return <CustomButton {...item} />;
    case "customicon":
      return <CustomIcon {...item} />;
    default:
      break;
  }
};
