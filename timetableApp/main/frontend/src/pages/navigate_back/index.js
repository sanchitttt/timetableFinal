import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function NavigateBack() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/subjects');
    },[]);
    return (
        <div>index</div>
    )
}

export default NavigateBack;