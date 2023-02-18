import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Input from "../Input";
import Checkbox from "../Checkbox";
import { UserContext } from "../../context/userContext";
import { DepartmentContext } from "../../context/departmentContext";
import { AuthContext } from "../../context/authContext";
import { axiosToken } from "../../apis/createInstance";
function ModalUser({ show, setShow, user }) {
  const { addUser, updateUser, handeChangeReFresh } = useContext(UserContext);
  const { listDepartment } = useContext(DepartmentContext);

  const { auth, refreshUser } = useContext(AuthContext);
  const axiosCustom = axiosToken(auth, refreshUser);

  const handleClose = () => setShow(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthRoomVip, setIsAuthRoomVip] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setUserName(user?.userName);
      setEmail(user?.email);
      setDepartment(user?.department);
      setIsAdmin(user?.isAdmin);
      setIsAuthRoomVip(user?.isAuthRoomVip);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: user?._id,
      name,
      userName,
      email,
      department: department?._id,
      isAdmin,
      isAuthRoomVip,
    };
    if (user) {
      updateUser(axiosCustom, data);
    } else {
      addUser(axiosCustom, data);
    }
    setShow(false);
    handeChangeReFresh();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {user ? "Update" : "Add"}
          User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Input data={name} setData={setName} label="Name" type="text" />
          <Input
            data={userName}
            setData={setUserName}
            label="User name"
            type="text"
          />
          <Input data={email} setData={setEmail} label="Email" type="email" />
          <InputGroup className="mb-3" controlId="formBasicEmail">
            <DropdownButton
              variant="outline-secondary"
              title="Department"
              id="input-group-dropdown-1"
            >
              {listDepartment?.map((item) => {
                return (
                  <Dropdown.Item
                    key={item?._id}
                    // onClick={handeChangeDepartment(item)}
                    onClick={(e) => setDepartment(item)}
                  >
                    {item?.name}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              value={department?.name}
            />
          </InputGroup>
          <Checkbox data={isAdmin} setData={setIsAdmin} label="Admin role" />
          <Checkbox
            data={isAuthRoomVip}
            setData={setIsAuthRoomVip}
            label="Auth room vip"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          {user ? "Update" : "Add"}
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUser;
