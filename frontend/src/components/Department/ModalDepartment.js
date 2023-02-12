import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { DepartmentContext } from "../../context/departmentContext";
import Input from "../Input";

function ModalDepartment({ show, setShow, department }) {
  const { addDepartment, updateDepartment } = useContext(DepartmentContext);

  const handleClose = () => setShow(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (department) {
      setName(department?.name);
    }
  }, [department]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: department?._id,
      name,
    };
    if (department) {
      updateDepartment(data);
    } else {
      addDepartment(data);
    }
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{department ? "Update" : "Add"} Department</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Input data={name} setData={setName} label="Name" type="text" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          {department ? "Update" : "Add"}
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDepartment;