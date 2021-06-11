import React, { useState, useEffect } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import { MoreVert as MoreIcon, AddOutlined, ArrowDownward, KeyboardTabOutlined, ArrowRightAltOutlined, CheckCircleOutlineOutlined, CloseOutlined, ExitToAppOutlined, NotificationsActiveOutlined } from "@material-ui/icons";
import * as notification from "../toast";
import AlertDialogSlide from './confirm_dialog';
// styles
import useStyles from "./styles";

export default function Widget({
  isSelected,
  isSelectedRow,
}) {
  var classes = useStyles();

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
  }, [isSelected, isSelectedRow])


  const handleSelectedAction = () => {

    if (isSelected === true) {
      setOpen(true);
      setMoreMenuOpen(false)
      // fire api
    } else {
      notification.toast.error(" Please Select Record..!!!");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <AlertDialogSlide
        open={open}
        handleClose={handleClose}

      />
      <Tooltip title="Hide/Show Columns"><span> <IconButton onClick={() => setMoreMenuOpen(true)}
        buttonRef={setMoreButtonRef}
        aria-label="Hide/Show Columns"
      >
        <MoreIcon style={{ cursor: "pointer" }} />
      </IconButton></span></Tooltip>


      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >
        <MenuItem onClick={() => handleSelectedAction()} >
          <Typography> <ArrowDownward color={'primary'} />Take Ownership</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><CheckCircleOutlineOutlined color={'primary'} />Approve & Return Items</Typography>
        </MenuItem >
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><CloseOutlined color={'primary'} />Decline & Return Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><ExitToAppOutlined color={'primary'} />Resolve Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><NotificationsActiveOutlined color={'primary'} />Set Alert</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><ArrowRightAltOutlined color={'primary'} />Assign Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><KeyboardTabOutlined color={'primary'} />Forword Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><AddOutlined color={'primary'} />Add Nots to Items</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
