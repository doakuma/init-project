import React from "react";
import { CustomButton, CustomInput } from "@/components";

export const ComponentRender = (item, type) => {
  switch (type) {
    case "custominput":
      // return <>CustomInput</>;
      return <CustomInput {...item} />;
    case "custombutton":
      return <CustomButton {...item} />;
    default:
      break;
  }
};
export const ComponentInfoRender = (data, type) => {
  return (
    <div className="da-components-source">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export const ComponentPropsRender = (data) => {};