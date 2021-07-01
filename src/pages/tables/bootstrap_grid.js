import React, { useRef } from "react";
import {
    IconButton, Paper, Tooltip, Collapse,
} from "@material-ui/core";
import { Refresh, ExpandMore } from '@material-ui/icons';


import clsx from "clsx";
import PageTitle from "../../components/PageTitle";
import Widget from "./ActionWidget/Widget";
import FilterWidget from "./FilterWidget/filter_widget";
import WidgetColumnHide from "./columnHideWidget/column_hide";
import WidgetExport from "./widgetExport/widgetexport";

import CaseModel from './modal/model_case';
// react bootsrtrap table 

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { products, init } from "./FilterWidget/data.json";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import InfiniteScroll from "react-infinite-scroll-component";
import useStyles from "./styles";
import columnsContext from "./Context/context";
import {nameFormatter, dateFormatter, ownernameFormatter, attchmentFormatter} from "./bootstrap_grid_function";
 function BootstrapTableGrid(props) {

    const componentRef = useRef();
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);
    const [rowData, setRowData] = React.useState([]);
    const [isSelected, setSelected] = React.useState(false);
    const [isSelectedRow, setSelectedRow] = React.useState([]);
    const [expanded, setExpanded] = React.useState(true);
    const { SearchBar, ClearSearchButton } = Search;
    const [hasMore, sethasMore] = React.useState(true);
    const [prod, setprod] = React.useState(init);
    const [selectedAction, setSelectedAction] = React.useState("")



    const defaultSorted = [{
        dataField: 'CaseTypeName',
        order: 'asc'
    }];

    const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (
            <React.Fragment>
                <WidgetExport onExport={props.onExport} />
            </React.Fragment>
        );
    };
    const handleRefreshClick = () => {
        props.getCaseList();
    }
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
            <columnsContext.Provider value={columns}>
             <WidgetColumnHide color="secondary" onColumnToggle={onColumnToggle} />
            </columnsContext.Provider>
         
        
    );



    const fetchMoreData = () => {
        var abc;
        if (prod.length >= products.length) {
            sethasMore(false);
            console.log("end of page ", hasMore);
            return;
        } else {
            abc = products.slice(prod.length, prod.length + 15);

        }
        setTimeout(() => {
            setprod((prod) => prod.concat(abc));
        }, 1500);

    };


    const columns = [
        { dataField: 'id', text: 'Id', sort: true, align: 'center', headerAlign: 'center', align: 'center' },
        { dataField: '', text: 'Attchment', align: 'center', headerAlign: 'center', align: 'center', formatter: attchmentFormatter, csvExport: false },

        {
            dataField: "CaseTypeName", text: "Case Type Name", sort: true, align: 'center', headerAlign: 'center',
            // formatter: cell => selectOptions[cell],
            // filter: selectFilter({
            //     options: selectOptions
            // }),
            formatter: nameFormatter
        },
        {
            dataField: "CaseOwnerDisplayName", text: "Owner Name", headerAlign: 'center', sort: true,
            // filter: textFilter(),
            formatter: ownernameFormatter
        },
        {
            dataField: "CaseCreatedDate", text: "Created Date", headerAlign: 'center', sort: false,

            formatter: dateFormatter
        },
        {
            dataField: "CaseDue", text: "Case Due", headerAlign: 'center', sort: false,
            formatter: dateFormatter

        },
    ];
    const handleTableChange = (
        type,
        { page, sizePerPage, filters, sortField, sortOrder },
    ) => {
        const currentIndex = (page - 1) * sizePerPage;
    };

    return (
        <>
            <CaseModel
                open={open}
                rowData={rowData}
                handleClose={handleClose}>
            </CaseModel>
            <div className="ui-table react-bs-table" style={{ padding: '1rem' }}>
                <Paper className={classes.paper}>
                    <InfiniteScroll
                        dataLength={prod.length}
                        hasMore={hasMore}
                        next={fetchMoreData}
                        loader={<h6></h6>}
                        height={800}>
                        <ToolkitProvider
                            bootstrap4
                            keyField='id'
                            data={prod}
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
                                    <>
                                        <PageTitle title="User Case List" button={
                                            <span>
                                                <Widget
                                                    isSelectedRow={isSelectedRow}
                                                    isSelected={isSelected}
                                                    selectedAction={selectedAction}
                                                    setSelectedAction={setSelectedAction} />

                                                <FilterWidget

                                                />
                                                <CustomToggleList {...props.columnToggleProps} />
                                                <Tooltip title="Refresh">
                                                    <IconButton aria-label="Refresh" onClick={handleRefreshClick}>
                                                        <Refresh />
                                                    </IconButton>
                                                </Tooltip>

                                                {/* <ReactToPrint
                                    trigger={() =>
                                        <Tooltip title="Print">
                                            <IconButton aria-label="Print" >
                                                <Print />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    content={() => componentRef.current}
                                /> */}
                                                <MyExportCSV {...props.csvProps} />
                                                <SearchBar  {...props.searchProps} />
                                                <ClearSearchButton  {...props.searchProps} />

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
                                                id="table-resize"
                                                selectRow={selectRow}
                                                defaultSorted={defaultSorted}
                                                keyField='id'
                                                hover
                                                pagination={false}
                                                filter={filterFactory()}
                                                filterPosition="top"
                                                {...props.baseProps}
                                                remote={{ filter: true, sort: true, pagination: true }}
                                                onTableChange={handleTableChange}
                                            />
                                        </Collapse>
                                    </>
                                )
                            }
                        </ToolkitProvider>
                    </InfiniteScroll>
                </Paper>
            </div>
        </>
    );
}
export default BootstrapTableGrid;

