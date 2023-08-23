import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Rohit Khankriyal. I am a Full-Stack Developer and writes ARTICLES
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="..." target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/@0toinfinity967" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/khankriyal__rohit?igshid=MzNlNGNkZWQ4Mg==" target="black">
          <BsInstagram />
        </a>
        <a href="www.linkedin.com/in/rohit-khankriyal-359680242" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;