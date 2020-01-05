import axios from "axios";

const fetching = async(url)=>{
  console.log(url)
  const res = await axios
    .get(
      url,
      {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(result => {
      return result;
    })
    .catch(e => {
      console.log(e);
    });
    return res.data;
}


const SearchFunction =  (year, states, cities) => {
  let url
  let result
  if(cities.length<1){
    url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesByState?year=${year}&`

    states.forEach((state,index)=>{
      url = url.concat(`state=${state}&`)
  })
  console.log("STATES URL: " + url)

  }else{
    url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesByCity?year=${year}&`
    states.forEach((state,index)=>{
      url = url.concat(`state=${state}&`)
  })
    cities.forEach((city,index)=>{
       url = url.concat(`city=${city}&`)
    })
    console.log("CITIES URL: " + url)
  }
  result = fetching(url)

  return result
  


  
};

export default SearchFunction;
