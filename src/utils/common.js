import dayjs from "dayjs";
import { isString } from "lodash";
import { useState } from "react";

export const useSearch = (initParams, apiInfo) => {
  const [searchParams, setSearchParams] = useState(initParams);
  const [result, setResult] = useState();

  const handleChange = (e, type, targetName) => {
    // e가 이벤트 객체인지 value 자체인지 판단
    const isEvent = e && e.target !== undefined;
    const name = isEvent ? e.target.name : targetName;
    const value = isEvent ? e.target.value : e;
    const checked = isEvent ? e.target.checked : null;

    switch (type) {
      case "customcheckbox":
        setSearchParams((prev) => {
          const currentValues = isString(prev[name])
            ? prev[name].split(",")
            : prev[name] || [];
          const newValues = checked
            ? [...currentValues, value]
            : currentValues.filter((v) => v !== value);

          return {
            ...prev,
            [name]: newValues,
          };
        });
        break;
      case "customswitch":
        setSearchParams((prev) => ({
          ...prev,
          [name]: checked,
        }));
        break;
      case "customselect":
        // const values = isString(value) ? value :
        setSearchParams((prev) => {
          const currentValues =
            typeof value === "string" ? value.split(",") : value;
          const newValues = checked
            ? [...currentValues, value]
            : currentValues.filter((v) => v !== value);

          return {
            ...prev,
            [name]: currentValues,
          };
        });
        break;
      case "customdatepicker":
        const pickerValue = dayjs(value).format("YYYY.MM.DD");
        setSearchParams((prev) => ({
          ...prev,
          [name]: pickerValue,
        }));
        break;
      default:
        setSearchParams((prev) => ({
          ...prev,
          [name]: value,
        }));
        break;
    }
  };
  const handleClear = () => {
    setSearchParams(initParams);
  };
  const handleSearch = () => {
    console.debug("handleSearch");
  };

  return {
    searchParams,
    handleChange,
    handleClear,
    handleSearch,
    result,
  };
};
