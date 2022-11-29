import React from "react";
import { Link } from "react-router-dom";

const BlogLink = ({ slug, title }) => {
  return (
    <li>
      <Link to={`/blog/${slug}`}>{title}</Link>
    </li>
  );
};

export default BlogLink;
