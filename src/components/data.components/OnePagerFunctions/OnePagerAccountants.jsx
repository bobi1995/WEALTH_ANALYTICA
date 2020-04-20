import React from "react";

const OnePagerAccountants = (props) => {
  return (
    <div className="onePager-bottom-div">
      {props.accountants.length > 0 ? (
        <div className="onepager-bottomtables-table ">
          <h1 className="onepager-bottomtables-h1">Accountant Firm Names</h1>
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name Of The Accountant</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {props.accountants.map((acc, index) => {
                return (
                  <tr key={index}>
                    <td>{acc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}

      {props.trusts.length > 0 ? (
        <div className="onepager-bottomtables-table ">
          {" "}
          <h1 className="onepager-bottomtables-h1">Fiduciary Trust Names</h1>
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name Of The Trusts</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {props.trusts.map((trust, index) => {
                return (
                  <tr key={index}>
                    <td>{trust}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OnePagerAccountants;
