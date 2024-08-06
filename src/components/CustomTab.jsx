import React from "react";
import { Tabs, Tab } from "@mui/material";

const CustomTab = (props) => {
  const {
    tabValue,
    handleChange,
    tabInfo,
    tabColor,
    tabCentered,
    tabOrientation,
  } = props;
  return (
    <Tabs
      value={tabValue}
      onChange={handleChange}
      textColor={tabColor}
      indicatorColor={tabColor}
      centered={tabCentered}
      orientation={tabOrientation}
    >
      {tabInfo.map((item, idx) => {
        return (
          <Tab
            label={item.label}
            value={item.value}
            disabled={item.disabled}
            key={idx}
          />
        );
      })}
    </Tabs>
  );
};

export default CustomTab;
