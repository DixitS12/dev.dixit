import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import Widget from "../../components/Widget";

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables(props) {
  const classes = useStyles();


  useEffect(() => {
  }, [])

  var muidata_columns = ["ID", "Case Type Name", "Owner ", 'Created Date ', "Due Date"];
  const muidatatableData = [
    [5828091, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828092, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828093, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828094, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828095, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828096, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828097, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828098, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [5828099, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280100, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280102, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280103, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280104, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280105, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280106, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280107, "Training", "Dixit Solanki", "2021-04-08T07:06:15.697", "08/31/2021"],
    [58280108, "Acknowledgment", "Vijay Prajapati", "2021-04-08T07:06:15.697", "08/31/2021"],
  ];

  for (var i in props.muidataTable_list) {
    // mou  grid 
    muidatatableData.push([props.muidataTable_list[i].CaseID, props.muidataTable_list[i].CaseTypeName, props.muidataTable_list[i].CaseOwnerDisplayName, props.muidataTable_list[i].CaseCreatedDate, props.muidataTable_list[i].CaseDue
    ]);
  }
  return (
    <React.Fragment>
    
      <Widget upperTitle noBodyPadding bodyClass={classes.tableOverflow} style={{  padding: '1.5rem' }}>

        <MUIDataTable
          title="Case List"
          data={muidatatableData}
          columns={muidata_columns}
          options={{
            filterType: "checkbox",
          }}
        />
      </Widget>
    </React.Fragment>

  );
}

