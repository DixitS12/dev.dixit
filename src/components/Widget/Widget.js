import React, { useState,useEffect } from "react";
import {
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { MoreVert as MoreIcon,AddOutlined,ArrowDownward,KeyboardTabOutlined,ArrowRightAltOutlined,CheckCircleOutlineOutlined,CloseOutlined,ExitToAppOutlined,NotificationsActiveOutlined } from "@material-ui/icons";

import classnames from "classnames";
import * as notification from "../../pages/tables/toast";
import AlertDialogSlide from './confirm_dialog';
// styles
import useStyles from "./styles";

export default function Widget({
  children,
  title,
  noBodyPadding,
  bodyClass,
  disableWidgetMenu,
  header,
  noHeaderPadding,
  headerClass,
  style,
  noWidgetShadow,
  isSelected,
  isSelectedRow,
}) {
  var classes = useStyles();

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
  }, [isSelected,isSelectedRow])

  
  const handleSelectedAction = () => {

    if (isSelected === true) {
      setOpen(true);
      setMoreMenuOpen(false)
      // fire api
    }else{
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
    
    <div className={classes.widgetWrapper} style={style && {...style}}>
      <Paper className={classes.paper} classes={{ root: classnames(classes.widgetRoot, {
        [classes.noWidgetShadow]: noWidgetShadow
        }) }}>
        <div className={classnames(classes.widgetHeader, {
          [classes.noPadding]: noHeaderPadding,
          [headerClass]: headerClass
        })}>
          {header ? (
            header
          ) : (
            <React.Fragment>
              <Typography variant="h5" color="textSecondary" noWrap>
                {title}
              </Typography>
              {!disableWidgetMenu && (
                <IconButton
                  color="primary"
                  classes={{ root: classes.moreButton }}
                  aria-owns="widget-menu"
                  aria-haspopup="true"
                  onClick={() => setMoreMenuOpen(true)}
                  buttonRef={setMoreButtonRef}
                >
                  <MoreIcon />
                </IconButton>
              )}
            </React.Fragment>
          )}
        </div>
        <div
          className={classnames(classes.widgetBody, {
            [classes.noPadding]: noBodyPadding,
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </div>
      </Paper>
      <Menu
        id="widget-menu"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem
      >
        <MenuItem  onClick={() => handleSelectedAction()} >
          <Typography> <ArrowDownward color={'primary'}/>Take Ownership</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><CheckCircleOutlineOutlined color={'primary'}/>Approve & Return Items</Typography>
        </MenuItem >
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><CloseOutlined color={'primary'}/>Decline & Return Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><ExitToAppOutlined color={'primary'}/>Resolve Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><NotificationsActiveOutlined color={'primary'}/>Set Alert</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><ArrowRightAltOutlined color={'primary'}/>Assign Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><KeyboardTabOutlined color={'primary'}/>Forword Items</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleSelectedAction()}>
          <Typography><AddOutlined color={'primary'}/>Add Nots to Items</Typography>
        </MenuItem>
      </Menu>
    </div>
    </React.Fragment>
  );
}
