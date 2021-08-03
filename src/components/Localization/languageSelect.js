import React from 'react';
import i18next from "i18next";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LanguageSelect() {
  const classes = useStyles();
  const [lang,setLang] = React.useState("en");


  const handleChange = (event) => {
    console.log(":----event.target.value",event.target.value);
    setLang(event.target.value ? event.target.value : 'en');
    i18next.changeLanguage(event.target.value);
  };

  let languages = [
  { id: 1, code: 'en', name: 'English' }, 
  { id: 1, code: 'jap', name: 'Japanese' }, 
  { id: 1, code: 'hin', name: 'Hindi' }, 
  { id: 1, code: 'fre', name: 'French' },
  { id: 1, code: 'ger', name: 'germany' },
  
]

React.useEffect(() => {
  if(localStorage.getItem("i18nextLng")){
    setLang(localStorage.getItem("i18nextLng") || "en");
  }
});

  return (
    <div className="">
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={lang}
          onChange={handleChange}
        >
          
           {
             languages.length && languages.map((lang)=>{
               return(
                <MenuItem value={lang.code}>{lang.name}</MenuItem>
               )
             })
           }
             

        </Select>
      </FormControl>

    </div>
  );
};

