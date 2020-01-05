import React from "react"
const SmallCompanies = (props) =>{
    
 return(<tr>
<td>{props.singleCompany.Name}</td>
<td>{props.singleCompany.Address1}</td>
<td>{props.singleCompany.City}</td>

<td>{props.singleCompany.AdministratorName}</td>

<td>{props.singleCompany.Phone}</td>

<td>{props.singleCompany.Participants}</td>

<td>{props.singleCompany.NetIncome}</td>
  </tr>)  
}
        
export default SmallCompanies
