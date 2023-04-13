import React, { useState } from 'react'
import './blog.css'

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');
    const [blogImg, setBlogImg] = useState('');
    function readImageAsBase64(e) {
        const file = e.target.files[0];
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            };

            reader.onerror = (err) => {
                reject(err);
            };

            reader.readAsDataURL(file);
        });
    }
    const handleImg = async (e) => {
        const data = await readImageAsBase64(e);
        setBlogImg(data);
    }

    const PostBlogContent = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch('/blogs/', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, tags, content, blogImg })
            })
            const data = await resp.json();
            if (resp.ok) {
                setTitle('')
                setTags('')
                setContent('')
                setBlogImg('')

            }
        } catch (err) {
            console.log(`Error while saving blog content - ${err}`);
        }
    }

    const ClearContent = (e) => {
        e.preventDefault();
        setTitle('')
        setTags('')
        setContent('')
        setBlogImg('')
    }

    return (
        <div className='flex justify-center bg-[#EEEEEE87]'>
            <div className='flex mb-16 flex-col p-6 items-center'>
                <div>
                    <h1 className='text-5xl p-6 pb-12 font-semi-bold text-[#295C7A]'>Create Your Blog</h1>
                </div>
                <div className='create-blog-container flex shadow-[1px_3px_7px_#4446] rounded p-4 py-8 w-[80vw] bg-[#EEEEEE] gap-4 md:flex sm:flex flex-col'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div>
                            {!blogImg ? <img src='https://images.unsplash.com/photo-1610823796603-59669e8ee29c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' alt='Blog_image' className='rounded h-[60vh] w-[70vw]' /> : <img src={blogImg} alt={`${title}_image`} className='rounded h-[60vh] w-[70vw]' />}
                        </div>
                        <div className='pt-2'>
                            <input type="file" id="img" className='hidden' accept="application/jpg" onChange={handleImg} />
                            <label for='img' className='flex flex-col font-semibold border border-[#295C7A] justify-center items-center py-2 px-10 text-[#295C7A] hover:cursor-pointer hover:bg-[#295C7A] hover:text-white w-full'>Choose Photo</label>
                        </div>
                    </div>
                    <form className='create-blog-form flex flex-col gap-6'>
                        <div>
                            <input type='text' placeholder='Title of blog...' name='title' className='rounded px-4 py-2 shadow-[inset_-1px_-1px_4px_#4446] border-none text-[#295C7A] w-[50vw] placeholder:text-[#295C7A] hover:cursor-pointer hover:font-bold focus:outline-none' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <input type='text' placeholder='Tags...' name='tags' className='rounded px-4 py-2 shadow-[inset_-1px_-1px_4px_#4446] border-none text-[#295C7A] w-[50vw] placeholder:text-[#295C7A] hover:cursor-pointer hover:font-bold focus:outline-none' value={tags} onChange={(e) => setTags(e.target.value)} />

                        </div>
                        <div>
                            <textarea placeholder='Content...' name='content' className='rounded px-4 py-2 shadow-[inset_-1px_-1px_4px_#4446] border-none text-[#295C7A] w-[50vw] placeholder:text-[#295C7A] hover:cursor-pointer hover:font-bold focus:outline-none' rows='10' cols='80' value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
                        </div>
                        <div className='flex mt-4 gap-4'>
                            <button className='border font-semibold border-[#295C7A] rounded justify-center items-center py-2 text-[#295C7A] hover:bg-[#295C7A] hover:text-white w-full' onClick={PostBlogContent}>SAVE</button>
                            <button className='border font-semibold border-[#295C7A] rounded justify-center items-center py-2 text-[#295C7A] hover:bg-[#295C7A] hover:text-white w-full' onClick={ClearContent} >CLEAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog