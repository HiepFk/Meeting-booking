import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

function Filter() {
  const [pageSize, setPageSize] = useState(10);
  const listPageSize = [10, 20, 50];
  return (
    <div className="d-flex justify-content-between mt-3 mb-3">
      <div className="d-flex gap-3 align-items-center">
        <div>Show</div>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {pageSize}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {listPageSize.map((item, index) => {
              return (
                <Dropdown.Item onClick={() => setPageSize(item)} key={index}>
                  {item}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
        <div>entires</div>
      </div>
      <Form.Group
        className="d-flex align-items-center gap-3"
        controlId="formBasicEmail"
      >
        <div>Search: </div>
        <Form.Control
          style={{ width: "20rem" }}
          type="email"
          placeholder="Search name | username | email"
        />
      </Form.Group>
    </div>
  );
}

export default Filter;
