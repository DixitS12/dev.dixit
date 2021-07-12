import React from "react";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    
    <div className={classes.pageTitleContainer+' page-conteiner'}>
      <Typography className={classes.typo} variant={props.variant ? props.variant : 'h3'} size="sm">
        {props.title}
      </Typography>
      {props.button && props.button}
    </div>
  );
}
