import React, { useContext, useState } from 'react'
import DesktopNavbar from '../../../common/navbar/DesktopNavbar'
import NewRoom from '../../components/add_room';
import PageHeading from '../../components/PageHeading'
import RoomsBox from '../../components/rooms_box';
import { CircularProgress, Modal } from '@mui/material';
import RoomsContext from '../../../global/contexts/RoomsContext';
import { deleteRoom } from '../../../utils/apiCalls';

function RoomsPageDesktop() {
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
        <div className='relative flex justify-center item-center flex-col'>
            <div className='desktop-navbar absolute left-[0px] h-[100%]'>
                <DesktopNavbar />
            </div>
            <div className='flex items-center justify-center flex flex-col mt-[25px]'>
                <div className='desktop:w-[600px] biggerDesktops:w-[940px] justify-between'>
                    <PageHeading
                        buttonText='Add Room'
                        amount={roomsValue.length}
                        subHeading='Rooms'
                        onClickHandler={() => setShowModal(true)}
                        onClose={() => setShowModal(false)}
                    >Rooms</PageHeading>
                </div>
                <div className='mt-[25px] grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px]'>
                    {roomsValue.length ? roomsValue.map((room, idx) => {
                        return <div
                            key={idx}
                        >
                            <RoomsBox
                                key={room._id}
                                id={room._id}
                                mainText={room.roomId}
                                deleteHandler={deleteHandler}
                            />
                        </div>
                    }) : <CircularProgress />}
                </div>
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

export default RoomsPageDesktop