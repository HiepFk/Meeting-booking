import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { BsTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { RoomContext } from "../../context/roomContext";
import Loading from "../Loading";
import ModalRoom from "./ModalRoom";
function TableRoom({ tab }) {
  const { listRoom, getListRoom, loading, deleteRoom, reFresh } =
    useContext(RoomContext);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);

  const handeEdit = (item) => {
    setItem(item);
    setShow(true);
  };

  useEffect(() => {
    if (tab === "room") {
      getListRoom();
    }
  }, [reFresh, tab]);

  if (loading) {
    return <Loading />;
  }
  if (listRoom?.length === 0) {
    return <>None</>;
  }
  return (
    <>
      <ModalRoom show={show} setShow={setShow} room={item} />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Size</th>
            <th>Color</th>
            <th>Peripheral device</th>
            <th>Vip</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listRoom?.map((item, index) => {
            return (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.size}</td>
                <td style={{ position: "relative" }}>
                  <p
                    style={{
                      width: "1rem",
                      height: "1rem",
                      backgroundColor: `${item?.color}`,
                      position: "absolute",
                      top: "50%",
                      left: " 50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></p>
                </td>
                <td>
                  {!item?.hasDevice ? (
                    <FaTimes style={{ opacity: "0.8" }} />
                  ) : (
                    <BiCheckCircle
                      style={{ color: "green", fontSize: "1.25rem" }}
                    />
                  )}
                </td>
                <td>
                  {!item?.isVip ? (
                    <FaTimes style={{ opacity: "0.8" }} />
                  ) : (
                    <BiCheckCircle
                      style={{ color: "green", fontSize: "1.25rem" }}
                    />
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
                    onClick={() => deleteRoom(item)}
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

export default TableRoom;
