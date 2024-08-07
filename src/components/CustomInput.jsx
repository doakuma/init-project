import React from "react";
import { FormControl, TextField } from "@mui/material";

const CustomInput = (props) => {
  const {
    id,
    label,
    name,
    variant,
    required,
    defaultValue,
    handleChange,
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
        name={name}
        variant={variant}
        required={required}
        defaultValue={defaultValue}
        onChange={handleChange}
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
