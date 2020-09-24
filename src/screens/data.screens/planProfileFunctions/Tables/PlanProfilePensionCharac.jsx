import React from "react";
import { allYears } from "../../../../global/Years";

const PlanProfileCharac = (props) => {
  const uniqueYears = allYears;
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
                  <td className="onepager-pesion-description">
                    {e.Description}
                    <span className="onepager-tooltip">{e.Definition}</span>
                  </td>
                  {uniqueYears.map((year, yearID) => {
                    if (e.Years.includes(year)) {
                      return (
                        <td key={yearID}>
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        </td>
                      );
                    } else {
                      return <td key={yearID}>N/A</td>;
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
