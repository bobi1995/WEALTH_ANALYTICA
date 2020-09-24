import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { allYears } from "../../../../../global/Years";
export default function FormControlLabelPlacement(props) {
  const handleChange = (e) => {
    props.setYear(e.target.value);
  };
  return (
    <div style={{ marginBottom: "3%", marginLeft: "1%" }}>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="2018"
          onChange={handleChange}
        >
          {allYears.map((el) => (
            <FormControlLabel
              key={el}
              value={el.toString()}
              control={<Radio color="primary" />}
              label={el.toString()}
              labelPlacement="top"
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
