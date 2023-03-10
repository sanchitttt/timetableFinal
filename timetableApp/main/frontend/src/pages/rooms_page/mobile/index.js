import { CircularProgress, Modal } from '@mui/material';
import React, { useContext, useState } from 'react'
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import RoomsContext from '../../../global/contexts/RoomsContext';
import { deleteRoom } from '../../../utils/apiCalls';
import NewRoom from '../../components/add_room';
import PageHeading from '../../components/PageHeading';
import RoomBox from '../../components/rooms_box';

function RoomsPageMobile() {
  const [showModal, setShowModal] = useState(false);
  const Rooms = useContext(RoomsContext);
  const { roomsValue, setRooms } = Rooms;

  const deleteHandler = (id) => {
    const filtered = roomsValue.filter((item) => {
      if (item._id !== id) return item;
    })
    setRooms([...filtered]);
    deleteRoom(id);
  }


  return (
    <div>
      <MobileNavbar />
      <div className='flex justify-center flex-col items-center gap-[25px]'>
        <div className='mt-[20px] w-[327px] flex justify-center'>
          <PageHeading
            buttonText='Add Room'
            amount={roomsValue.length}
            subHeading='Rooms'
            onClickHandler={() => setShowModal(true)}
            onClose={() => setShowModal(false)}
          >Rooms</PageHeading>
        </div>
        {roomsValue.length ? roomsValue.map((room, idx) => {
          return <RoomBox
            id={room._id}
            mainText={room.roomId}
            deleteHandler={deleteHandler}
          />
        }) : <CircularProgress />}
      </div>
      <Modal open={showModal}>
        <div className='absolute top-[50%] left-[50%]' style={{ transform: 'translate(-50%,-50%)' }}>
          <NewRoom
            closeModal={() => setShowModal(false)}
            viewableData={roomsValue}
            setViewableData={setRooms}
          />
        </div>
      </Modal>
    </div>
  )
}

export default RoomsPageMobile;