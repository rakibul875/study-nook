import React from 'react';

const RoomsDetails = async({params}) => {
    const {roomId}=await params
    console.log(roomId)
    const res=await fetch(`http://localhost:8000/rooms/6a0d381807e1ab69f965b834`)
    return (
        <div>
            
        </div>
    );
};

export default RoomsDetails;