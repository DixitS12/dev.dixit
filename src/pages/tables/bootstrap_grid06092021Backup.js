import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Widget from "../../components/Widget/Widget";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import InfiniteScroll from "react-infinite-scroll-component";
const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

const abc = [
  {
    dataField: "id",
    text: "Id",
    sort: true,
    align: "center",
    headerAlign: "center",
    align: "center",
  },
  {
    dataField: "CaseTypeName",
    text: "Case Type Name",
    sort: true,
    align: "center",
    headerAlign: "center",
  },
  {
    dataField: "CaseOwnerDisplayName",
    text: "Owner Name",
    sort: true,
  },
  { dataField: "CaseCreatedDate", text: "Created Date", sort: false },
  {
    dataField: "CaseDue",
    text: "Case Due",
    sort: false,
  },
  {
    text: "Action",
    align: "center",
    headerAlign: "center",

    csvExport: false,
  },
];

const products = [
  {
    id: 16,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 17,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 18,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 19,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 20,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 21,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 22,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 23,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 24,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 25,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 26,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 27,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 28,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "iDixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 29,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 30,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
];

const init = [
  {
    id: 1,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 2,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 3,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 4,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 5,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 6,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 7,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 8,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 9,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 10,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 11,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 12,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 13,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "iDixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 14,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    id: 15,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
];

export default function BootstrapTableGrid() {
  const [columns, setcolumns] = React.useState(abc);
  const [hasMore, sethasMore] = React.useState(true);
  const [prod, setprod] = React.useState(init);

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const fetchMoreData = () => {
    // if (this.state.items.length >= 500) {
    //   this.setState({ hasMore: false });
    //   return;
    // }
    // // a fake async api call like which sends
    // // 20 more records in .5 secs
    // setTimeout(() => {
    //   this.setState({
    //     items: this.state.items.concat(Array.from({ length: 20 }))
    //   });
    // }, 500);
    console.log("prod----------", prod);
    if (prod.length >= 60) {
      sethasMore(false);
      return;
    } else {
      let count = prod.length + 1;
      init.forEach((element) => {
        element.id = count++;
      });
    }

    setTimeout(() => {
      setprod((prod) => [...prod, ...init]);
    }, 1500);
  };

  return (
    <>
      {/* <Widget
        upperTitle
        noBodyPadding
        bodyClass={classes.tableOverflow}
        isSelectedRow={isSelectedRow}
        isSelected={isSelected}
      >
        <div className="ui-table react-bs-table" style={{ padding: "1rem" }}>
          <BootstrapTable
            keyField="id"
            id="tabel-scroll"
            columns={columns}
            data={products}
          />
        </div>
      </Widget> */}
      <InfiniteScroll
        dataLength={prod.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        height={400}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      >
        {/* <div id="tabel-scroll"> */}
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={prod}
          columns={columns}
          defaultSorted={defaultSorted}
        />
        {/* </div> */}
      </InfiniteScroll>
    </>
  );
}
