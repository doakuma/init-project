import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormGroup,
} from "@mui/material";
import { isEmpty } from "lodash";

const CustomCheckbox = (props) => {
  const { handleChange, options, defaultValue, row = true } = props;
  return (
    <FormControl>
      <FormGroup row={row}>
        {!isEmpty(options) &&
          options.map((item, idx) => {
            return (
              <FormControlLabel
                value={item.value}
                label={item.label}
                control={
                  <Checkbox
                    defaultChecked={item.value === defaultValue}
                    onchange={handleChange}
                    name={item.name}
                  />
                }
                key={idx}
              />
            );
          })}
      </FormGroup>
    </FormControl>
  );
};

export default CustomCheckbox;
