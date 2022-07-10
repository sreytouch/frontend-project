import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Button } from "react-bootstrap";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

let stateFilter;
let cityFilter;
let majorFilter;
let nameFilter;
let studentId;

const Faculty = () => {

  const ClearButton = props => {
    const handleClick = () => {
      props.onSearch("");
      props.clearAllFilter();
    };

    return (
      <Button
        variant="secondary"
        onClick={handleClick}
        style={{
          fontSize: "16px",
          padding: "5px",
          margin: "10px",
          height: "40px"
        }}
      >
        Clear
      </Button>
    );
  };

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const columns = [
    {
      dataField: "state",
      text: "State:",
      filter: textFilter({
        getFilter: filter => {
          stateFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "city",
      text: "City:",
      filter: textFilter({
        getFilter: filter => {
          cityFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "major",
      text: "Major:",
      filter: textFilter({
        getFilter: filter => {
          majorFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "name",
      text: "Name:",
      filter: textFilter({
        getFilter: filter => {
          nameFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "studentId",
      text: "Student Id:",
      filter: textFilter({
        getFilter: filter => {
          studentId = filter;
        }
      }),
      sort: true
    }
  ];

  const clearAllFilter = () => {
    stateFilter("");
    cityFilter("");
    nameFilter("");
    majorFilter("");
    studentId("");
  }

  const products = [
    { id: 1, state: 'George', city: 'Monkey', major: 'qq', name: 'hello', studentId: '2211' },
    { id: 2, state: 'Jeffrey', city: 'Giraffe', major: 'ww', name: 'test', studentId: '3333' },
    { id: 3, state: 'Alice', city: 'Giraffe', major: 'ee', name: 'new', studentId: '1221' },
    { id: 4, state: 'Foster', city: 'Tiger', major: 'rr', name: 'jessica', studentId: '3443' },
    { id: 5, state: 'Tracy', city: 'Bear', major: 'tt', name: 'hely', studentId: '5554' },
    { id: 6, state: 'Joesph', city: 'Lion', major: 'yy', name: 'loyo', studentId: '5656' },
    { id: 7, state: 'Tania', city: 'Deer', major: 'yy', name: 'deol', studentId: '7666' },
    { id: 8, state: 'Chelsea', city: 'Tiger', major: 'uu', name: 'tede', studentId: '7878' },
    { id: 9, state: 'Benedict', city: 'Tiger', major: 'ii', name: 'tepo', studentId: '8777' },
    { id: 10, state: 'Chadd', city: 'Lion', major: 'oo', name: 'nono', studentId: '8899' },
    { id: 11, state: 'Delphine', city: 'Deer', major: 'pp', name: 'momo', studentId: '7766' },
    { id: 12, state: 'Elinore', city: 'Bear', major: 'll', name: 'lolo', studentId: '9090' },
    { id: 13, state: 'Stokes', city: 'Tiger', major: 'kk', name: 'yoyo', studentId: '9999' },
    { id: 14, state: 'Tamara', city: 'Lion', major: 'jj', name: 'gogo', studentId: '9898' },
    { id: 15, state: 'Zackery', city: 'Bear', major: 'hh', name: 'dodo', studentId: '9666' }
  ];

  return (
    <div>
      <ToolkitProvider
        bootstrap4
        keyField="name"
        data={products}
        columns={columns}
        search
      >
        {props => (
          <div>
            <SearchBar
              {...props.searchProps}
              style={{ width: "400px", height: "40px" }}
            />
            <ClearButton
              {...props.searchProps}
              clearAllFilter={clearAllFilter}
            />
            <BootstrapTable
              {...props.baseProps}
              filter={filterFactory()}
              pagination={pagination}
              noDataIndication="There is no solution"
              striped
              hover
              condensed
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}
// }

export default Faculty;
