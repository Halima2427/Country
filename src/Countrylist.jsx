import React from "react";

const Countrylist = ({ List }) => {

    return (
        <div>
            <table class="table table-striped table-dark">
                <thead class="table-dark    ">
                    <tr>
                        <th>CountryName</th>
                        <th>Capital</th>
                        <th>Region</th><span>{" "}</span>
                        <th>Population</th>
                        <th>Flag</th>
                    </tr>
                </thead>
                <tbody >
                    {List.map(e => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.capital}</td>
                            <td>{e.region}</td><span>{" "}</span>
                            <td>{e.population} </td>
                            <th><img src={e.flag} width="50px" height="25px"alt="flags"></img></th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default Countrylist;