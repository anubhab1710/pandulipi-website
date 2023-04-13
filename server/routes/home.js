import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        endpoints: [
            {
                gallery_page: [
                    {
                        getGallery:
                            "[AUTH required] GET <url>/gallery?album=<albumno>&page=<pageno>",
                        likeGallery:
                            "[AUTH required] PATCH <url>/gallery/:id/likeGallery",
                        createGallery: "POST <url>/gallery",
                        updateGallery: "PATCH <url>/gallery/:id",
                        deleteGallery: "DELETE <url>/gallery/:id",
                    },
                ],
                blogs_page: [
                    {
                        getBlogs: "GET <url>/blogs?page=<pageno>",
                        getBlogsBySearch:
                            "GET <url>/blogs/search?searchQuery=<title||'none'>&tags=<tag,tag...>",
                        getBlog: "GET <url>/blogs/:id",
                        createBlog: "[AUTH required] POST <url>/blogs",
                        updateBlog: "[AUTH required] PATCH <url>/blogs/:id",
                        deleteBlog: "[AUTH required] DELETE <url>/blogs/:id",
                        likeBlog:
                            "[AUTH required] PATCH <url>/blogs/:id/likeBlog",
                        commentBlog:
                            "[AUTH required] POST <url>/blogs/:id/commentBlog",
                    },
                ],
                library_page: [
                    {
                        getLibrary: "[AUTH required] GET <url>/library",
                        getLibraryBySearch:
                            "[AUTH required] GET <url>/library/search?searchQuery=<title||'none'>",
                        createLibrary: "POST <url>/library",
                        updateLibrary: "PATCH <url>/library/:id",
                        deleteLibrary: "DELETE <url>/library/:id",
                    },
                ],
                teams_page: [
                    {
                        getTeam: "GET <url>/team",
                        createTeam: "POST <url>/team",
                        updateTeam: "PATCH <url>/team/:id",
                        deleteTeam: "DELETE <url>/team/:id",
                    },
                ],
                user_authentication: [
                    {
                        signup: "POST <url>/user/signin",
                        signin: "POST <url>/user/signup",
                    },
                ],
            },
        ],
    });
});

export default router;
