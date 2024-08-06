import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const CustomDatagrid = (props) => {
  const { gridCols, gridRows = [], useCheckbox = false } = props;
  return (
    <DataGrid
      columns={gridCols}
      rows={gridRows}
      checkboxSelection={useCheckbox}
      disableRowSelectionOnClick={!useCheckbox}
    />
  );
};

export default CustomDatagrid;
CustomDatagrid.proptypes = {
  gridCols: PropTypes.array.isRequired,
  gridRows: PropTypes.array.isRequired,
};
