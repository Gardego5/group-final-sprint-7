import React, { Fragment, useMemo } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useTable } from "react-table";

import BasicButton from "../components/ModalComponents/BasicButton";
import MOCK_DATA from "../components/UsersTable/MOCK_DATA.json";
import { Columns } from "../components/UsersTable/columns";

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
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

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
        <BasicButton
          w="160px"
          h="45px"
          style={{
            position: "relative",
            right: "27.15%",
          }}
        >
          Add User
        </BasicButton>
      </Container>
    </Fragment>
  );
};

export default UserRegistry;
