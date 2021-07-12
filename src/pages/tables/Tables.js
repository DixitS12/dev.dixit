
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from 'axios';
import BootstrapTableGrid from './bootstrap_grid';
import * as config from './config';
export default function Tables() {

  const [list, setList] = useState([]);

  const getCaseList = async () => {

    try {
      const data = {
        url: config.API_URL + config.GET_CASE_DATA,
        method: "get"
      }
      await axios(data)
        .then(response => {

          if (response?.data?.length) {
            setList(response.data)
          }
        })
    } catch (error) {
      console.log(error.response);
    }


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

