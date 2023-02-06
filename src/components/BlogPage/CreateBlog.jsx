import React from 'react'


const CreateBlog = () => {
    return (
        <div className='flex justify-center bg-[#EEEEEE87]'>
            <div className='flex flex-col p-6 '>
                <div>
                    <h1 className='text-5xl p-6 text-[#295C7A]'>Create Your Blog</h1>
                </div>
                <div className='flex shadow-[1px_3px_7px_#4446] rounded p-4 w-[80vw] bg-[#EEEEEE] gap-4'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div>
                            <img src='https://images.unsplash.com/photo-1610823796603-59669e8ee29c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' alt='Blog_image' className='rounded h-[60vh] w-[70vw]'  />
                        </div>
                        <div>
                            <input type="file" id="img" className='hidden' accept="application/jpg" />
                            <label for='img' className='flex flex-col font-semibold border border-[#295C7A] justify-center items-center py-2 px-10 text-[#295C7A] w-full' >Choose photo</label>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <input type='text' placeholder='Title of blog...' className='rounded px-4 py-2 shadow-[inset_-1px_-1px_4px_#4446] border-none text-[#295C7A] w-[50vw] placeholder:text-[#295C7A] focus:outline-none' />
                        </div>
                        <div>
                            <input type='text' placeholder='Tags...' className='rounded px-4 py-2 shadow-[inset_-1px_-1px_4px_#4446] border-none text-[#295C7A] w-[50vw] placeholder:text-[#295C7A] focus:outline-none' />

                        </div>
                        <div>
                            <textarea placeholder='Content...' className='rounded px-4 py-2 shadow-[inset_-1px_-1px_4px_#4446] border-none text-[#295C7A] w-[50vw] placeholder:text-[#295C7A] focus:outline-none' rows='10' cols='80' ></textarea>
                        </div>
                        <div className='flex gap-4'>
                            <button className='border font-semibold border-[#295C7A] rounded justify-center items-center py-2 px-10 text-[#295C7A] w-full'>SAVE</button>
                            <button className='border font-semibold border-[#295C7A] rounded justify-center items-center py-2 px-10 text-[#295C7A] w-full' >CLEAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog