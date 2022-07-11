import React from "react";
import { useParams } from "react-router";
import BootstrapTable from "react-bootstrap-table-next";
import { Link } from 'react-router-dom';
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Button } from "react-bootstrap";
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

let idFilter;
let tagFilter;
let stateFilter;
let cityFilter;
let companyFilter;

const Students = () => {

  const { SearchBar } = Search;

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

  const clearAllFilter = () => {
    idFilter("");
    tagFilter("");
    stateFilter("");
    cityFilter("");
    companyFilter("");
  }

  const products = [
    { id: 1, tags: 'George', state: 'Monkey', city:'AA', companyName:'aaa' },
    { id: 2, tags: 'Jeffrey', state: 'Giraffe', city:'CC', companyName:'fff' },
    { id: 3, tags: 'Alice', state: 'Giraffe', city:'DD', companyName:'ddd' },
    { id: 4, tags: 'Foster', state: 'Tiger', city:'FF', companyName:'eee' },
    { id: 5, tags: 'Tracy', state: 'Bear', city:'EE', companyName:'rrr' },
    { id: 6, tags: 'Joesph', state: 'Lion', city:'GG', companyName:'ggg' },
    { id: 7, tags: 'Tania', state: 'Deer', city:'HH', companyName:'jjj' },
    { id: 8, tags: 'Chelsea', state: 'Tiger', city:'WW', companyName:'kkk' },
    { id: 9, tags: 'Benedict', state: 'Tiger', city:'RR', companyName:'lll' },
    { id: 10, tags: 'Chadd', state: 'Lion', city:'QQ', companyName:'uuu' },
    { id: 11, tags: 'Delphine', state: 'Deer', city:'PP', companyName:'yyy' },
    { id: 12, tags: 'Elinore', state: 'Bear', city:'MM', companyName:'hhh' },
    { id: 13, tags: 'Stokes', state: 'Tiger', city:'NN', companyName:'sss' },
    { id: 14, tags: 'Tamara', state: 'Lion', city:'VV', companyName:'ppp' },
    { id: 15, tags: 'Zackery', state: 'Bear', city:'ZZ', companyName:'ttt' }
  ];

  const IdP = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Link to={`/students-detail/${row.id}`} className="link-student-detail">
        {row.id}
      </Link>
    );
  };
  const TagP = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Link to={`/students-detail/${row.id}`} className="link-student-detail">
        {row.tags}
      </Link>
    );
  };
  const StateP = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Link to={`/students-detail/${row.id}`} className="link-student-detail">
        {row.state}
      </Link>
    );
  };
  const CityP = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Link to={`/students-detail/${row.id}`} className="link-student-detail">
        {row.city}
      </Link>
    );
  };
  const CompanyP = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Link to={`/students-detail/${row.id}`} className="link-student-detail">
        {row.companyName}
      </Link>
    );
  };

  const columns = [
    {
      dataField: "id",
      text: "Id:",
      formatter: IdP,
      sort: true
    },
    {
      dataField: "tags",
      text: "Tags:",
      filter: textFilter({
        getFilter: filter => {
          tagFilter = filter;
        }
      }),
      formatter: TagP,
      sort: true
    },
    {
      dataField: "state",
      text: "State:",
      filter: textFilter({
        getFilter: filter => {
          stateFilter = filter;
        }
      }),
      formatter: StateP,
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
      formatter: CityP,
      sort: true
    },
    {
      dataField: "companyName",
      text: "Company Name:",
      filter: textFilter({
        getFilter: filter => {
          companyFilter = filter;
        }
      }),
      formatter: CompanyP,
      sort: true
    }
  ];

  const pagination = paginationFactory({
    page: 1,
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


  return (
    <div className="containers">
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

export default Students;