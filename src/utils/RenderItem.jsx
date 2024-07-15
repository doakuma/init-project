import React from "react";
import CustomInput from "@/components/CustomInput";

export const RenderItem = (item) => {
  const { type } = item;
  switch (type) {
    case "text":
      return <CustomInput {...item} />;
    default:
      break;
  }
};
