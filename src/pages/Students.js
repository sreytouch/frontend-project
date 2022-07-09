import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

function Students() {
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

  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'tags', text: 'Tags', sort: true },
    { dataField: 'state', text: 'State', sort: true },
    { dataField: 'city', text: 'City', sort: true },
    { dataField: 'companyName', text: 'Company Name', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

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

  const { SearchBar, ClearSearchButton } = Search;

  return (
    <div className="App">

      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={products}
        columns={columns}
        search
      >
        {
          props => (
            <div>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <hr />
              <BootstrapTable
                defaultSorted={defaultSorted}
                pagination={pagination}
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>

    </div>
  );
}

export default Students;