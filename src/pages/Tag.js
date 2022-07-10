import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Table } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Button } from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import AddTag from '../components/AddTag';

const { SearchBar } = Search;

let descriptionFilter;
let nameFilter;

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

const Tag = () => {
     
    const products = [
        { id: 1, description: 'George', name:"hello"},
        { id: 2, description: 'Jeffrey', name:"hello"},
        { id: 3, description: 'Alice', name:"hello"},
        { id: 4, description: 'Foster', name:"hello"},
        { id: 5, description: 'Tracy', name:"hello"},
        { id: 6, description: 'Joesph', name:"hello"},
        { id: 7, description: 'Tania', name:"hello"},
        { id: 8, description: 'Chelsea', name:"hello"},
        { id: 9, description: 'Benedict', name:"hello"},
        { id: 10, description: 'Chadd', name:"hello"}
    ];

    const columns = [
        {
            dataField: "id",
            text: "Id:",
            sort: true
        },
        {
            dataField: "name",
            text: "Name: ",
            filter: textFilter({
                getFilter: filter => {
                    nameFilter = filter;
                }
            }),
            sort: true
        },
        {
            dataField: "description",
            text: "Description: ",
            filter: textFilter({
                getFilter: filter => {
                    descriptionFilter = filter;
                }
            }),
            sort: true
        }
    ];

    const clearAllFilter = () => {
        descriptionFilter("");
        nameFilter("");
    }

    return (
        <div className='containers'>
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
                        <AddTag/>
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

export default Tag;
