import { isString } from "lodash";
import { useState } from "react";

export const useSearch = (initParams, apiInfo) => {
  const [searchParams, setSearchParams] = useState(initParams);
  const [result, setResult] = useState();

  const handleChange = (e, type) => {
    const { name, value, checked } = e.target;

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
