
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from 'axios';
import PageTitle from "../../components/PageTitle";
import MaterialTableGrid from './material_grid';
import BootstrapTableGrid from './bootstrap_grid';
import MUIDataTableGrid from './mui_grid';

export default function Tables() {

  const [list, setList] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const getCaseList = async () => {
    setLoading(true);
    const config = {
      url: "http://10.17.3.127/api/centralhome/GetCasesList",
      method: "get"
    }
    await axios(config)
      .then(response => {

        if (response?.data?.length) {
          setList(response.data)
          setLoading(false);
        }
      })
  }

  useEffect(() => {
    getCaseList();
  }, [])

  return (
    <>
      <Grid container spacing={4}>
       <PageTitle title="MUI  Data Grid" variant={'h5'} />
        <Grid item xs={12}>
            <MUIDataTableGrid
              muidataTable_list={list}
            />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
      {/* <PageTitle title="Material Data Grid" variant={'h5'} />
        <Grid item xs={12}>
          <MaterialTableGrid 
           material_list={list}
           loading={loading}/>
        </Grid> */}
        <Grid item xs={12}>
        <PageTitle title="React Bootstrap Table -2 Data Grid" variant={'h5'} />
          <BootstrapTableGrid
          />
        </Grid>
      </Grid>
    </>
  );
}

