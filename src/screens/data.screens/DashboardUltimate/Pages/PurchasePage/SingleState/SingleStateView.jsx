import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import StateSelect from "./components/StateSelect";
import TypeSelect from "./components/TypeSelect";
import QuantitySelect from "./components/QuantitySelect";
import PurchaseTable from "./components/PurchaseTable";
import PayPal from "./components/PayPal";

const useStyles = makeStyles((theme) => ({
  paperStyleInput: {
    width: "90%",
    margin: "1% auto",
  },
  divStyle: {
    paddingTop: "3%",
    display: "flex",
    justifyContent: "space-around",
  },
  buttonStyle: {
    margin: "3% auto",
    backgroundColor: "#68BA54",
    color: "white",
  },
}));
const SingleStateView = (props) => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState([""]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [data, setData] = useState([]);
  const isBusiness = localStorage.getItem("isBusiness");

  useEffect(() => {
    if (isBusiness === "false") {
      setSelectedQuantity(1);
    } else {
      setSelectedQuantity("");
    }

    setSelectedState("");
    setSelectedType("");
  }, [data, isBusiness]);

  const handleClick = () => {
    setData([
      ...data,
      {
        state: selectedState,
        type: selectedType,
        quantity: selectedQuantity,
        totalPrice:
          selectedType === 1 ? selectedQuantity * 840 : selectedQuantity * 1100,
      },
    ]);
  };
  return (
    <div>
      <Paper className={classes.paperStyleInput}>
        <div className={classes.divStyle}>
          <StateSelect
            state={selectedState}
            setState={(state) => setSelectedState(state)}
          />
          <TypeSelect
            type={selectedType}
            setType={(type) => setSelectedType(type)}
          />
          <QuantitySelect
            quantity={selectedQuantity}
            setQuantity={(quantity) => setSelectedQuantity(quantity)}
          />
        </div>

        <Button
          disabled={
            selectedQuantity && selectedState && selectedType ? false : true
          }
          variant="contained"
          id="right-filter-btn"
          className={classes.buttonStyle}
          startIcon={<AddIcon />}
          onClick={handleClick}
        >
          Add
        </Button>
      </Paper>
      {data.length > 0 ? (
        <Paper className={classes.paperStyleInput}>
          <PurchaseTable data={data} setData={(data) => setData(data)} />
        </Paper>
      ) : (
        ""
      )}
      {data.length > 0 ? (
        <Paper className={classes.paperStyleInput}>
          <PayPal data={data} />
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleStateView;
