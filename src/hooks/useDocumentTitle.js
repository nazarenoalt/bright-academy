import { useState, useEffect } from "react";

const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(
    title + " | Bright Academy"
  );
  useEffect(() => (document.title = documentTitle + " | Bright Academy"), []);

  return [documentTitle, setDocumentTitle];
};

export default useDocumentTitle;
