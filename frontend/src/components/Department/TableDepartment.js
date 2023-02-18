import React, { useState, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { BsTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { DepartmentContext } from "../../context/departmentContext";
import Loading from "../Loading";
import ModalDepartment from "./ModalDepartment";
import { AuthContext } from "../../context/authContext";
import { axiosToken } from "../../apis/createInstance";
function TableDepartment({ tab }) {
  const {
    listDepartment,
    getListDepartment,
    loading,
    deleteDepartment,
    reFresh,
  } = useContext(DepartmentContext);

  const { auth, refreshUser } = useContext(AuthContext);
  const axiosCustom = axiosToken(auth, refreshUser);

  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  const handeEdit = (item) => {
    setItem(item);
    setShow(true);
  };

  useEffect(() => {
    if (tab === "department") {
      getListDepartment(axiosCustom);
    }
  }, [reFresh, tab]);

  if (loading) {
    return <Loading />;
  }
  if (listDepartment?.length === 0) {
    return <>None</>;
  }

  return (
    <>
      <ModalDepartment show={show} setShow={setShow} department={item} />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listDepartment?.map((item, index) => {
            return (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>
                  <MdEdit
                    style={{ marginRight: "1rem" }}
                    className="icon"
                    onClick={() => handeEdit(item)}
                  />
                  <BsTrashFill
                    className="icon"
                    onClick={() => deleteDepartment(item)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableDepartment;
