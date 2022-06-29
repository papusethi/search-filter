import "./App.css";
import { useState } from "react";
import datalist from "./datalist.json";
import TableWrapper from "./TableWrapper/TableWrapper";

function App() {
  const [userList, setUserList] = useState(datalist);
  const [query, setQuery] = useState("");
  const [searchColumn, setSearchColumn] = useState(["first_name", "last_name"]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query ", query);
  };

  const search = (userRows) => {
    // First Approach

    // let filteredUserList = userRows.filter(
    //   (user) =>
    //     user.first_name.toLowerCase().indexOf(query) > -1 ||
    //     user.last_name.toLowerCase().indexOf(query) > -1 ||
    //     user.first_name.toLowerCase().indexOf(query) > -1 ||
    //     user.email.toLowerCase().indexOf(query) > -1 ||
    //     user.gender.toLowerCase().indexOf(query) > -1 ||
    //     user.location.toLowerCase().indexOf(query) > -1 ||
    //     user.mobile.toLowerCase().indexOf(query) > -1
    // );

    // Second Approach

    // let columns = userRows[0] && Object.keys(userRows[0]);
    // let filteredUserList = userRows.filter((user) =>
    //   columns.some(
    //     (column) =>
    //       user[column].toString().toLowerCase().indexOf(query.toLowerCase()) >
    //       -1
    //   )
    // );

    // Third Approach

    let filteredUserList = userRows.filter((user) =>
      searchColumn.some(
        (column) =>
          user[column].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
      )
    );

    return filteredUserList;
  };

  // Passing this value to create the checkbox with label
  const columns = userList[0] && Object.keys(userList[0]);

  return (
    <div className="app">
      <h3>Table with Advanced Searching Feature</h3>

      <div className="app__search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="app__search--input"
          value={query}
          onChange={handleSearchChange}
        />

        <div className="app__advanced">
          {columns &&
            columns.map((column, index) => (
              <label key={index} className="app__advanced--option">
                <input
                  type="checkbox"
                  checked={searchColumn.includes(column)}
                  onChange={(e) => {
                    const checked = searchColumn.includes(column);
                    setSearchColumn((prev) =>
                      checked
                        ? prev.filter((sc) => sc !== column)
                        : [...prev, column]
                    );
                  }}
                />
                {column}
              </label>
            ))}
        </div>
      </div>

      <TableWrapper data={search(userList)} />
    </div>
  );
}

export default App;
