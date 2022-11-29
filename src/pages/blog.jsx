import React from "react";
import { Outlet } from "react-router-dom";
import BlogLink from "../components/blog-link";

const blogData = [
  { id: 1, title: "que es ReactJs", slug: "que-es-react" },
  { id: 2, title: "qué es Vue", slug: "que-es-vue" },
  { id: 3, title: "qué es Angular", slug: "que-es-vue" },
];

function Blog() {
  return (
    <React.Fragment>
      <h2>Blog</h2>

      <Outlet />
      <ul>
        {blogData.map((it) => (
          <BlogLink key={it.id} {...it} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Blog;
