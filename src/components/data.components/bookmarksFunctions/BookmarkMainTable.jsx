import React from "react";

const BookmarkMainTable = props => {
  console.log(props.data.length);
  console.log(props.data);

  return (
    <div className="bookmarks-table-main">
      <table className="table table-striped table-bordered table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Number</th>
            <th>Plan Name</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Business Code</th>
            <th>Administrator</th>
            <th>Phone</th>
            <th>Net Assets</th>
            <th>Participants</th>
            <th>Net Income</th>
            <th>One Pager</th>
            <th>Plan Profile</th>
            <th>Remove</th>
          </tr>
        </thead>

        {props.data.length > 0 ? (
          <tbody className="table-hover">
            {props.data.map((element, index) => (
              <tr key={index}>
                <td>{element.Number}</td>
                <td>{element.Number}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody></tbody>
        )}
      </table>
    </div>
  );
};

export default BookmarkMainTable;
