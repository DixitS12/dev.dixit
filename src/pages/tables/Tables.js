
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from 'axios';
import BootstrapTableGrid from './bootstrap_grid';

export default function Tables() {

  const [list, setList] = useState([]);

  const getCaseList = async () => {
    const config = {
      url: "http://10.17.3.127/api/centralhome/GetCasesList",
      method: "get"
    }
    await axios(config)
      .then(response => {

        if (response?.data?.length) {
          setList(response.data)
        }
      })
  }

  useEffect(() => {
    getCaseList();
  }, [])

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <BootstrapTableGrid getCaseList={getCaseList}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

