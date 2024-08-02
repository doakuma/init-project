import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { isEmpty } from "lodash";

const CustomRadio = (props) => {
  const {
    name,
    value,
    handleChange,
    options,
    defaultValue,
    row = true,
  } = props;
  return (
    <FormControl>
      <RadioGroup
        row={row}
        name={name}
        // value={value && value}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {!isEmpty(options) &&
          options.map((item, idx) => {
            return (
              <FormControlLabel
                value={item.value}
                label={item.label}
                control={<Radio />}
                key={idx}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadio;
