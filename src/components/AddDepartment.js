import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function AddTag() {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button className="btn btn-primary text-center btn-add" onClick={showModal}>Add Department</Button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title className='text-center'> Add Department</Modal.Title>
                    <Button type="Button" className="btn btn-close" onClick={hideModal}></Button>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="Auth-form-content">
                            <div className="form-group mt-3 text-left">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control mt-1"
                                    placeholder="please input your Name"
                                />
                            </div>
                            <div className="form-group mt-3 text-left">
                                <label>Description:</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control mt-1"
                                    placeholder="please input your description"
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
export default AddTag