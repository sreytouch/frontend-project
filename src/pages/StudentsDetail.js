import React from "react";

const StudentsDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <h2></h2>
        <h2>Student Detail:</h2>
        <div className="col-md-12 student-detail">
          <p>First Name: hello</p>
          <p>Last Name: world</p>
          <p>Email: hello.it@gmila.com</p>
          <p>Address: ...</p>
          <p>Major ID: ...</p>
          <p>GPA: ...</p>
          <p>File: ...</p>
        </div>
        
        <label>Comment</label>
        <div className="col-md-10">
          <input
            type="text"
            required
            className="form-control mt-1"
            placeholder="please input your comment"
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary text-center">
            Submit
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default StudentsDetail;