import { makeStyles } from "@material-ui/styles";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { init, LazyLoadingColumns, products } from "./FilterWidget/data.json";
const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function BootstrapTableGrid() {
  const [columns, setcolumns] = React.useState(LazyLoadingColumns);
  const [hasMore, sethasMore] = React.useState(true);
  const [prod, setprod] = React.useState(init);

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];
  const fetchMoreData = () => {
    var lazyData;
    if (prod.length >= products.length) {
      sethasMore(false);
      console.log("sethasMore value change", hasMore);
      return;
    } else {
      lazyData = products.slice(prod.length, prod.length + 15);
      console.log("abc---", lazyData);
    }
    setTimeout(() => {
      setprod((prod) => prod.concat(lazyData));
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
