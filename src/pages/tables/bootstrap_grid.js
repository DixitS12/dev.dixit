import React, { useRef } from "react";
import {
    IconButton, Paper, Tooltip, Collapse, Hidden, Link, Box
} from "@material-ui/core";
import { Refresh, ExpandMore } from '@material-ui/icons';
import clsx from "clsx";
import PageTitle from "../../components/PageTitle";
import WidgetActions from "./widgetAction/widget";
import FilterWidget from "./widgetFilter/filterlist";
import logo from "./image/011-boy-5.svg";

// react bootsrtrap table 
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { products, init, columns as table_col, columns as table_columns } from "./data.json";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import InfiniteScroll from "react-infinite-scroll-component";

// css part
import useStyles from "./styles";
import CommonCard from "./card/card";

import { nameFormatter, dateFormatter, ownernameFormatter, attchmentFormatter, MyExportCSV, CustomToggleList } from "./bootstrap_grid_function";
import { toDate } from "date-fns";
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


    const callFormatter = (is_formatter) => {

        switch (is_formatter) {
            case "badge":
                return (
                    nameFormatter
                );
            case "nameEmail":
                return (
                    ownernameFormatter
                );
            case "date":
                return (
                    dateFormatter
                );
            case "attchment":
                return (
                    attchmentFormatter
                );
            default: return (
                <>
                    not bind a Formatter.
                </>
            );
        }
    }


    table_columns.forEach(function (item, index, array) {

        if (item.is_formatter) {
            item.formatter = callFormatter(item.is_formatter);
        }
    });
    // const columns = [
    //     { dataField: 'id', text: 'Id', sort: true, align: 'center', headerAlign: 'center', align: 'center' },
    //     {
    //         dataField: '', text: 'Attchment', align: 'center', headerAlign: 'center', visible: false, align: 'center', formatter: attchmentFormatter, csvExport: false
    //     },

    //     {
    //         dataField: "CaseTypeName", text: "Value Text", sort: true, align: 'left', headerAlign: 'left',
    //         formatter: nameFormatter
    //     },
    //     {
    //         dataField: "CaseOwnerDisplayName", text: "Owner Name", headerAlign: 'center', sort: true,
    //         formatter: ownernameFormatter
    //     },
    //     {
    //         dataField: "CaseCreatedDate", text: "Created Date", headerAlign: 'center', sort: false,

    //         formatter: dateFormatter
    //     },
    //     {
    //         dataField: "CaseDue", text: "Case Due", headerAlign: 'center', sort: false,
    //         formatter: dateFormatter

    //     },
    // ];
    const handleTableChange = (type,
        { page, sizePerPage, filters, sortField, sortOrder },
    ) => {
        const currentIndex = (page - 1) * sizePerPage;
    };
 const handleCardcClick=()=>{
     alert("--------click for info")
 }

 console.log("-----componentRef",componentRef);
    return (
        <>
            <div className="ui-table react-bs-table">
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
                            columns={table_col}
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
                                        <div className="st-grid-top-container">
                                            <PageTitle title="User Case List" button={
                                                <span>
                                                    <Hidden only={['xs', 'sm']}>
                                                        <WidgetActions
                                                            isSelectedRow={isSelectedRow}
                                                            isSelected={isSelected}
                                                            selectedAction={selectedAction}
                                                            setSelectedAction={setSelectedAction} />
                                                    </Hidden>


                                                    <FilterWidget columns={table_columns}

                                                    />
                                                    <Hidden only={['xs', 'sm']}><CustomToggleList {...props.columnToggleProps} /></Hidden>

                                                    <Tooltip title="Refresh">
                                                        <IconButton aria-label="Refresh" onClick={handleRefreshClick}>
                                                            <Refresh />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Hidden only={['xs', 'sm']}>  <MyExportCSV {...props.csvProps} />
                                                        <SearchBar  {...props.searchProps} />
                                                        <ClearSearchButton  {...props.searchProps} /> </Hidden>


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
                                        </div>

                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <hr />
                                            <div className="st-grid-table-container">
                                                <Hidden only={['xs', 'sm']}>
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
                                                </Hidden>
                                                {
                                                    prod && prod.length > 0
                                                        ?
                                                        <Hidden only={['lg', 'md', 'xl']}>
                                                            {
                                                                prod.map((product, index) => (
                                                                    <Box width="100%">
                                                                        <Link onClick={handleCardcClick}>
                                                                            <CommonCard
                                                                                id={'Due Date: ' + product.CaseDue}
                                                                                listId={'case: ' + product.id}
                                                                                title={'Created Date: ' + toDate(product.CaseCreatedDate, 'DD/MM/YYYY')}
                                                                                type={product.CaseTypeName}
                                                                                assignTo={product.CaseOwnerDisplayName}
                                                                                isPopOut={false}
                                                                                isCheckBox={false}
                                                                                IsMultiSelect={false}
                                                                                ImageUrl={logo}
                                                                            />
                                                                        </Link>
                                                                    </Box>
                                                                ))
                                                            }

                                                        </Hidden>
                                                        :
                                                        null
                                                }
                                            </div>

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

