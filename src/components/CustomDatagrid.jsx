import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { koKR } from "@mui/x-data-grid/locales";

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
  return (
    <div className="da-datagrid-wrapper">
      <DataGrid
        columns={gridCols}
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
