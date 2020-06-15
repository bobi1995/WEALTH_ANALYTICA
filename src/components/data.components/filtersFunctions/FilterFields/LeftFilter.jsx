import React, { useState } from "react";
import NetAssets from "./LeftSide/NetAssets";
import CashOutflow from "./LeftSide/CashOutflow";
const LeftFilter = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <NetAssets
        NetAssetBegin={props.NetAssetBegin}
        NetAssetEnd={props.NetAssetEnd}
      />
      <CashOutflow
        Distribution={props.Distribution}
        CorrectivrDistribution={props.CorrectivrDistribution}
        ServiceProviderExpenses={props.ServiceProviderExpenses}
        OtherExpenses={props.OtherExpenses}
      />
    </div>
  );
};

export default LeftFilter;
