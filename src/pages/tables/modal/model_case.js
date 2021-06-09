import { Avatar, Box, Grid,  Button,
  IconButton, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import Slide from '@material-ui/core/Slide';
import axios from "axios";
import React, { useEffect, useState } from "react";



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(
  (theme) => ({
    cursor: { cursor: "pointer" },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    fonts: {
      fontSize: "larger",
      fontWeight: "bold",
    },
  }),
  { index: 1 }
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CaseModel(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClose = () => {
    props.handleClose(false);
    setOpen(false);
  };

  const addDefaultSrc = (event) => {
    let userDefaultImage = require("../image/011-boy-5.svg");
    if (userDefaultImage) {
      event.target.src = userDefaultImage;
    }
  };

  const renderUserImage = () => {

      return (
        <Avatar
          className={classes.large}
          alt={'D'}
          src="../image/011-boy-5.svg"
        />
      );

  };

  useEffect(() => {
    if (props.open) {
      setOpen(props.open);
    }
  }, [props.open,props.rowData]);

  return (
    <div >
      <Dialog id="model-prople"
         fullWidth={fullWidth}
         maxWidth={maxWidth}
         TransitionComponent={Transition}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="simple-dialog-title" onClose={handleClose}>
          Case Update - 001245
        </DialogTitle>
        <DialogContent dividers>
          <form noValidate autoComplete="off">
            <div className="text-center">
              <IconButton color="inherit" className={classes.headerMenuButton}>
                {renderUserImage()}
              </IconButton>
            </div>
             <Typography
              className={classes.fonts}
              align="center"
              variant="caption"
              display="block"
              gutterBottom
            >
              {props.rowData.CaseOwnerDisplayName}
            </Typography>
            <List p={0}>
                <ListItem>
                  <TextField
                    
                    label="Case Type Name"
                    defaultValue={props.rowData.CaseTypeName ? props.rowData.CaseTypeName : ""}
                    fullWidth
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    
                    label="Due Date"
                    defaultValue={props.rowData.CaseDue ? props.rowData.CaseDue : ""}
                    fullWidth
                  />
                </ListItem>
                
                 </List>
            
                 <Button
            type="submit"
            variant="contained"
            color="primary"
              style={{marginRight:'1rem'}}
          >
            Update
              </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
          >
            Cancel
              </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
