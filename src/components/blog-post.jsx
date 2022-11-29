import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div> BlogPost {slug} </div>
      <button onClick={handleClick}>Volver al blog</button>
    </div>
  );
}

export default BlogPost;
