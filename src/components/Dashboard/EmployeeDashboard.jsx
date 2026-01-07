import React from 'react';
import Header from '../others/Header.jsx';
import TashStatus from '../others/TaskStatus.jsx';
import TaskList from '../TaskList/TaskList.jsx';


const EmployeeDashboard = (props)=>{
    return(
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header data={props.data} changeUser = {props.changeUser}/>
            <TashStatus data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard;