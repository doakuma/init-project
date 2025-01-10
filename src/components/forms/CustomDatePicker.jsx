import React from "react";
import { FormControl } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const CustomDatePicker = (props) => {
  const { id, title, label, options, defaultValue, handleChange } = props;
  console.debug("handlechange", handleChange);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <FormControl>
        <DatePicker
          onChange={handleChange}
          defaultValue={dayjs(defaultValue)}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
