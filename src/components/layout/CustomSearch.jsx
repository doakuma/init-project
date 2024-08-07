import React from "react";
import { RenderItem } from "@/utils/RenderItem";
import { useSearch } from "@/utils/common";
import { CustomButton } from "..";

const CustomSearch = (props) => {
  const { searchInfo, initParams } = props;

  const { searchParams, handleChange, handleClear, handleSearch, result } =
    useSearch(initParams);
  return (
    <>
      <div className="da-search-wrapper">
        <div className="da-search-content">
          {searchInfo.map((item, idx) => {
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

      {/* guide 화면에서만 사용 */}
      <div className="da-components-source">
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div>
    </>
  );
};

export default CustomSearch;
