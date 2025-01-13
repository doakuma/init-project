import React from "react";
import { FormControl, TextField } from "@mui/material";
import styled from "@emotion/styled";

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
    fullWidth,
  } = props;

  return (
    <FormControl disabled={disabled} fullWidth={fullWidth}>
      <TextInput
        {...props}
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

const TextInput = styled(TextField)((props) => {
  return {
    gap: "0.5rem",
    "& .MuiFormLabel-root": {
      position: "static",
      transform: "unset",
    },
    "& .MuiInputBase-root": {
      height: "100%",
      fieldset: {
        top: 0,
      },
      legend: {
        display: "none",
      },
      "& .MuiInputBase-input": {
        height: "100%",
      },
    },
  };
});
