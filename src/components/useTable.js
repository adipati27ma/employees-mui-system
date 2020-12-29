import React from "react";
import PropTypes from "prop-types";
import { Table } from "@material-ui/core";

export default function useTable(record, headCells) {
  const TblContainer = (props) => <Table>{props.children}</Table>;

  TblContainer.propTypes = {
    children: PropTypes.object,
  };

  return {
    TblContainer,
  };
}
