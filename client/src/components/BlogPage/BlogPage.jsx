import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "./blog.css";
import { NavLink } from "react-router-dom";
import apiConfig from "../../api.config";

const BlogPage = () => {
  const items = 8;
  const [num, setNum] = useState(items);
  const [iter, setIter] = useState(0);
  const [btnText, setBtnText] = useState("Load More");
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    const reqOpts = {
      method: "GET",
    };
    fetch(`${apiConfig.URL}/blogs`, reqOpts)
      .then((response) => response.json())
      .then((json) => {
        setBlogs(json.data);
        setPageNo(json.currentPage);
        setNoOfPages(json.numberOfPages);
        setIsLoading(false);
      });
  }, []);

  const handleOnClick = () => {
    if (iter < Math.floor(blogs.length / items) - 2) {
      setBtnText("Load More");
      setNum(num + items);
      setIter(iter + 1);
    } else if (iter < Math.floor(blogs.length / items) - 1) {
      setBtnText("Show Less");
      setNum(num + items);
      setIter(iter + 1);
    } else {
      setNum(items);
      setBtnText("Load More");
      setIter(0);
    }
  };

  return (
    <div id="canvas">
      <h1 className="text-center text-5xl pt-10 pl-10 pr-10 text-[#fff]">
        Blogs
      </h1>
      <div className="blogNav flex flex-col items-center justify-center m-10">
        <form
          className="flex w-full max-w-xl justify-center items-center mb-5"
          action=""
        >
          <input
            type="text"
            id="blogName"
            name="blogName"
            placeholder="Search Blogs"
            className="rounded-l-full flex-1 border-none focus:ring-0"
          />
          <a className="h-auto border-none flex items-center justify-center bg-white px-5 py-2 rounded-r-full hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </a>
        </form>
        <NavLink
          to="/createblog"
          className="text-white text-xl mt-5 border-2 px-8 py-1.5 rounded-full border-white flex items-center hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]"
        >
          Create Blog
        </NavLink>
      </div>
      <div className="blogcards">
        {blogs.length>0 ? (<>
         {blogs.map((element) => (
          <div className="bCard" key={element.id}>
            <BlogCard
              id={element.id}
              author={element.creator}
              name={element.creator}
              title={element.title.slice(0, 30)}
              time={element.createdAt}
              imgLink="https://picsum.photos/300/200"
              tags={element.allTags}
              content={element?.content?.slice(0, 200)}
              likes={element.likes.length}
            />
          </div>
        ))}</>):(<div className="text-white text-2xl h-64 ">There are no blogs to show</div>)}

 
      </div>
      {/* <div className="flex flex-wrap justify-center mb-10">
        <button
          type="button"
          className="cursor-pointer inline-flex justify-center items-center py-3 px-8  xl:text-xl text-center font-semibold border-2 border-white text-white hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]"
          onClick={handleOnClick}
        >
          {btnText}
        </button> 
      </div> */}
    </div>
  );
};

export default BlogPage;
