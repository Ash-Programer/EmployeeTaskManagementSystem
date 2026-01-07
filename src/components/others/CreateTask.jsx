import React, {useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = ()=>{
    // creating variable or states to store the values of forms
    const [title, settitle] = useState('');
    const [date, setdate] = useState('');
    const [assignTo, setAssignto] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    // const [newtask, setNewTask] = useState({});
    const [userData, setUserData] =useContext(AuthContext);
    
    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(title, date, assignTo, category, description);
        const taskObj = {title, date, category, description, active:false, newTask:true, completed:false, failed:false}
        // setNewTask(taskObj)
        // console.log(`The new task is ${newtask}`)
        // const data = JSON.parse(localStorage.getItem('employees'))
        const data = [...userData.employees]
        data.forEach((employee)=>{
            if(assignTo == employee.firstname){
                employee.tasks.push(taskObj);
                employee.taskCount.newTask = employee.taskCount.newTask + 1;
                console.log(employee);
            }
        })
        // update the Authdat , we keep admin and update the employees
        setUserData({...userData, employees:data});
        // saving back to local storage
        localStorage.setItem('employees', JSON.stringify(data));
        settitle('');
        setdate('');
        setAssignto('');
        setCategory('');
        setDescription('');
    }
    return(
        <div className="py-5 px-10 bg-[#1C1C1C] mt-10 rounded">
                <form onSubmit={(e)=>submitHandler(e)} className="flex w-full flex-wrap items-start justify-between">
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Task Title</h3>
                            <input
                                value={title}
                                onChange={(e)=>settitle(e.target.value)} 
                                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-e-gray-400 mb-4" type="text" placeholder="make an UI design.. etc"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Date</h3>
                            <input 
                                value={date}
                                onChange={(e)=>setdate(e.target.value)} 
                                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-e-gray-400 mb-4"  type="date" />
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Assign to</h3>
                            <input 
                                value={assignTo}
                                onChange={(e)=>setAssignto(e.target.value)} 
                                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-e-gray-400 mb-4" type="text" placeholder="Employee Name"/>
                        </div>
                        <div>
                            <h3 className="text-lg text-gray-300 mb-0.5">Category</h3>
                            <input 
                                value={category}
                                onChange={(e)=>setCategory(e.target.value)} 
                                className="text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-e-gray-400 mb-4" type="text" placeholder="design, dev,etc..."/>
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col">
                        <h3 className="text-lg text-gray-300 mb-0.5">Description</h3>
                        <textarea 
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)} 
                            className="w-full h-56 text-lg py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" cols="30" rows="10" placeholder="describe the task here..."></textarea>                           
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-lg mt-4 w-full">Create Task</button>
                    </div>
                 
                </form>
            </div>
    )
}

export default CreateTask;