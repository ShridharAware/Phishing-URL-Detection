import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import ContactCSS from "./Contact.module.css";

const Contact: React.FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    review: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = "/api/review";
    const response = await axios.post(url, data);
    console.log(response.data);

    // Show the popup
    setShowPopup(true);

    // Reset the form data
    setData({
      name: "",
      email: "",
      mobile: "",
      review: "",
    });
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <>
      <div className={ContactCSS.container}>
        <div className={ContactCSS.header}>Give feedback</div>
        <form className={ContactCSS.form} onSubmit={handleSubmit}>
          <div className={ContactCSS.inputs}>
            <label htmlFor="name" className={ContactCSS.labelName}>
              Full name:
            </label>
            <input
              type="text"
              className={ContactCSS.name}
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              value={data.email}
              className={ContactCSS.email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="mobile">Mobile number:</label>
            <input
              type="tel"
              name="mobile"
              value={data.mobile}
              className={ContactCSS.mobile}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="review">Review:</label>
            <textarea
              name="review"
              id=""
              cols={40}
              rows={10}
              className={ContactCSS.review}
              value={data.review}
              onChange={handleChange}
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
            <input type="reset" value="Clear form" />
          </div>
        </form>

        {/* Popup */}
        <div
          className={ContactCSS.popup}
          style={{ display: showPopup ? "block" : "none" }}
        >
          <div className={ContactCSS.popup}>
            <p>Your feedback has been submitted successfully!</p>
            <button onClick={closePopup} className={ContactCSS.popButton}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
