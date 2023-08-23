import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography> This is a quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXuEyziD_tXL7UGeaCcW2phvh6NHbkC4ujmJuBz0vyXzL03swwuldxLXweCwGCf6ljBg&usqp=CAU" alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Rohit Khankriyal
          </Typography>

          <Typography>Full Stack Developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            SUBTITLES
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem officia corporis, ullam omnis consequatur consectetur quis quibusdam illo laudantium, ad magnam fugiat qui quia repudiandae necessitatibus voluptas alias quae voluptate ipsum corrupti?
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;