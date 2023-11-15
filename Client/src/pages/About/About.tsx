import React from "react";
import AboutUsCSS from "./About.module.css";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className={AboutUsCSS.container}>
      <h1 className={AboutUsCSS.header}>About Us</h1>
      <p className={AboutUsCSS.paragraph}>
        Welcome to PhishAlert, your go-to resource for secure web browsing. Our
        mission is to empower users with the knowledge and tools to identify and
        protect themselves from phishing URLs.
      </p>

      <h2 className={AboutUsCSS.subheader}>Our Vision</h2>
      <p className={AboutUsCSS.paragraph}>
        In an era where online threats are constantly evolving, we believe in
        creating a safer digital environment for everyone. Our vision is to be
        at the forefront of phishing URL detection, providing a reliable and
        user-friendly platform that helps individuals and businesses stay one
        step ahead of cybercriminals.
      </p>

      <h2 className={AboutUsCSS.subheader}>How It Works</h2>
      <p className={AboutUsCSS.paragraph}>
        At PhishAlert, we leverage cutting-edge machine learning algorithms to
        analyze URLs submitted by our users. Our system utilizes a vast dataset
        of known phishing sites and continuously learns to recognize patterns
        indicative of malicious intent. The result is a real-time assessment of
        the safety of a given URL.
      </p>

      <h2 className={AboutUsCSS.subheader}>Our Team</h2>
      <p className={AboutUsCSS.paragraph}>
        Behind the scenes, our dedicated team of cybersecurity experts, data
        scientists, and engineers work tirelessly to improve the accuracy and
        efficiency of our URL detection system. We are passionate about online
        security and committed to providing you with the best tools to protect
        yourself in the digital landscape.
      </p>

      <h2 className={AboutUsCSS.subheader}>Contact Us</h2>
      <p className={AboutUsCSS.paragraph}>
        Have questions, suggestions, or just want to get in touch? We'd love to
        hear from you! Reach out to us by
        <Link to="/contactus" className={AboutUsCSS.link}>
          clicking here..
        </Link>
      </p>

      <p className={AboutUsCSS.paragraph}>
        Thank you for choosing PhishAlert as your trusted partner in the fight
        against phishing. Together, let's create a safer and more secure online
        experience for everyone.
      </p>
    </div>
  );
};

export default About;
