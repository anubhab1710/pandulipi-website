import React, { useState } from "react";
import BlogCard from "./BlogCard";
import "./blog.css";
import { NavLink } from "react-router-dom";

const BlogPage = () => {
  const blogList = [
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
    {
      id: "6564543",
      author: "Lorem Ipsum",
      title:
        "The Sunset is Like Beauty jbjsjdfjsjsjknjknjsnjnfdjnjdfn dkjfkjhgjhjhkdfhkhfdf",
      time: "2023-02-09-22-16",
      imgLink:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      tags: ["#sunset", "#nature", "#relive-life"],
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus nulla culpa! Explicabo, et nam magni numquam ab quidem placeat nihil delectus omnis est dolor eligendi aperiam magnam exercitationem soluta autem culpa facilis illo. Illum exercitationem aspernatur veniam repudiandae dolores repellat molestias, nam dolorum similique ipsam pariatur dignissimos, molestiae quaerat quam. Expedita molestiae eligendi exercitationem maxime magnam atque dolores debitis, hic sed excepturi, sit officiis. Ad, possimus! Dolorem vitae labore quas saepe illo provident nemo, ipsa expedita dolore rerum deleniti veritatis quae nesciunt ad quod, facilis aliquid est excepturi velit ipsam? Cumque ab, laudantium veniam velit atque fuga obcaecati ut.",
      likes: "10",
    },
  ];

  const items = 8;
  const [num, setNum] = useState(items);
  const [iter, setIter] = useState(0);
  const [btnText, setBtnText] = useState("Load More");

  const handleOnClick = () => {
    if (iter < Math.floor(blogList.length / items) - 2) {
      setBtnText("Load More");
      setNum(num + items);
      setIter(iter + 1);
    } else if (iter < Math.floor(blogList.length / items) - 1) {
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
            className="rounded-l-full flex-1 border-none"
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
          {/* <input type="text" id="tagName" name="tagName" placeholder='Search Tags' /> */}
          {/* <input type="submit" value="Search" /> */}
        </form>
        <NavLink
          to="/createblog"
          className="text-white text-xl mt-5 ring-2 px-8 py-1.5 rounded-full ring-white flex items-center"
        >
          Create Blog
        </NavLink>
      </div>
      <div className="blogcards">
        {blogList.slice(0, num).map((element) => (
          <div className="bCard" key={element.id}>
            <BlogCard
              author={element.author}
              title={element.title.slice(0, 30)}
              time={element.time}
              imgLink={element.imgLink}
              tags={element.tags}
              content={element.content.slice(0, 200)}
              likes={element.likes}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center mb-10">
        <button
          type="button"
          className="cursor-pointer inline-flex justify-center items-center py-3 px-8  xl:text-xl text-center font-semibold border-2 border-white text-white hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]"
          onClick={handleOnClick}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
