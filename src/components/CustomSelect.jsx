import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

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
  } = props;
  return (
    <FormControl
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
        autoWidth
        inputProps={{
          readOnly: readOnly,
        }}
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
    </FormControl>
  );
};
export default CustomSelect;
