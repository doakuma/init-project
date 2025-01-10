import React, { useEffect, useState } from "react";
import { Button, FormControl, Tooltip } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar, PickersDay } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const initialValue = dayjs(new Date());

function ServerDay(props, events) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.some(
      (highlightedDay) =>
        highlightedDay.year === props.day.year() &&
        highlightedDay.month === props.day.month() + 1 && // month는 0부터 시작하므로 +1
        highlightedDay.day === props.day.date()
    );

  const eventCount = events.find((e) => {
    return e.eventDate === dayjs(day).format("YYYY-MM-DD");
  });

  return (
    <div>
      <Button>
        {isSelected && (
          <Tooltip title={`${dayjs(day).format("YYYY-MM-DD")} event`}>
            점검대상 {eventCount?.eventCount}
          </Tooltip>
        )}

        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Button>
    </div>
  );
}

const CustomScheduler = (props) => {
  const { defaultValue, daysToHighlight } = props;
  const requestAbortController = React.useRef(null);
  const [highlightedDays, setHighlightedDays] = useState([]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    // 날짜를 { year, month, day } 객체로 변환하여 배열로 저장
    const days = date.map((item) => {
      const eventDate = dayjs(item.eventDate);
      return {
        year: eventDate.year(),
        month: eventDate.month() + 1, // month는 0부터 시작하므로 1을 더해줍니다.
        day: eventDate.date(),
      };
    });
    setHighlightedDays(days);
    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(daysToHighlight);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, [daysToHighlight]);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }
    //   setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(daysToHighlight);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <FormControl>
        <DateCalendar
          className="da-scheduler"
          defaultValue={initialValue}
          onMonthChange={handleMonthChange}
          slots={{
            day: (param) => ServerDay(param, daysToHighlight),
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default CustomScheduler;
