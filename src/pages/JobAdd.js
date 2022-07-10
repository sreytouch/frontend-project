import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Button } from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import AddJob from '../components/AddJob';
import EditJob from '../components/EditJob';

const { SearchBar } = Search;

let descriptionFilter;
let benifitFilter;
let creatorFilter;
let tagsFilter;
let fileName;

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

const AddJobs = props => {
    const handleClick = () => {
        // props.onSearch("");
        // props.clearAllFilter();
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
            Add
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

const JobAdd = () => {

    const products = [
        { id: 1, description: 'George', benifit: 'Monkey', creator: 'qq', tags: ['hello1', 'hello2', 'hello3'], fileName: ['2211', '2211'] },
        { id: 2, description: 'Jeffrey', benifit: 'Giraffe', creator: 'ww', tags: ['test1', 'test2', 'test3'], fileName: ['3333', '3333'] },
        { id: 3, description: 'Alice', benifit: 'Giraffe', creator: 'ee', tags: ['new1', 'new2', 'new3'], fileName: ['1221', '1221'] },
        { id: 4, description: 'Foster', benifit: 'Tiger', creator: 'rr', tags: ['jessica', 'jessica2', 'jessica3'], fileName: ['3443', '3443'] },
        { id: 5, description: 'Tracy', benifit: 'Bear', creator: 'tt', tags: ['hely1', 'hely2', 'hely3'], fileName: ['5554', '5554'] },
        { id: 6, description: 'Joesph', benifit: 'Lion', creator: 'yy', tags: ['loyo'], fileName: ['5656'] },
        { id: 7, description: 'Tania', benifit: 'Deer', creator: 'yy', tags: ['deol'], fileName: ['7666'] },
        { id: 8, description: 'Chelsea', benifit: 'Tiger', creator: 'uu', tags: ['tede'], fileName: ['7878'] },
        { id: 9, description: 'Benedict', benifit: 'Tiger', creator: 'ii', tags: ['tepo'], fileName: ['8777'] },
        { id: 10, description: 'Chadd', benifit: 'Lion', creator: 'oo', tags: ['nono'], fileName: ['8899'] },
        { id: 11, description: 'Delphine', benifit: 'Deer', creator: 'pp', tags: ['momo'], fileName: ['7766'] },
        { id: 12, description: 'Elinore', benifit: 'Bear', creator: 'll', tags: ['lolo'], fileName: ['9090'] },
        { id: 13, description: 'Stokes', benifit: 'Tiger', creator: 'kk', tags: ['yoyo'], fileName: ['9999'] },
        { id: 14, description: 'Tamara', benifit: 'Lion', creator: 'jj', tags: ['gogo'], fileName: ['9898'] },
        { id: 15, description: 'Zackery', benifit: 'Bear', creator: 'hh', tags: ['dodo'], fileName: ['9666'] }
    ];

    const ApplyBtn = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div>
                <Button className='small-btn'> Apply </Button> &nbsp;
                {/* <Button> Edit </Button> */}
                <EditJob />
            </div>
        );
    };

    const TagP = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div>
                {row.tags.map((rowIndex, key) => (
                    <p key={key}>{rowIndex}</p>
                ))}
            </div>
        );
    };

    const FileN = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div>
                {row.fileName.map((rowIndex, key) => (
                    <p key={key}>{rowIndex}</p>
                ))}
            </div>
        );
    };


    const columns = [
        {
            dataField: "id",
            text: "Id:",
            sort: true
        },
        {
            dataField: "description",
            text: "Description:",
            filter: textFilter({
                getFilter: filter => {
                    descriptionFilter = filter;
                }
            }),
            sort: true
        },
        {
            dataField: "benifit",
            text: "Benifit:",
            filter: textFilter({
                getFilter: filter => {
                    benifitFilter = filter;
                }
            }),
            sort: true
        },
        {
            dataField: "creator",
            text: "Creator:",
            filter: textFilter({
                getFilter: filter => {
                    creatorFilter = filter;
                }
            }),
            sort: true
        },
        {
            dataField: "tags",
            text: "Tags:",
            filter: textFilter({
                getFilter: filter => {
                    tagsFilter = filter;
                }
            }),
            formatter: TagP,
            sort: true
        },
        {
            dataField: "fileName",
            text: "File Name:",
            filter: textFilter({
                getFilter: filter => {
                    fileName = filter;
                }
            }),
            formatter: FileN,
            sort: true
        },
        {
            dataField: "action",
            text: "Action:",
            formatter: ApplyBtn
        }
    ];

    const clearAllFilter = () => {
        descriptionFilter("");
        benifitFilter("");
        creatorFilter("");
        tagsFilter("");
        fileName("");
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
                        {/* <AddJobs/> */}
                        <AddJob />
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

export default JobAdd;
