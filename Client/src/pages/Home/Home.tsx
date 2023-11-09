import React, { useState } from "react";
import axios from "axios";
import HomeCSS from "./Home.module.css";
const Home: React.FC = () => {
  const [url, setURL] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setURL(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await axios.post("/api/predict", { url: url });
    setResponse(response.data);
  };
  let x;
  let xx;
  let label;
  if (response.length > 0) {
    x = response[1].xx;
    let num = x * 100;
    if (0 <= x && x < 0.5) {
      num = 100 - num;
    }
    xx = num.toString();
    if (x <= 1 && x >= 0.5) {
      label = "Website is " + xx + "% safe to use...";
    } else if (0 <= x && x < 0.5) {
      label = "Website is " + xx + "% unsafe to use...";
    }
  }

  return (
    <>
      <div className={HomeCSS.container}>
        <div className={HomeCSS.form}>
          <div className={HomeCSS.heading}> Enter website URL in textbox</div>
          <form onSubmit={handleSubmit} className={HomeCSS.urlForm}>
            <input
              type="text"
              placeholder="Enter URL here.."
              value={url}
              onChangeCapture={handleChange}
              className={HomeCSS.text}
            />
            <br />
            <button type="submit" id={HomeCSS.button}>
              Check
            </button>
          </form>
          <div className={HomeCSS.prediction}>
            <p className={HomeCSS.result}>{label}</p>
            {label && (
              <div className={x < 0.5 ? HomeCSS.red : HomeCSS.green}>
                Continue
              </div>
            )}
          </div>
        </div>
        <div className={HomeCSS.content}>
          <h3 className={HomeCSS.info}>What is Phishing URL Detection?</h3>
          <p className={HomeCSS.description}>
            Phishing URL detection is a crucial cybersecurity technique used to
            identify and block malicious or deceptive websites that are designed
            to trick users into revealing sensitive information, such as
            usernames, passwords, credit card numbers, or personal data.
            Phishing attacks often impersonate trusted entities, like banks,
            social media platforms, or online retailers, with the intent of
            stealing personal information or spreading malware
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
