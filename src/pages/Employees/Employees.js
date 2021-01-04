import { React, useState } from 'react';
import {
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import {
  PeopleOutlineTwoTone,
  Search,
  Add as AddIcon,
  EditOutlined as EditOutlinedIcon,
  DeleteOutlined as DeleteOutlinedIcon,
} from '@material-ui/icons';

import EmployeeForm from './EmployeeForm';
import PageHeader from 'components/PageHeader';
import useTable from 'components/useTable';
import Controls from 'components/controls/Controls';
import Popup from 'components/Popup';
import Notification from 'components/Notification';
import ConfirmDialog from 'components/ConfirmDialog';

import * as employeeService from 'services/employeeService';
import breakpoints from 'services/breakpoints';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: (props) =>
      props.isSmallDevice
        ? theme.spacing(1)
        : props.isMediumDevice
        ? theme.spacing(2)
        : theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingRight: (props) =>
      props.isSmallDevice
        ? theme.spacing(1)
        : props.isMediumDevice
        ? theme.spacing(1.5)
        : theme.spacing(3),
    paddingLeft: (props) =>
      props.isSmallDevice
        ? theme.spacing(1)
        : props.isMediumDevice
        ? theme.spacing(1.5)
        : theme.spacing(3),
  },
  searchInput: {
    width: '100%',
    display: 'flex',
  },
  newButton: {
    display: 'flex',
    marginTop: (props) =>
      props.isMediumDevice ? theme.spacing(1.5) : theme.spacing(0),
  },
}));

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address (Personal)' },
  { id: 'mobile', label: 'Mobile Number', disableSorting: true },
  { id: 'department', label: 'Department' },
  { id: 'actions', label: 'Actions', disableSorting: true },
];

export default function Employees() {
  const classes = useStyles(breakpoints());

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(employeeService.getAllEmployees);
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter((item) => item.fullName.includes(target.value));
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);

    resetForm();
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees);
    setTimeout(() => {
      setRecordForEdit(null);
    }, 500); // diberi sedikit delay agar tombol Add/Update tidak langsung berubah (aneh)
    setNotify({
      isOpen: true,
      message: 'Submitted Successfully',
      type: 'success',
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    employeeService.deleteEmployee(id);
    setRecords(employeeService.getAllEmployees);
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'success',
    });
  };

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Grid container alignItems="center">
          <Grid item md={7} xs={12}>
            <Controls.Input
              className={classes.searchInput}
              label="Search Employees"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={handleSearch}
            />
          </Grid>
          <Grid container item md={5} xs={12} justify="flex-end">
            <Controls.Button
              text="Add New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
            />
          </Grid>
        </Grid>
        <Grid container style={{ overflowX: 'auto' }}>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>
                    <Controls.ActionButton
                      color="primary"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <EditOutlinedIcon fontSize="small" />
                    </Controls.ActionButton>
                    <Controls.ActionButton
                      color="secondary"
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: 'Are you sure to delete this record?',
                          subTitle: "You can't undo this operation",
                          onConfirm: () => onDelete(item.id),
                        });
                      }}
                    >
                      <DeleteOutlinedIcon fontSize="small" />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
        </Grid>
        <TblPagination />
      </Paper>

      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
