import React from 'react'
import EditSubjectBoxDesktop from './desktop';
import EditSubjectBoxMobile from './mobile';

function EditSubjectBox({ _id, subjectTitle, subjectCode, scheduledClassesPerWeek, className, semesterLevel, branch, closeModal, setViewableData, status,viewableData ,taughtBy}) {
    return (
        <>
            <div className='mobile:hidden desktop:block biggerDesktop:block'>
                <EditSubjectBoxDesktop
                    _id={_id}
                    subjectTitle={subjectTitle}
                    semesterLevel={semesterLevel}
                    subjectCode={subjectCode}
                    scheduledClassesPerWeek={scheduledClassesPerWeek}
                    branch={branch}
                    status={status}
                    className={className}
                    closeModal={closeModal}
                    setViewableData={setViewableData}
                    viewableData={viewableData}
                    taughtBy={taughtBy}
                />
            </div>
            <div className='mobile:block desktop:hidden biggerDesktop:hidden'>
                <EditSubjectBoxMobile
                    _id={_id}
                    subjectTitle={subjectTitle}
                    semesterLevel={semesterLevel}
                    subjectCode={subjectCode}
                    scheduledClassesPerWeek={scheduledClassesPerWeek}
                    branch={branch}
                    status={status}
                    className={className}
                    closeModal={closeModal}
                    setViewableData={setViewableData}
                    viewableData={viewableData}
                    taughtBy={taughtBy}
                />
            </div>
        </>
    )
}

export default EditSubjectBox;