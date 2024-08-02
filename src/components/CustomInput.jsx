import React from "react";
import { FormControl, TextField } from "@mui/material";

const CustomInput = (props) => {
  const {
    id,
    label,
    variant,
    required,
    defaultValue,
    onChange,
    readOnly,
    disabled,
    type,
    helperText,
  } = props;

  return (
    <FormControl disabled={disabled}>
      <TextField
        id={id}
        label={label}
        name={id}
        variant={variant}
        required={required}
        defaultValue={defaultValue}
        // onChange={onChange}
        InputProps={{
          readOnly: readOnly,
        }}
        disabled={disabled}
        type={type && type}
        helperText={helperText && helperText}
      />
    </FormControl>
  );
};

export default CustomInput;
