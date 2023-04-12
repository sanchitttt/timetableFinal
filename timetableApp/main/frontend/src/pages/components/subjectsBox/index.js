import React, { useContext, useState } from 'react'
import Text13px from '../../../common/text/Text13px';
import Text15px from '../../../common/text/Text15px';
import Text18px from '../../../common/text/Text18px';
import ThemeContext from '../../../global/contexts/ThemeContext';
import ActiveStatus from '../active_status';
import { Modal } from '@mui/material'
import EditSubjectBox from '../edit_subject_box';
import { motion } from 'framer-motion'



function SubjectsBox({ _id, courseCode, courseTitle, classSchedulePerWeek, className, branch, credits, status, semesterLevel, setViewableData, viewableData, taughtBy, courseType, color, disabled }) {
    const [showModal, setShowModal] = useState(false);
    const Theme = useContext(ThemeContext);
    const { themeValue } = Theme;

    return (
        <motion.div
            role={!disabled && 'button'}
            className={`p-[20px]  w-[300px] h-[200px] justify-between gap-[10px] flex flex-col ${color ? 'bg-14' : themeValue === 'dark' ? "bg-03" : "bg-[#fff]"} rounded-[8px] `}
            onClick={() => {
                if (!disabled) setShowModal(true)
            }}
            initial={{ opacity:0,y:-75}}
            animate={{ opacity:1,y:0}}
            transition={{ delay: '0.3' }}
        // transition={{
        //     type: "spring",
        //     stiffness: 260,
        //     damping: 20
        // }}
        >
            <Text18px bold>{courseTitle}</Text18px>
            <Text15px color={themeValue === 'dark' ? '05' : '07'} bold>{courseCode} ({className}-{semesterLevel})</Text15px>
            <Text13px color={themeValue === 'dark' ? '05' : '07'}>{classSchedulePerWeek} classes per week</Text13px>
            <ActiveStatus status={status} />
            {showModal && <Modal open={showModal}
            >
                <div className=''>
                    <EditSubjectBox
                        _id={_id}
                        subjectTitle={courseTitle}
                        courseType={courseType}
                        semesterLevel={semesterLevel}
                        subjectCode={courseCode}
                        scheduledClassesPerWeek={classSchedulePerWeek}
                        branch={branch}
                        className={className}
                        status={status}
                        closeModal={(e) => {
                            e.stopPropagation()
                            setShowModal(false)
                        }}
                        setViewableData={setViewableData}
                        viewableData={viewableData}
                        taughtBy={taughtBy}
                    />
                </div>
            </Modal>}
        </motion.div>
    )
}

export default SubjectsBox;