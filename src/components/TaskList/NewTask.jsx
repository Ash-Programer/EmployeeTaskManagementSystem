import React from "react";

const NewTask = ({data})=>{
    return(
        <div className='flex-shrink-0 h-full w-[400px] p-5 bg-red-400 rounded-xl flex flex-col'>
                <div className='flex justify-between item-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-xl'>{data.category}</h3>
                    <h4 className='text-xl'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold break-words overflow-hidden'>{data.title}</h2>
                <p className='text-xl mt-3 break-words overflow-hidden'>{data.description}</p>
                <div className="mt-auto pb-2">
                    <button className="bg-green-400 py-1 px-2 text-sm rounded w-full">Accept Task</button>
                </div>
        </div>
//        <div className='flex-shrink-0 h-full w-[400px] p-5 bg-red-400 backdrop-blur-lg border-2 border-red-400/30 rounded-2xl flex flex-col shadow-2xl'>
//     {/* Header Section */}
//     <div className='flex justify-between items-center'>
//         {/* Slightly darker red for the category tag to make it pop */}
//         <h3 className='bg-red-600 px-3 py-1 rounded text-sm font-bold text-white uppercase'>
//             {data.category}
//         </h3>
//         <h4 className='text-gray-200 text-sm'>{data.date}</h4>
//     </div>

//     {/* Content Section */}
//     <h2 className='mt-5 text-2xl font-bold text-white'>{data.title}</h2>
    
//     {/* Use break-words and leading-relaxed for better description layout */}
//     <p className='text-gray-100 text-sm mt-3 break-words leading-relaxed'>
//         {data.description}
//     </p>

//     {/* Button Section - Fixed at the bottom */}
//     <div className="mt-auto pt-5">
//         <button className="bg-green-500 hover:bg-green-600 transition-all py-3 px-4 text-white font-bold rounded-xl w-full">
//             Accept Task
//         </button>
//     </div>
// </div>
    )
}

export default NewTask;