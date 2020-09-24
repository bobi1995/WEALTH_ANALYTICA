import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

export default function PlanEntity(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [entity, setEntity] = React.useState("");
  const handleChange = (event) => {
    setEntity(event.target.value);
    props.setEntity(event.target.value);
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
        <InputLabel id="plan-entity-select-label">Plan Entity</InputLabel>
        <Select
          labelId="plan-entity-select-label"
          id="plan-entity-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={entity}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Single-employer</MenuItem>
          <MenuItem value={2}>Multi-employer Plan</MenuItem>
          <MenuItem value={3}>One-Participant Plan</MenuItem>
          <MenuItem value={4}>Foreign plan</MenuItem>
          <MenuItem value={5}>Multiemployer</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
