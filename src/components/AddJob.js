import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

function AddJob() {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const optionsArray = [
        { key: "au", label: "Australia" },
        { key: "ca", label: "Canada" },
        { key: "us", label: "USA" },
        { key: "pl", label: "Poland" },
        { key: "es", label: "Spain" },
        { key: "fr", label: "France" },
    ];

    return (
        <>
            <Button className="btn btn-primary text-center" onClick={showModal}>Add Job</Button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title className='text-center'> Add Job</Modal.Title>
                    <Button type="Button" className="btn btn-close" onClick={hideModal}></Button>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="Auth-form-content">
                            <div className="form-group mt-3 text-left">
                                <label>Description:</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control mt-1"
                                    placeholder="please input your description"
                                />
                            </div>
                            <div className="form-group mt-3 text-left">
                                <label>Benifit:</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control mt-1"
                                    placeholder="please input your benifit"
                                />
                            </div>
                            <div className="form-group mt-3 text-left">
                                <label>Tags:</label>
                                {/* <select className="form-select" aria-label="Default select example" multiple>
                                    <option value="default">please select tags</option>
                                    <option value="student">Student</option>
                                    <option value="faculty">Faculty</option>
                                    <option value="student">Student</option>
                                    <option value="faculty">Faculty</option>
                                    <option value="student">Student</option>
                                    <option value="faculty">Faculty</option>
                                </select> */}
                                <DropdownMultiselect options={optionsArray} name="countries" />
                            </div>
                            <div className="form-group mt-3 text-left">
                                <label>file:</label>
                                <input
                                    type="file"
                                    multiple
                                    className="form-control mt-1"
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary" data-bs-dismiss="modal" onClick={hideModal}>Cancel</Button>
                    <Button type="submit" className="btn btn-primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddJob