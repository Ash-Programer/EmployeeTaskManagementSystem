import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";

const AllTask = ()=>{
    const [authData] = useContext(AuthContext);
    return(
        <div className="bg-[#1C1C1C] p-5 mt-5 h-66 rounded">
            <div className="bg-emerald-400 py-2 px-4 flex justify-between rounded my-2">
                        <h2 className="text-xl font-semibold w-1/5">Employee</h2>
                        <h3 className="text-xl font-semibold w-1/5">New Task</h3>
                        <h5 className="text-xl font-semibold w-1/5">Active</h5>
                        <h5 className="text-xl font-semibold w-1/5">Completed</h5>
                        <h5 className="text-xl font-semibold w-1/5">Failed</h5>
            </div>
           <div className="overflow-auto h-50">
             {authData.employees.map((employee, id)=>{
                return (
                    <div className="border-2 border-emerald-400 py-2 px-4 flex justify-between rounded my-2" key={id}>
                        <h2 className="font-medium w-1/5 text-lg">{employee.firstname}</h2>
                        <h3 className="font-medium w-1/5 text-lg px-6 text-blue-400">{employee.taskCount.newTask}</h3>
                        <h5 className="font-medium w-1/5 text-lg px-6 text-amber-400">{employee.taskCount.active}</h5>
                        <h5 className="font-medium w-1/5 text-lg px-6 text-emerald-400">{employee.taskCount.completed}</h5>
                        <h5 className="font-medium w-1/5 text-lg px-6 text-red-400">{employee.taskCount.failed}</h5>
                    </div>
                )
            })}
           </div>
            
        </div>
    )
}

export default AllTask;