import React, { useState, useEffect } from "react";
import {
  IconButton,
  Menu,
  Button,
  Typography,
  Badge,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  Avatar,
  Divider,
  colors,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import { Description, Search, CloudDownload, Favorite, Share } from '@material-ui/icons';

// styles
const useStyles = makeStyles((theme) => ({
  cardBody: {
    marginBottom:'1rem',
    backgroundColor: '#e1f0ff',
    "&:hover": {
      backgroundColor: '#f4faff',
    },
  },
  
  widgetBody: {
    padding:'.8rem',
    paddingBottom:'0'
  },
  cardHeader:{
    paddingBottom:'0',
    paddingTop:'.5rem',
  },
  cardAction:{
    paddingTop:'.2rem',
    paddingBottom:'0',
  },
  avatar: {
    backgroundColor: colors.yellow[500]
  }
}));

export default function WidgetDocument({
  attchement,
}) {
  var classes = useStyles();

  // local
  var [moreButtonRef, setMoreButtonRef] = useState(null);
  var [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
  }, [attchement])

  const handleOpenNewTab = (e, file) => {
    window.open(file.url, "_blank")
  }
  const downloadImageExcel = async (imageSrc,file_name) => {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    const link = document.createElement('a')
    link.href = imageURL
    link.download = file_name ? file_name : 'file'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  const handleCommonDownload = (e, file) => {
    e.preventDefault();
    if (file.type === "pdf" || file.type === "word") {
      fetch(file.url, {
        method: "GET",
        headers: {}
      })
        .then(response => {
          response.arrayBuffer().then(function (buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer], { type: file.type }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", file.file_name);
            document.body.appendChild(link);
            link.click();
          });
        })
        .catch(err => {
        });
    }
    else if (file.type === "xlsx" || file.type === "image") {
      downloadImageExcel(file.url,file.file_name)
    }
  }
  return (


    <React.Fragment>
      <Tooltip title="Download">
        <IconButton aria-label="Download"
          onClick={() => setMoreMenuOpen(true)}
          buttonRef={setMoreButtonRef}
        >

          <Badge color="primary" badgeContent={attchement.length}>
            <Description />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        id="widget-download"
        open={isMoreMenuOpen}
        anchorEl={moreButtonRef}
        onClose={() => setMoreMenuOpen(false)}
        disableAutoFocusItem

      >
        <div className={classes.widgetBody}>
          <Typography variant="h5" color="primary" style={{marginBottom:'.8rem'}}> Notes Attchments </Typography>
          
          {
            attchement.map((data) =>
            (
              <Card className={classes.cardBody}>
                <CardHeader className={classes.cardHeader}
                  avatar={
                    <Avatar alt={data.user} src="/static/images/avatar/1.jpg"  className={'bg-light-danger'}/>
                  }
                  title={data.user}
                  subheader={data.datatime}
                />
              
                <CardActions disableSpacing className={classes.cardAction}>
                  <IconButton aria-label="Search" onClick={(e) => handleOpenNewTab(e,data)} >
                    <Search />
                  </IconButton>
                  <Button aria-label="Download" onClick={(e) => handleCommonDownload(e, data)}>
                    <CloudDownload />
                  </Button>
                  <Typography component="span" variant="body2" color="secondary" className={classes.inline}>
                    {data.file_name}
                  </Typography>
                </CardActions>
              </Card>


            )
            )
          }

        </div>
      </Menu>

    </React.Fragment>
  );
}
