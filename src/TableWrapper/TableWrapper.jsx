import React from "react";
import "./tableWrapper.css";

const TableWrapper = ({ data }) => {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Location</th>
          <th>Mobile</th>
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.first_name}</td>
              <td>{row.last_name}</td>
              <td>{row.email}</td>
              <td>{row.gender}</td>
              <td>{row.location}</td>
              <td>{row.mobile}</td>
            </tr>
          ))
        ) : (
          <div className="no-record">No Record Found!</div>
        )}
      </tbody>
    </table>
  );
};

export default TableWrapper;
