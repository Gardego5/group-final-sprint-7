import React, { Fragment, useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useTable } from "react-table";
import { useSelector } from "react-redux";

import MOCK_DATA from "../components/UsersTable/MOCK_DATA.json";
import { Columns } from "../components/UsersTable/columns";
import AddUser from "../components/Modals/AddUser";
import { getCompany } from "../reducers/rootReducer";
import { getAllUsersFromCompany } from "../utils/requests";
import { render } from "react-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1ba098;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0px;
`;

const UserTable = styled.table`
  height: 500px;
  width: 1200px;
  /* display: flex;
  flex-direction: row; */
  border: 3px solid #deb992;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 2%;
  color: #deb992;
  border-collapse: collapse;
`;

const UserRow = styled.tr`
  border-top: 1px solid #deb992;
  border-bottom: 1px solid #deb992;
  border-radius: 10px;
  /* padding: 0px; */
`;

const UserVars = styled.th`
  font-size: 20px;
  text-align: center;
  color: white;
  padding: 30px;
`;

const UserBody = styled.tbody`
  border: 2px solid #deb992;
  padding: 0px;
  margin: 0px;
`;

const UserCell = styled.td`
  text-align: center;
  color: #deb992;
`;

const UserRegistry = () => {
  const setCompany = useSelector(getCompany);
  const [userList, setUserList] = useState([]);
  const [addedUsers, setAddedUsers] = useState(0);

  const getUsers = async () => {
    const allUsers = await getAllUsersFromCompany(setCompany.id);
    setUserList(allUsers);
  };

  // useEffect hook to load all users by company from database
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, [addedUsers]);

  const increaseUsers = () => {
    setAddedUsers(addedUsers + 1);
  };

  console.log(userList);

  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => userList);

  console.log(MOCK_DATA);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Title>User Registry</Title>
        <p>A general view of all your members in your organization</p>
        <UserTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <UserRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <UserVars {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </UserVars>
                ))}
              </UserRow>
            ))}
          </thead>
          <UserBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <UserRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <UserCell {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </UserCell>
                    );
                  })}
                </UserRow>
              );
            })}
          </UserBody>
        </UserTable>
        <AddUser
          addedUsers={addedUsers}
          increaseUsers={increaseUsers}
        ></AddUser>
      </Container>
    </Fragment>
  );
};

export default UserRegistry;
