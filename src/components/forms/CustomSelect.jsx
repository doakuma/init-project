import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import styled from "@emotion/styled";

const CustomSelect = (props) => {
  const {
    labelId,
    label,
    id,
    name,
    value,
    handleChange,
    options,
    readOnly,
    disabled,
    error,
    required,
    size,
    helperText,
    isMultiple,
  } = props;
  return (
    <SelectWrap
      fullWidth
      disabled={disabled}
      error={error}
      required={required}
      size={size}
    >
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        name={name}
        onChange={handleChange}
        inputProps={{
          readOnly: readOnly,
        }}
        multiple={isMultiple}
      >
        {options.map((item, idx) => {
          return (
            <MenuItem value={item.value} key={idx}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </SelectWrap>
  );
};
export default CustomSelect;

const SelectWrap = styled(FormControl)(() => ({
  gap: "0.25rem",
  "& .MuiFormLabel-root": {
    position: "static",
    transform: "unset",
  },
  "& fieldset": {
    top: 0,
  },
  "& legend": {
    display: "none",
  },
  "& .MuiInputBase-input": {
    minHeight: "unset",
    height: "100%",
  },
}));
