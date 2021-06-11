import React, { useRef } from "react";
import { IconButton, Paper,Tooltip,Collapse } from "@material-ui/core";
import { Refresh, CloudDownload, Print, ExpandMore } from '@material-ui/icons';

import clsx from "clsx";
import ReactToPrint from "react-to-print";

import PageTitle from "../../components/PageTitle";
import Widget from "./ActionWidget/Widget";
import FilterWidget from "./FilterWidget/filter_widget";
import WidgetColumnHide from "./columnHideWidget/column_hide";
import CaseModel from './modal/model_case';
// react bootsrtrap table 

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import useStyles from "./styles";
import logo from "./image/011-boy-5.svg";
export default function BootstrapTableGrid(props) {

    const componentRef = useRef();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [rowData, setRowData] = React.useState([]);
    const [isSelected, setSelected] = React.useState(false);
    const [isSelectedRow, setSelectedRow] = React.useState([]);
    const [expanded, setExpanded] = React.useState(true);
    const { SearchBar, ClearSearchButton } = Search;
    const defaultSorted = [{
        dataField: 'CaseTypeName',
        order: 'desc'
    }];
    const defaultProps = {
        loading: true
      }
    const selectOptions = {
        'Acknowledgment': 'Acknowledgment',
        'Training': 'Training',
    };
    const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (
            <Tooltip title="Download">
                <span> <IconButton aria-label="Download" style={{ marginRight: '.5rem' }} onClick={handleClick}>
                    <CloudDownload />
                </IconButton></span></Tooltip>
        );
    };
    
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 8,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });
    
    const handleRefreshClick = () => {
        props.getCaseList();
    }
    const handleClickOpen = (row_data) => {
        setOpen(true);
        setRowData(row_data);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: (row, isSelect, rowIndex, e) => {

            setSelected(isSelect)
            setSelectedRow(row)
        },
        onSelectAll: (isSelect, rows, e) => {
            setSelected(isSelect)
            setSelectedRow(rows)
        }
    };
    const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
        <WidgetColumnHide color="secondary" columns={columns} onColumnToggle={onColumnToggle} />
    );
    function nameFormatter(cell, row) {

        if (row.CaseTypeName === "Training") {
            return (
                <div className="">
                    <span className="badge bg-light-primary">
                        {row.CaseTypeName}
                    </span>
                </div>
            );
        } else {
            return (
                <div className="">
                    <span className="badge bg-light-success">
                        {row.CaseTypeName}
                    </span></div>

            );
        }
    }
    function dateFormatter(cell, row) {

        return (
            <div className="text-primary d-flex align-items-center ">
                { row.CaseDue}
            </div>
        );
    }
    function ownernameFormatter(cell, row) {

        return (
            <div className="d-flex align-items-center">
                <div className="symbol-label">
                    <img className="" src={logo} alt="photo" />
                </div>
                <div className="ml-4">
                    <div className=" font-weight-bolder ">{row.CaseOwnerDisplayName}</div>
                    <a href="#" className="font-weight-bold text-muted">dummy@dummy.com</a>
                </div>
            </div>
        );
    }
    function actionFormatter(cell, row) {

        return (

            <div>
                <button onClick={() => handleClickOpen(row)} className="btn btn-sm  btn-outline-secondary mr-1"><i className="fa fa-pencil"></i></button>
            </div>
        );
    }


    const products = [
        { id: 1, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'Vijay Prajapati', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 2, CaseTypeName: 'Training', CaseOwnerDisplayName: 'Dixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 3, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'Vijay Prajapati', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 4, CaseTypeName: 'Training', CaseOwnerDisplayName: 'Dixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 5, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'Vijay Prajapati', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 6, CaseTypeName: 'Training', CaseOwnerDisplayName: 'Dixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 7, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'Vijay Prajapati', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 8, CaseTypeName: 'Training', CaseOwnerDisplayName: 'Dixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 9, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'Vijay Prajapati', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 10, CaseTypeName: 'Training', CaseOwnerDisplayName: 'Dixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 11, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'Vijay Prajapati', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 12, CaseTypeName: 'Training', CaseOwnerDisplayName: 'Dixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 13, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'iDixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 14, CaseTypeName: 'Training', CaseOwnerDisplayName: 'Dixit Solanki', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' },
        { id: 15, CaseTypeName: 'Acknowledgment', CaseOwnerDisplayName: 'Vijay Prajapati', CaseCreatedDate: '2021-04-08T07:06:15.697', CaseDue: '08/31/2021' }
    ];
    const columns = [
        { dataField: 'id', text: 'Id', sort: true, align: 'center', headerAlign: 'center', align: 'center' },
        {
            dataField: "CaseTypeName", text: "Case Type Name", sort: true, align: 'center', headerAlign: 'center',
            formatter: cell => selectOptions[cell],
            filter: selectFilter({
                options: selectOptions
            }),
            formatter: nameFormatter
        },
        {
            dataField: "CaseOwnerDisplayName", text: "Owner Name", sort: true,
            filter: textFilter(),
            formatter: ownernameFormatter
        },
        { dataField: "CaseCreatedDate", text: "Created Date", sort: false },
        {
            dataField: "CaseDue", text: "Case Due", sort: false,
            formatter: dateFormatter

        },
        {
            dataField: "action",
            text: "Action", align: 'center', headerAlign: 'center',
            formatter: actionFormatter,
            csvExport: false
        },
    ];


  

    return (
        <>
            <CaseModel
                open={open}
                rowData={rowData}
                handleClose={handleClose}
            ></CaseModel>
            <div className="ui-table react-bs-table" style={{ padding: '1rem' }}>

                <ToolkitProvider
                    bootstrap4
                    keyField='id'
                    data={products}
                    columns={columns}
                    search
                    columnToggle
                    exportCSV={{
                        fileName: 'dixit.csv',
                        noAutoBOM: false,
                        blobType: 'text/csv;charset=ansi'
                    }}
                >
                    {
                        props => (
                            <Paper className={classes.paper}>
                                <PageTitle title="User Case List" button={

                                    <span>

                                        <Widget 
                                        isSelectedRow={isSelectedRow} 
                                        isSelected={isSelected} />
                                        <FilterWidget />
                                        <CustomToggleList {...props.columnToggleProps} />
                                        <Tooltip title="Refresh">
                                            <IconButton aria-label="Refresh" onClick={handleRefreshClick}>
                                                <Refresh />
                                            </IconButton>
                                        </Tooltip>
                                        <ReactToPrint
                                            trigger={() =>
                                                <Tooltip title="Print">
                                                    <IconButton aria-label="Print" >
                                                        <Print />
                                                    </IconButton>
                                                </Tooltip>
                                            }
                                            content={() => componentRef.current}
                                        />
                                        <MyExportCSV {...props.csvProps} />
                                        <SearchBar  {...props.searchProps} />
                                        <Tooltip title="Expand/Collaps">
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: expanded
                                                })}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more">
                                                <ExpandMore />
                                            </IconButton>
                                        </Tooltip>
                                    </span>

                                } />
 
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <hr />
                                    <BootstrapTable ref={componentRef}
                                        selectRow={selectRow}
                                        defaultSorted={defaultSorted}
                                        keyField='id'
                                        hover
                                        defaultProps ={defaultProps }
                                        pagination={pagination}
                                        filter={filterFactory()}
                                        filterPosition="top"
                                        {...props.baseProps}
                                    />
                                </Collapse>
                            </Paper>
                        )
                    }
                </ToolkitProvider>

            </div>



        </>
    );
}

