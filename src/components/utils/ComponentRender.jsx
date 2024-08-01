import React from "react";
import {
  CustomButton,
  CustomInput,
  CustomRadio,
  CustomCheckbox,
  CustomSelect,
} from "@/components";

export const ComponentRender = (item, type) => {
  switch (type) {
    case "custominput":
      return <CustomInput {...item} />;
    case "customradio":
      return <CustomRadio {...item} />;
    case "customcheckbox":
      return <CustomCheckbox {...item} />;
    case "customselect":
      return <CustomSelect {...item} />;
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
