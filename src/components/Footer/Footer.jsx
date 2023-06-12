import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";




const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const Footer = () => {
    return (
        <div className="footer-container">
      <div className="ant-icons">
      {/* <p>GitHub FontEnd</p> */}
        <a href="https://github.com/andrea-de-faveri-01/ROCK-THE-BARRIO_FRONT"
        target="_blank" rel="noopener noreferrer"
        >
          <GithubOutlined className="ant-icon" />
        </a>
        {/* <p>GitHub BackEnd</p> */}
        <a href="https://github.com/GaleGizmo/ROCK_DE_BARRIO_BACKEND" 
        target="_blank" rel="noopener noreferrer"
        >
          <GithubOutlined className="ant-icon" />
        </a>
        {/* <p>Miguel 🎸</p> */}
        <a href="https://www.linkedin.com/in/miguelabelleira-fsd/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
        {/* <p>Moha 🥁</p> */}
        <a href="https://www.linkedin.com/in/mohamed-nour-abdulla-743587176/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
        
        {/* <p>Alex 🎷</p> */}
        <a href="https://www.linkedin.com/in/alejandro-rodriguez-asencio-full-stack-developer/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
        {/* <p>Andrea 🎺</p> */}
        <a href="https://www.linkedin.com/in/andrea-de-faveri-dev/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
      </div>
      <div className="footer-btn-container">
          <Button className="footer-btn" text="Vuelve arriba" type="medium" onClick={scrollToTop}/>
        </div>
      </div>
    );
  };
  
  export default Footer;