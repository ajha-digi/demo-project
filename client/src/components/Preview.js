import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook";

function Preview() {
  const { page } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const pageParam = queryParams.get("category");

  const { dynamicPageData, data } = useAuth();

  useEffect(() => {
    dynamicPageData(page);
  }, [page]);

  if (data && data.length < 1) {
    return <h2>Loading !!</h2>;
  }

  const { title, html, css } = data[0];

  return (
    <div>
      <h2>Preview - {pageParam}</h2>
      <p>{title}</p>
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      {css && <div dangerouslySetInnerHTML={{ __html: css }} />}
    </div>
  );
}

export default Preview;
