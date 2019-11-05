import React from "react";
import Axios from "axios";
import Countrylist from "./Countrylist";

const AppC=()=>
{
    //const[search,setSearch]=React.useState("");
    const[list,setList]=React.useState([]);
    const fetch=()=>
  {
    Axios.get("https://restcountries.eu/rest/v2/all").then(success=>{
      //console.log(success.data);
      setList(success.data);
    })
  }
    React.useEffect(()=>{fetch()},[])
    // const handleChange=(e)=>
    // {
    //     setSearch(e.target.value);
    // }
    const handleSubmit=(e)=>
    Axios.get("https://restcountries.eu/rest/v2/name/"+e.target.value).then(success=>
    {
      console.log(success);
        setList(success.data);
        // fetch();
       // setSearch(" ");
    })
    
    
    return(
        <div>
                <input onChange={handleSubmit }style={{color:"blue"}} placeholder="Type Country Name"></input><span>{" "}</span>
                <button onClick={handleSubmit} class="btn-dark">SEARCH</button><br></br><br></br>
        
        <Countrylist List={list} />
        </div>
    )
}
export default AppC;
