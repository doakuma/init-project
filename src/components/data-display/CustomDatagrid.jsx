import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { koKR } from "@mui/x-data-grid/locales";
import { calculateToRem } from "@/utils/common";
import { isUndefined } from "lodash";

const calcColumnWidth = (value, ref) => {
  const res = value / ref;
  return Number(res.toFixed(1));
};

// Calculate column widths for a grid system
const calculateGridWidth = (columnInfo, refItem) => {
  if (!Array.isArray(columnInfo) || columnInfo.length === 0) {
    throw new Error("Invalid or empty columnInfo array");
  }

  const refWidth = refItem
    ? columnInfo.find((item) => item.field === refItem)
    : columnInfo[0];

  if (!refWidth || typeof refWidth.width === "undefined") {
    throw new Error("Reference column not found or missing width property");
  }

  const refWidthRem = calculateToRem(refWidth.width);

  return columnInfo.map((cols) => ({
    ...cols,
    width: calculateToRem(cols.width),
    flex:
      cols.field !== refItem
        ? calcColumnWidth(calculateToRem(cols.width), refWidthRem)
        : undefined,
  }));
};

const CustomDatagrid = (props) => {
  const {
    gridCols,
    gridRows = [],
    useCheckbox = false,
    handleChangeCheck,
    selectionModal,
    loading = false,
    lodadingType,
  } = props;

  const [colinfo, setColInfo] = useState(() => {
    return calculateGridWidth(gridCols || []);
  });

  // loading bar
  const renderLoading = {
    loadingOverlay: {
      variant: `${lodadingType}-progress`,
      noRowsVariant: "skeleton",
    },
  };

  // nodata
  const renderNodata = () => {
    return (
      <div className="da-datagrid-nodata">
        <FilterNoneIcon />
        <Typography variant="body1">데이터가 없습니다</Typography>
      </div>
    );
  };
  useEffect(() => {
    const updateCols = calculateGridWidth(gridCols);
    setColInfo(updateCols);
  }, [gridCols]);

  return (
    <div className="da-datagrid-wrapper">
      <DataGrid
        {...(loading ? { slotProps: renderLoading } : {})}
        columns={colinfo}
        rows={gridRows}
        checkboxSelection={useCheckbox}
        disableRowSelectionOnClick={!useCheckbox}
        onRowSelectionModelChange={handleChangeCheck}
        rowSelectionModel={selectionModal}
        slotProps={loading && renderLoading}
        slots={{ noRowsOverlay: renderNodata }}
        loading={loading}
        autoHeight
        localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
};

export default CustomDatagrid;
CustomDatagrid.proptypes = {
  gridCols: PropTypes.array.isRequired,
  gridRows: PropTypes.array.isRequired,
  useCheckbox: PropTypes.bool,
  handleChangeCheck: PropTypes.func,
  selectionModal: PropTypes.array,
};
