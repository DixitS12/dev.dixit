import React, { useState, useEffect } from "react";
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

export default function WidgetColumnHide({
  columns,
  ...props
}) {
  var classes = useStyles();

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
  }, [columns])



  const handleSelectedAction = (dataField) => {
    props.onColumnToggle(dataField);
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
          columns.map((column) => {
            return (
              <MenuItem onClick={() => handleSelectedAction(column.dataField)} >
                <Typography>  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> {column.text}</Typography>
              </MenuItem>
            )

          })
        }
      </Menu>

    </React.Fragment>
  );
}
