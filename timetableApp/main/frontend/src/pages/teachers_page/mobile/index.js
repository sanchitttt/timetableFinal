import { Modal } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import MobileNavbar from '../../../common/navbar/MobileNavbar';
import TeachersContext from '../../../global/contexts/TeachersContext';
import PageHeading from '../../components/PageHeading';
import { TeachersApi } from '../../../utils/api_calls';
import TeachersBox from '../../components/teachers_box';
import AddTeacher from '../../components/add_teacher';
import NoRecords from '../../components/no_records_found';


const TeachersApiInstance = new TeachersApi();

function TeachersMobile() {
    const Teachers = useContext(TeachersContext);
    const { teachersValue } = Teachers;
    const [viewableData, setViewableData] = useState(teachersValue);
    const [addTeacherModal, setAddTeacherModal] = useState(false);

    const deleteHandler = (id) => {
        const filtered = teachersValue.filter((item) => {
            return item._id !== id;
        })
        setViewableData([...filtered]);
        TeachersApiInstance.deleteTeacher(id);
    }

    useEffect(() => {
        if (teachersValue.length) {
            setViewableData(teachersValue)
        }
    }, [teachersValue])

    return (
        <div>
            <MobileNavbar />
            <div className='flex justify-center flex-col items-center gap-[25px]'>
                <div className='mt-[20px] w-[327px] flex justify-center'>
                    <PageHeading
                        amount={viewableData ? viewableData.length : 0}
                        subHeading='teachers'
                        onClickHandler={() => setAddTeacherModal(true)}
                    >
                        Teachers
                    </PageHeading>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='mt-[25px] grid grid-cols-2 gap-[30px]'>
                        {viewableData.map((item) => {
                            return <TeachersBox
                                key={item._id}
                                teacherInitials={item.teacherInitials}
                                teacherName={item.teacherName}
                                id={item._id}
                                deleteHandler={deleteHandler}
                            />
                        })}
                    </div>
                </div>
                {!viewableData.length && <NoRecords
                    mainHeading={'No teachers found'}
                    subHeading={'Add teachers for them to show up here'}
                />}

            </div>

            <Modal open={addTeacherModal}>
                <div>
                    <AddTeacher closeModal={(e) => {
                        e.stopPropagation()
                        setAddTeacherModal(false)
                    }}
                        viewableData={viewableData}
                        setViewableData={setViewableData}
                    />
                </div>
            </Modal>
        </div>
    )
}

export default TeachersMobile;