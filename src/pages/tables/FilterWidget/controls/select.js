import React,{ useState } from "react";
import {
    FormControl,
    Select,
    InputLabel,
    MenuItem

} from "@material-ui/core";
import useStyles from "../../styles";


export default function CustomSelect(props) {
    const [drpValue, setDrpValue] = useState("");
    var classes = useStyles();

const handleChange = (e) =>{
    setDrpValue(e);
}
    return (
        <FormControl
            fullWidth={true}
            variant="outlined"
            className={classes.mb_one}
        >
            <InputLabel id="demo-controlled-open-select-label">
             Status
           </InputLabel>
            <Select
                className="input-dropdown"
                name={props.field.name}
                label={props.field.label}
                value={drpValue}
                onChange={(e) =>
                    handleChange(e.target.value)
                }
            >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">InActive</MenuItem>
                <MenuItem value="both">both</MenuItem>
            </Select>
        </FormControl>

    );
}