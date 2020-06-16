import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import apiAddress from "../../../../../global/endpointAddress";
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [symbol, setSymbol] = React.useState("");
  const [symbolsData, setSymbolsData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${apiAddress}/api/BenefitTypes/Get?type=${props.benefitType}`, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((result) => {
          if (result.data) {
            setSymbolsData(result.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchData();
  }, [props.benefitType]);
  const handleChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="benefit-type-controlbox-label">Symbol</InputLabel>
        <Select
          labelId="benefit-type-controlbox-label"
          id="benefit-type-controlbox"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={symbol}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {symbolsData.map((el) => (
            <MenuItem value={el.Symbol} key={el.Symbol}>
              {el.Description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
