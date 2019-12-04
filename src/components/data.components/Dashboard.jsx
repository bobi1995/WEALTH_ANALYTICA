import React from "react";
const Dashboard = props => {
  const data = props.location.state;
  console.log(data);
  return (
    <div>
      Hello
      <p>Token:{data.Token}</p>
    </div>
  );
};

export default Dashboard;
