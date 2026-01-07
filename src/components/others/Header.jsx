import React, { useEffect, useState } from 'react';

const Header = (props)=>{
    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser','');
        props.changeUser('')
    }
   
    return( 
        <div className='flex item-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br/>
             <span className='text-3xl font-semibold'>
                {JSON.parse(localStorage.getItem('loggedInUser')).role === 'admin' && 'Admin'}
                {JSON.parse(localStorage.getItem('loggedInUser')).role === 'employee' && `${props.data.firstname}`}
            </span>👋</h1>
            <button onClick={logOutUser} className='bg-red-500 text-white rounded-lg px-5 py-2 text-lg font-medium'>Log Out</button>
        </div>
    )
}

export default Header;