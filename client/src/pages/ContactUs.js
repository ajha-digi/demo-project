import React, { useEffect } from "react";
import { useAuth } from "../Hooks/AuthHook";

function ContactUs() {
  const { data, dynamicPageData } = useAuth();
  console.log("data", data);

  useEffect(() => {
    dynamicPageData("contact-us");
  }, []);

  if (data && data.length < 1) {
    return <h2>Loading !!</h2>;
  }
  const { title, imageDataUrl } = data[0];

  return (
    <div>
      <p>Contact us page</p>
      <h1>{title}</h1>
      <img src={imageDataUrl} alt={title} />
    </div>
  );
}

export default ContactUs;
