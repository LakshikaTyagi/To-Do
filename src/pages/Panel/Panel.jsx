import { ChevronDown } from "lucide-react";
import React, { useContext } from "react";
import { Star } from 'lucide-react';
import { Circle } from 'lucide-react';
import TaskProvider from "../TaskProvider/TaskProvider";
import { TaskContext } from "../TaskContext/TaskContext";


function Panel() {
    const {
        task,
        setTask,
        allTasks,
        setAllTasks,
        handleAddTask,
        handleTaskInput,
        handleMarkComplete,
        handleMarkImportant
    } = useContext(TaskContext);

    return (
        <div className='mt-0 mb-0 grow flex flex-col gap-4 px-5'>

            <div className='flex flex-col justify-center shadow-md rounded-lg'>
                <div className='px-4 flex bg-[#FFFFFF] items-center rounded-t-lg'>
                    <svg className='ml-2.5 my-auto' class="fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z" fill="currentColor"></path></svg>
                    <input type="text" placeholder='Add a task' value={task?.title} onChange={handleTaskInput} name="" id="" className='outline-none w-full py-4 px-3.5' />
                </div>
                <div className='rounded-b-lg px-4 bg-[#FAF9F8] flex py-2 border border-transparent border-t-[#d2cec9]'>
                    <input className='p-1 mx-1.5' type='date' value={task?.date} onChange={(e) => setTask({
                        ...task,
                        date: e.target.value
                    })} />
                    <button className='p-1 mx-1.5'>
                        <svg class="fluentIcon reminderButton-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z" fill="currentColor"></path></svg>
                    </button>
                    <button className='p-1 mx-1.5'>
                        <svg class="fluentIcon recurringButton-icon ___12fm75w f1w7gpdv fez10in fg4l7m0" aria-label="" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 6.67a.5.5 0 01.3.1l.08.07.01.02A5 5 0 0113.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 003.11-6.52.5.5 0 01.39-.81zm-4.85-4.02a.5.5 0 01.63-.06l.07.06 2.5 2.5.06.07a.5.5 0 010 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 00-3.1 6.52c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 016.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 01.06-.63z" fill="currentColor"></path></svg>
                    </button>
                    <button onClick={handleAddTask} disabled={task?.title.length === 0} className={`ml-auto px-2 ${task?.title.length > 0 ? "text-blue-600 cursor-pointer" : "text-gray-400 cursor-not-allowed"}  bg-[#fbf9f6] border border-gray-200`}>Add</button>
                </div>
            </div>

            <div className='flex flex-col justify-center shadow-md rounded-lg'>

                {allTasks.map((task, index) => {
                    if (task?.isCompleted) {
                        return;
                    }
                    return (
                        <div>
                            <div className='flex bg-[#FFFFFF] rounded-t-lg'>
                                <div className='py-2.5 px-4'> </div>
                                <div className='py-2.5 px-4 w-150'>Title</div>
                                <div className='py-2.5 px-4 w-28'>Due Date</div>
                                <div className='py-2.5 px-4'>Importance</div>
                            </div>
                            <div key={index} className='flex items-center bg-[#FAF9F8] rounded-b-lg border border-transparent border-t-[#d2cec9]'>
                                <div className='px-1.5' >
                                    <button onClick={() =>
                                        handleMarkComplete(index)
                                    } color={task?.isCompleted ? "blue" : "black"}>
                                        <Circle />
                                    </button>

                                </div>
                                <div className='py-2.5 px-4 w-150'> {task?.title} </div>
                                <div className='py-2.5 px-4 w-32'>{task?.date} </div>
                                <div className='my-3 mx-9.5 '>
                                    <Star onClick={() => handleMarkImportant(index)} size={16} color={task?.isImportant ? "blue" : "black"} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='flex flex-col justify-center shadow-md rounded-lg'>
                {allTasks.map((task, index) => {
                    if (!task?.isCompleted) {
                        return;
                    }
                    return (
                        <div>
                            <div className='flex bg-[#FFFFFF] rounded-t-lg py-2.5 px-4'>Completed</div>

                            <div key={index} className='flex bg-[#FAF9F8] rounded-b-lg border border-transparent border-t-[#d2cec9]'>
                                <div className='px-1.5 py-2.5'>
                                    <Circle onClick={() => handleMarkComplete(index)} color={task?.isCompleted ? "blue" : "black"} background-color={task?.isCompleted ? "blue" : "black"} />
                                </div>
                                <div className='py-2.5 px-4 w-150 line-through decoration-1'>{task?.title}</div>
                                <div className='py-2.5 px-4 w-32'>{task?.date}</div>
                                <div className='my-3 mx-9.5'>
                                    <Star onClick={() => handleMarkImportant(index)} size={16} color={task?.isImportant ? "blue" : "black"} />
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

            <div className='flex flex-col justify-center shadow-md rounded-lg'>
                {allTasks.map((task, index) => {
                    if (!task?.isImportant || task?.isCompleted) {
                        return;
                    }
                    return (
                        <div>
                            <div className='flex bg-[#FFFFFF] rounded-t-lg py-2.5 px-4'>Important</div>

                            <div key={index} className='flex bg-[#FAF9F8] rounded-b-lg border border-transparent border-t-[#d2cec9]'>
                                <div className='px-1.5 py-2.5'>
                                    <Circle onClick={() => handleMarkComplete(index)} color={task?.isCompleted ? "blue" : "black"} background-color={task?.isCompleted ? "blue" : "black"} />
                                </div>
                                <div className='py-2.5 px-4 w-150'>{task?.title}</div>
                                <div className='py-2.5 px-4 w-32'>{task?.date}</div>
                                <div className='my-3 mx-9.5'>
                                    <Star onClick={() => handleMarkImportant(index)} size={16} color={task?.isImportant ? "blue" : "black"} />
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>



        </div>
    )
}

export default Panel