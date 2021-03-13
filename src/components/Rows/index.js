import React from "react";

const Table = ({ results, filterResults }) => {
  const arrayData = filterResults.length > 0 ? filterResults : results;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th style={{ cursor: "pointer" }} onClick={()=> results.handleSort("Name")} scope="col" >
            {" "}
            Name
          </th>
          <th style={{ cursor: "pointer" }} scope="col">
            Phone
          </th>
          <th style={{ cursor: "pointer" }} scope="col">
            Email
          </th>
          <th style={{ cursor: "pointer" }} scope="col">
            Location
          </th>
        </tr>
      </thead>
      <tbody>
        {arrayData ? (
          arrayData.map((result, index) => {
            const { first, last } = result.name;
            const fullName = `${first} ${last}`;

            return (
              <tr key={index}>
                <td>
                  {" "}
                  <img
                    src={result.picture?.medium}
                    alt={result.picture?.medium}
                  />
                </td>
                <td>{fullName}</td>
                <td>{result.phone}</td>
                <td> {result.email} </td>
                <td> {result.location?.city} </td>
              </tr>
            );
          })
        ) : (
          <tr></tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
