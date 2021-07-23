
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from 'axios';
import BootstrapTableGrid from './bootstrap_grid';

import { products, init_products, columns } from "./data.json";
import LocalizedStrings from 'react-localization';
export default function Tables() {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <BootstrapTableGrid 
          init_products={init_products}
          products={products}
          columns={columns}
           />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

