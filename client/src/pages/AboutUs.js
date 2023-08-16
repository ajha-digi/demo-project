import React, { useEffect } from "react";
import { useAuth } from "../Hooks/AuthHook";

function AboutUs() {
  const { data, dynamicPageData } = useAuth();
  console.log("data", data);

  useEffect(() => {
    dynamicPageData("about-us");
  }, []);

  if (data && data.length < 1) {
    return <h2>Loading !!</h2>;
  }
  const { title, imageDataUrl } = data[0];

  return (
    <div>
      <p>About us page</p>
      <h1>{title}</h1>
      <img src={imageDataUrl} alt={title} />
    </div>
  );
}

export default AboutUs;
