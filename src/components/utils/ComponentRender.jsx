import React from "react";
import {
  CustomButton,
  CustomInput,
  CustomRadio,
  CustomCheckbox,
  CustomSelect,
  CustomSwitch,
} from "@/components";

export const ComponentRender = (item, type) => {
  switch (type) {
    case "custombutton":
      return <CustomButton {...item} />;
    case "custominput":
      return <CustomInput {...item} />;
    case "customradio":
      return <CustomRadio {...item} />;
    case "customcheckbox":
      return <CustomCheckbox {...item} />;
    case "customselect":
      return <CustomSelect {...item} />;
    case "customswitch":
      return <CustomSwitch {...item} />;
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
export const ComponentPropsRender = (data) => {
  const typeRender = (type) => {
    if (type.includes("{")) {
      return <pre>{type}</pre>;
    } else {
      return type;
    }
  };
  return (
    <>
      {data?.map((item, idx) => {
        return (
          <>
            <dl className="da-components-props-list" key={idx}>
              <dt className={item.name.includes("?") ? "" : "required"}>
                {item.name}:
              </dt>
              <dd className="type">{typeRender(item.type)}</dd>

              {item.explain && <dd className="explain">{item.explain}</dd>}
            </dl>
          </>
        );
      })}
    </>
  );
};
