import React from 'react'
import DraftStatus from './DraftStatus';
import PaidStatus from './PaidStatus';
import PendingStatus from './PendingStatus';

function ActiveStatus({ status }) {
    if (status === 'active') {
        return <PaidStatus />
    }
    if (status === 'inactive') {
        return <DraftStatus />

    }
    return <PendingStatus />
}

export default ActiveStatus;