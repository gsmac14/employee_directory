import React from "react"

const Table = ({ results, filterResults }) => {
const arrayData = filterResults.length > 0 ? filterResults : results;
  return(


<table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    { (arrayData) ? arrayData.map( (result, index) => {

    return (


    <tr key={ index }>
      <td> <img src={result.picture?.medium} alt={result.picture?.medium} /></td>
      <td>{ result.name?.first }</td>
      <td>{result.phone}</td>
      <td> {result.email} </td>
      <td> {result.location?.city} </td>
    </tr>
    )
    
    
    }): <tr></tr>}
   

  </tbody>
</table>
  )
}

export default Table