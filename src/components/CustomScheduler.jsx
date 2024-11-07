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
    highlightedDays.indexOf(props.day.date()) >= 0;
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
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    const days = date.map((item) => {
      return dayjs(item.eventDate).date();
    });
    setHighlightedDays(days);
    //   fakeFetch(date, {
    //     signal: controller.signal,
    //   })
    //     .then(({ daysToHighlight }) => {
    //       console.debug("daysToHighlight", daysToHighlight);
    // setHighlightedDays(daysToHighlight);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       // ignore the error if it's caused by `controller.abort`
    //       if (error.name !== "AbortError") {
    //         throw error;
    //       }
    //     });
    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(daysToHighlight);
    // abort request on unmount
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
          loading={isLoading}
          onMonthChange={handleMonthChange}
          // renderLoading={() => <DayCalendarSkeleton />}
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
