import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/auth-context";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    navigate(-1);
  };
  const handleDelete = () => {
    console.log("eliminado");
  };

  return (
    <div>
      <div> BlogPost {slug} </div>
      <button onClick={handleClick}>Volver al blog</button>
      {user.isAdmin && (
        <button onClick={handleDelete}>Eliminar blogpost</button>
      )}
      {!user.isAdmin &&
        user.autho(<button onClick={handleDelete}>Eliminar blogpost</button>)}
    </div>
  );
}

export default BlogPost;
