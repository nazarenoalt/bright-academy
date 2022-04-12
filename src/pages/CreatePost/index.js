import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
const CreatePost = () => {
  const [documentTitle, setDocumentTitle] =
    useDocumentTitle("Crear nuevo post");
  return <div>CreatePost</div>;
};

export default CreatePost;
