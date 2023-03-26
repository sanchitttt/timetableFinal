import { Modal } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import DesktopNavbar from '../../../common/navbar/DesktopNavbar';
import TimetablePreferenceContext from '../../../global/contexts/TimetablePreferenceContext';
import AddPreference from '../../components/add_preference';
import PageHeading from '../../components/PageHeading';
import PreferenceBox from '../../components/preference_box';

const mapToArray = (hashMap) => {
  if (hashMap) {
    const iterator1 = hashMap[Symbol.iterator]();
    const values = [];
    for (const item of iterator1) {
      values.push(item[1]);
    }
    return values;
  }

}

function RoomPreferencesDesktop() {
  const [addPreferenceModal, setAddPreferenceModal] = useState(false);
  const [timetablePreferencesList, setTimetablePreferencesList] = useState([]);

  const TimetablePreferences = useContext(TimetablePreferenceContext);
  const { timetablePreferencesValue, setTimetablePreferences } = TimetablePreferences;

  useEffect(() => {
    const transformedArray = mapToArray(timetablePreferencesValue);
    setTimetablePreferencesList(transformedArray);
  }, [timetablePreferencesValue]);

  return (
    <div className='relative flex justify-center item-center flex-col'>
      <div className='desktop-navbar absolute left-[0px] h-[100%]'>
        <DesktopNavbar />
      </div>
      <div className='flex items-center justify-center flex flex-col mt-[25px]'>
        <div className='desktop:w-[730px] biggerDesktops:w-[1000px] justify-between'>
          <PageHeading
            buttonText={'Add preference'}
            amount={timetablePreferencesList.length}
            subHeading='Preferences'
            onClickHandler={() => setAddPreferenceModal(true)}
          >Preferences</PageHeading>
          <div className='h-[79vh]' style={{ overflowY: 'scroll' }}>
            <div className='mt-[25px] grid biggerDesktops:grid-cols-3 desktop:grid-cols-2 gap-[20px]'>
              {timetablePreferencesList.map((item) => {
                return <PreferenceBox
                  id={item.subjectId}
                  day={item.day}
                  period={item.period}
                  text={item.text}
                />
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal open={addPreferenceModal}>
        <div>
          <AddPreference
            closeModal={(e) => {
              e.stopPropagation()
              setAddPreferenceModal(false)
            }}
          />
        </div>
      </Modal>
    </div>
  )
}

export default RoomPreferencesDesktop;