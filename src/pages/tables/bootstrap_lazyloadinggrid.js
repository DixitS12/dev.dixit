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

var products = [
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
  {
    key: 16,
    id: 16,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 17,
    id: 17,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 18,
    id: 18,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 19,
    id: 19,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 20,
    id: 20,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 21,
    id: 21,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 22,
    id: 22,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 23,
    id: 23,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 24,
    id: 24,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 25,
    id: 25,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 26,
    id: 26,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 27,
    id: 27,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 28,
    id: 28,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "iDixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 29,
    id: 29,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 30,
    id: 30,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 31,
    id: 31,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 32,
    id: 32,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 33,
    id: 33,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 34,
    id: 34,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 35,
    id: 35,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 36,
    id: 36,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 37,
    id: 37,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 38,
    id: 38,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 39,
    id: 39,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 40,
    id: 40,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 41,
    id: 41,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 42,
    id: 42,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 43,
    id: 43,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "iDixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 44,
    id: 44,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 45,
    id: 45,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 46,
    id: 46,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 47,
    id: 47,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 48,
    id: 48,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 49,
    id: 49,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 50,
    id: 50,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 51,
    id: 51,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 52,
    id: 52,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 53,
    id: 53,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 54,
    id: 54,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 55,
    id: 55,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 56,
    id: 56,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 57,
    id: 57,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 58,
    id: 58,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "iDixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 59,
    id: 59,
    CaseTypeName: "Training",
    CaseOwnerDisplayName: "Dixit Solanki",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
  {
    key: 60,
    id: 60,
    CaseTypeName: "Acknowledgment",
    CaseOwnerDisplayName: "Vijay Prajapati",
    CaseCreatedDate: "2021-04-08T07:06:15.697",
    CaseDue: "08/31/2021",
  },
];

var init = [
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

  //   const fetchMoreData = React.useCallback(() => {
  //     var abc;
  //     if (prod.length >= 60) {
  //       sethasMore(false);
  //       console.log("sethasMore value change", hasMore);
  //       return;
  //     } else {
  //       abc = products.slice(prod.length, prod.length + 15);
  //       console.log("abc---", abc);
  //     }
  //     setTimeout(() => {
  //       setprod((prod) => prod.concat(abc));
  //     }, 1500);
  //   }, [prod.length]);

  const fetchMoreData = () => {
    var abc;
    if (prod.length >= 60) {
      sethasMore(false);
      console.log("sethasMore value change", hasMore);
      return;
    } else {
      abc = products.slice(prod.length, prod.length + 15);
      console.log("abc---", abc);
    }
    setTimeout(() => {
      setprod((prod) => prod.concat(abc));
    }, 1500);
  };

  return (
    <>
      <div
        className="ui-table react-bs-table"
        style={{ padding: "2rem", paddingTop: "0rem" }}
      >
        <InfiniteScroll
          dataLength={prod.length}
          hasMore={hasMore}
          next={fetchMoreData}
          loader={<h4>Loading...</h4>}
          height={400}
          // endMessage={
          //   <p style={{ textAlign: "center" }}>
          //     <b>Yay! You have seen it all</b>
          //   </p>
          // }
        >
          <BootstrapTable
            key={prod.id}
            bootstrap4
            keyField="id"
            data={prod}
            columns={columns}
            defaultSorted={defaultSorted}
          />
        </InfiniteScroll>
      </div>
    </>
  );
}
