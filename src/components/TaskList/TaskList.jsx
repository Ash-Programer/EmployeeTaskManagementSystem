import React from 'react';
import AcceptTask from './AcceptTask.jsx';
import NewTask from './NewTask.jsx';
import CompleteTask from './CompleteTask.jsx';
import FailedTask from './FailedTask.jsx';

const TaskList = ({data})=>{
    // console.log(data);
    return(
        <div id='tasklist' className='h-[60%] flex overflow-x-auto items-center justify-start gap-5 w-full flex-nowrap mt-10 py-10'>
            {data.tasks.map((task, idx)=>{
                if(task.active){
                    return <AcceptTask key={idx} data={task}/>
                }
                if(task.completed){
                    return <CompleteTask key={idx} data={task}/>
                }
                if(task.falied){
                    return <FailedTask key={idx} data={task}/>
                }
                if(task.newTask){
                    return <NewTask key={idx} data={task}/>
                }
            })}
            
            
            {/* <AcceptTask/>
            <NewTask/>
            <CompleteTask/>
            <FailedTask/> */}
        </div>
    )
}

export default TaskList;