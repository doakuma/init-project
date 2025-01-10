import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import React from "react";

const CustomSwitch = (props) => {
  const { defaultValue, handleChange, options } = props;
  return (
    <FormControl>
      <FormGroup row>
        {options.map((item, idx) => {
          return (
            <FormControlLabel
              label={item.label}
              control={
                <Switch
                  // checked={item.value === defaultValue}
                  defaultChecked={item.value === defaultValue}
                  inputProps={{ readOnly: item.readOnly }}
                  size={item.size}
                  color={item.color ? item.color : "primary"}
                />
              }
              name={item.name}
              onChange={handleChange}
              key={idx}
              disabled={item.disabled}
              required={item.required}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default CustomSwitch;
