import React from "react";
import DataExtract from "./PlanProfileDataExtract";

const PlanProfileCharac = props => {
  const uniqueYears = DataExtract.uniqueYearsPension();

  return (
    <div
      id={props.id}
      className="onepager-bottomtables-table onepager-hidden-tables"
    >
      <table className="table table-striped table-bordered table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Description</th>
            {uniqueYears.map((el, ind) => {
              return <th key={ind}>{el}</th>;
            })}
          </tr>
        </thead>
        <tbody className="table-hover">
          {props.data.Characteristics &&
            props.data.Characteristics.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.Description}</td>
                  {uniqueYears.map((year, yearID) => {
                    if (e.Years.includes(year)) {
                      return <td key={yearID}>Y</td>;
                    } else {
                      return <td key={yearID}>N</td>;
                    }
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PlanProfileCharac;
