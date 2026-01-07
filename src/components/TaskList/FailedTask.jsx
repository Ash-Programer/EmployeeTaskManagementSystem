import React from "react";

const FailedTask = ({data})=>{
    return(
        <div className='flex-shrink-0 h-full w-[400px] p-5 bg-red-400 rounded-xl flex flex-col'>
                <div className='flex justify-between item-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-xl'>{data.category}</h3>
                    <h4 className='text-xl'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold break-words overflow-hidden'>{data.title}</h2>
                <p className='text-xl mt-3 break-words overflow-hidden'>{data.description}</p>
                <div className="mt-auto pb-2">
                    <button className="bg-green-400 w-full rounded px-2 py-1">Failed</button>
                </div>
        </div>
    )
}

export default FailedTask;