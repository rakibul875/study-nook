import RoomsDetailsPage from '@/components/RoomsDetailsPage';
import React from 'react';

const RoomsDetails = async({params}) => {
    const {roomId}=await params
    console.log(roomId)
    const res=await fetch(`http://localhost:8000/rooms/${roomId}`)
    const data=await res.json()
    console.log(data)
    return (
        <div>
            <div className="">
                <RoomsDetailsPage data={data}/>
            </div>
        </div>
    );
};

export default RoomsDetails;