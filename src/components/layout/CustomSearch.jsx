import React from "react";
import { RenderItem } from "@/utils/RenderItem";
import { useSearch } from "@/utils/common";
import { CustomButton } from "..";

const CustomSearch = (props) => {
  const { searchInfo, handleChange, handleClear, handleSearch, searchParams } =
    props;

  const searchStructure = searchInfo.map((item) => {
    if (item.type === "customselect" && item.isMultiple) {
      return {
        ...item,
        value: searchParams[item.name],
      };
    } else {
      return { ...item };
    }
  });
  return (
    <>
      <div className="da-search-wrapper">
        <div className="da-search-content">
          {searchStructure.map((item, idx) => {
            const { type } = item;
            Object.assign(item, {
              handleChange: (e) => handleChange(e, type),
            });
            return (
              <div className="da-search-item" key={idx}>
                {RenderItem(item, type)}
              </div>
            );
          })}
        </div>
        <div className="da-search-actions">
          <CustomButton
            variant="outlined"
            label="초기화"
            onClick={handleClear}
          />
          <CustomButton
            variant="contained"
            label="검색"
            onClick={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default CustomSearch;
