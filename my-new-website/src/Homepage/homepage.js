import React from "react";
import "./homepage.css";

export const homepage = () => {
  return (
    <div className="homepage">
      <div className="div">
        <img className="element" alt="Element" src="Homepage/221F91E9-9190-492F-9B0B-65E3CAFBA0A9_1_105_c.jpeg" />
        <div className="overlap">
          <div className="navbar">
            <div className="text-wrapper">Home</div>
            <div className="text-wrapper-2">Resume</div>
            <div className="text-wrapper-3">Blog</div>
            <div className="text-wrapper-4">Projects</div>
          </div>
        </div>
        <div className="text-wrapper-5">Hi!</div>
        <p className="welcome-to-my">
          Welcome to my website! I am a senior at Wake Forest University (Class of 2025), where I am majoring in
          Computer Science and minoring in Environmental Studies. My academic journey has fueled my passion for
          technology, particularly in UI/UX design and web development. I am dedicated to creating intuitive and
          engaging user experiences, and I enjoy the challenge of bringing innovative ideas to life through code.
          <br />
          <br />
          Beyond my academic pursuits, I am an avid tennis and pickle ball player. You can often find me on the courts
          with friends and occasionally even with professors. These sports have taught me the value of teamwork,
          strategy, and perseverance.
          <br />
          <br />
          Traveling is another passion of mine. I love exploring new places and cultures, and I often write about my
          adventures. This website serves as a platform to share my blog posts and galleries, where I document my
          experiences and insights.
          <br />
          <br />
          Thank you for visiting my site. I hope you enjoy exploring my work and learning more about me. Feel free to
          reach out if you have any questions or would like to connect!
        </p>
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper-6">tranphuhoangthu@gmail.com</div>
            <img className="img" alt="Group" src="group-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const XLogo = () => {
  return <div className="x-logo" />;
};



export default homepage;

