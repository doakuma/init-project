import React, { Fragment } from "react";

const CustomTable = (props) => {
  const { columns, colsInfo, tableData, isVertical = false } = props;
  return (
    <div className="da-table-wrapper">
      <table>
        <colgroup>
          {colsInfo.map((cols, idx) => {
            return <col style={{ width: `${cols}%` }} key={idx} />;
          })}
        </colgroup>
        {isVertical && (
          <thead>
            <tr>
              {columns.map((item, idx) => {
                return (
                  <th scope="rows" key={idx}>
                    {item.label}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {isVertical ? (
            <>
              {tableData.map((row, idx) => {
                return (
                  <tr key={idx}>
                    {columns.map((cell, idx2) => {
                      return <td key={idx2}>{row[cell.name]}</td>;
                    })}
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              {columns.map((row, idx) => {
                return (
                  <tr key={idx}>
                    {row.map((cell, idx2) => {
                      return (
                        <Fragment key={idx2}>
                          <th>{cell.label}</th>
                          <td colSpan={cell.colspan}>{tableData[cell.name]}</td>
                        </Fragment>
                      );
                    })}
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
