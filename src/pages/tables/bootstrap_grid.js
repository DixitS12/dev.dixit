import React, { useRef, useEffect } from "react"
import { makeStyles } from "@material-ui/styles";
import Widget from "../../components/Widget";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    }
}))

const abc = [
    { dataField: 'id', text: 'Id', sort: true, align: 'center', headerAlign: 'center', align: 'center' },
    {
        dataField: "CaseTypeName", text: "Case Type Name", sort: true, align: 'center', headerAlign: 'center',

    },
    {
        dataField: "CaseOwnerDisplayName", text: "Owner Name", sort: true,

    },
    { dataField: "CaseCreatedDate", text: "Created Date", sort: false },
    {
        dataField: "CaseDue", text: "Case Due", sort: false,


    },
    {
        text: "Action", align: 'center', headerAlign: 'center',

        csvExport: false
    },
];

export default function BootstrapTableGrid() {
    const componentRef = useRef();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [rowData, setRowData] = React.useState([]);
    var [columns, setcolumns] = React.useState(abc);
    const [isSelected, setSelected] = React.useState(false);
    const [isSelectedRow, setSelectedRow] = React.useState([]);




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




    return (
        <>

            <Widget upperTitle noBodyPadding bodyClass={classes.tableOverflow} isSelectedRow={isSelectedRow} isSelected={isSelected}>
                <div className="ui-table react-bs-table" style={{ padding: '1rem' }}>
                    <BootstrapTable
                        keyField="id"
                        columns={columns}
                        data={products}
                    />
                </div>
              )

        </Widget>



        </>
    );
}

