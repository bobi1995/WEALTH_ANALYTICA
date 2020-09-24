import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Moment from "react-moment";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import commonExtracts from "../../../../commonFunctions/commonExtracts";
import RemoveState from "./RemoveState";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  mainDiv: {
    marginTop: "60px",
  },
  viewButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "orange",
    color: "white",
    "&:hover": {
      color: "grey",
      backgroundColor: "#e67e00",
    },

    saveButton: {
      margin: "0 25%",
      width: "50%",
      backgroundColor: "#008000",
      color: "white",
    },
  },
}));

export default function UserStates(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const fullWidth = true;
  const maxWidth = "lg";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={classes.viewButton}
      >
        View
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className={classes.mainDiv}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Assigned Subscriptions for ${props.data.FirstName} ${props.data.LastName}`}
        </DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <MaterialTable
            style={{ margin: "3%" }}
            title="States"
            icons={{
              Filter: React.forwardRef((props, ref) => (
                <SearchIcon ref={ref} />
              )),
              Search: React.forwardRef((props, ref) => (
                <SearchIcon ref={ref} />
              )),
              ResetSearch: React.forwardRef((props, ref) => (
                <RotateLeftIcon ref={ref} />
              )),
              SortArrow: ArrowUpward,
              DetailPanel: ChevronRight,
            }}
            columns={[
              {
                field: "State",
                title: "State",
                cellStyle: {
                  textAlign: "center",
                },
                render: (rowData) =>
                  `${commonExtracts.fullNameByAbbr(rowData.State)} - ${
                    rowData.State
                  }`,
              },
              {
                field: "Type",
                title: "Type",
                render: (rowData) => (rowData.Type === 1 ? "Basic" : "Premium"),
                cellStyle: {
                  textAlign: "center",
                },
              },
              {
                field: "EndDate",
                title: "Expires",
                render: (rowData) => (
                  <Moment format="MMM/DD/YYYY">{rowData.EndDate}</Moment>
                ),
                cellStyle: {
                  textAlign: "center",
                },
              },
              {
                field: "Assign",
                title: "Assign",
                sorting: false,

                cellStyle: {
                  textAlign: "center",
                },
                render: (rowData) => (
                  <RemoveState
                    data={rowData}
                    guid={props.data.Guid}
                    isBusiness={props.data.IsBusinessAccount}
                  />
                ),
              },
            ]}
            data={props.data.States}
            options={{
              paging: false,
              search: false,
              headerStyle: {
                backgroundColor: "#378FC3",
                color: "#FFF",
                fontSize: "17px",
                textAlign: "center",
                fontWeight: "bold",
              },
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
