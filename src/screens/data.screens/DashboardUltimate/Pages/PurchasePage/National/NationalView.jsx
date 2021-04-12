import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TypeSelect from "../SingleState/components/TypeSelect";
import QuantitySelect from "../SingleState/components/QuantitySelect";
import PayPal from "./components/PayPal";
import PurchaseTable from "./components/PurchaseTable";
import CardMedia from "@material-ui/core/CardMedia";

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
  cover: {
    width: 400,
    height: 250,
    margin: "0 auto",
  },
}));
const NationalView = (props) => {
  const classes = useStyles();
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
    setSelectedType("");
  }, [data, isBusiness]);

  const handleClick = () => {
    setData([
      ...data,
      {
        timestamp: new Date(),
        type: selectedType,
        quantity: selectedQuantity,
        totalPrice:
          selectedType === 1
            ? selectedQuantity * 2200
            : selectedQuantity * 3550,
      },
    ]);
  };

  return (
    <div>
      <Paper className={classes.paperStyleInput}>
        <div className={classes.divStyle}>
          <TypeSelect
            type={selectedType}
            setType={(type) => setSelectedType(type)}
          />
          <QuantitySelect
            quantity={selectedQuantity}
            setQuantity={(quantity) => setSelectedQuantity(quantity)}
          />
        </div>
        <Box
          style={{
            marginTop: "3%",
          }}
        >
          <CardMedia
            className={classes.cover}
            image={require("../../../../../../styles/images/nationalView.jpg")}
            title="Live from space album cover"
          />
        </Box>

        <Button
          disabled={selectedQuantity && selectedType ? false : true}
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

export default NationalView;
