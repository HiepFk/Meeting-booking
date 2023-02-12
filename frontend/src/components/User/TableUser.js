import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BsTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { UserContext } from "../../context/userContext";
import Loading from "../Loading";
import ModalUser from "./ModalUser";
function TableUser() {
  const { listUser, getListUser, loading, deleteUser, reFresh } =
    useContext(UserContext);

  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  const handeEdit = (item) => {
    setItem(item);
    setShow(true);
  };

  useEffect(() => {
    getListUser();
  }, [reFresh]);

  if (loading) {
    return <Loading />;
  }
  if (listUser?.length === 0) {
    return <>None</>;
  }

  return (
    <>
      <ModalUser show={show} setShow={setShow} user={item} />

      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Group</th>
            <th>Created at</th>
            <th>Admin role</th>
            <th>Auth room vip</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser?.map((item, index) => {
            return (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.userName}</td>
                <td>{item?.email}</td>
                <td>{item?.department?.name}</td>
                <td>{new Date(item?.createdAt).toLocaleString("en-US")}</td>
                <td>
                  {item?.isAdmin ? (
                    <BiCheckCircle
                      style={{ color: "green", fontSize: "1.25rem" }}
                    />
                  ) : (
                    <FaTimes style={{ opacity: "0.8" }} />
                  )}
                </td>
                <td>
                  {item?.isAuthRoomVip ? (
                    <BiCheckCircle
                      style={{ color: "green", fontSize: "1.25rem" }}
                    />
                  ) : (
                    <FaTimes style={{ opacity: "0.8" }} />
                  )}
                </td>
                <td>
                  <MdEdit
                    style={{ marginRight: "1rem" }}
                    className="icon"
                    onClick={() => handeEdit(item)}
                  />
                  <BsTrashFill
                    className="icon"
                    onClick={() => deleteUser(item)}
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

export default TableUser;
