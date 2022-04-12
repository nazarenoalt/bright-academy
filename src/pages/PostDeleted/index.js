import React from "react";
// Hooks
import useDocumentTitle from "hooks/useDocumentTitle";
const ṔostDeleted = () => {
  const [documentTitle, setDocumentTitle] = useDocumentTitle("Post eliminado");
  return <div>ṔostDeleted</div>;
};

export default ṔostDeleted;
