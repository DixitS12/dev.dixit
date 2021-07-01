import React, { useState,useContext } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import * as notification from "../toast";
import Checkbox from '@material-ui/core/Checkbox';
// styles
import useStyles from "./styles";
import columnsContext  from '../Context/context';
export default function WidgetColumnHide({
  ...props
}) {
  var contextColumns = useContext(columnsContext);
  var classes = useStyles();

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleSelectedAction = (dataField) => {
    props.onColumnToggle(dataField);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (


    <React.Fragment>

      <Tooltip title="Hide/Show">
        <IconButton aria-label="Hide/Show"

          onClick={() => setMoreMenuOpen(true)}
          buttonRef={setMoreButtonRef}
        >
          <ViewColumnIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >
        {
          contextColumns.map((column,index) => {
            return (
              <MenuItem onClick={() => handleSelectedAction(column.dataField)} >
                <Typography> 
                   <Checkbox id={index} defaultChecked
  /> 
                  {column.text}
                  </Typography>
              </MenuItem>
            )

          })
        }
      </Menu>

    </React.Fragment>
  );
}
