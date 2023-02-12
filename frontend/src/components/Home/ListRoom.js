import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { DepartmentContext } from "../../context/departmentContext";
import { RoomContext } from "../../context/roomContext";

function ListRoom() {
  const { listRoom, getListRoom } = useContext(RoomContext);
  const { getListDepartment } = useContext(DepartmentContext);

  useEffect(() => {
    getListRoom();
    getListDepartment();
  }, []);

  return (
    <div className="list_room">
      <Button variant="light">👉 ALL</Button>
      {listRoom?.map((item) => {
        return (
          <Button key={item?._id} style={{ backgroundColor: `${item?.color}` }}>
            {item?.name}
          </Button>
        );
      })}
    </div>
  );
}

export default ListRoom;
