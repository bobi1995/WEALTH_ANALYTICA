import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

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
          <FormControlLabel
            value="2015"
            control={<Radio color="primary" />}
            label="2015"
            labelPlacement="top"
          />
          <FormControlLabel
            value="2016"
            control={<Radio color="primary" />}
            label="2016"
            labelPlacement="top"
          />
          <FormControlLabel
            value="2017"
            control={<Radio color="primary" />}
            label="2017"
            labelPlacement="top"
          />
          <FormControlLabel
            value="2018"
            control={<Radio color="primary" />}
            label="2018"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
