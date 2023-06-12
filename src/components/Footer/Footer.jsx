import React from "react";
import "./Footer.css";
import Button from "../Button/Button";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Tooltip } from "@fluentui/react-components";



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
      <Tooltip content="GitHub FontEnd" relationship="description" >
        <a href="https://github.com/andrea-de-faveri-01/ROCK-THE-BARRIO_FRONT"
        target="_blank" rel="noopener noreferrer"
        >
          <GithubOutlined className="ant-icon" />
        </a>
        </Tooltip>
        <Tooltip content="GitHub BackEnd" relationship="description">
        <a href="https://github.com/GaleGizmo/ROCK_DE_BARRIO_BACKEND" 
        target="_blank" rel="noopener noreferrer"
        >
          <GithubOutlined className="ant-icon" />
        </a>
        </Tooltip>
        <Tooltip content="Miguel 🎸" relationship="description">
        <a href="https://www.linkedin.com/in/miguelabelleira-fsd/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
        </Tooltip>
        <Tooltip content="Moha 🥁" relationship="description">
        <a href="https://www.linkedin.com/in/mohamed-nour-abdulla-743587176/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
        </Tooltip>
        <Tooltip content="Alex 🎷" relationship="description">
        <a href="https://www.linkedin.com/in/alejandro-rodriguez-asencio-full-stack-developer/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
        </Tooltip>
        <Tooltip content="Andrea 🎺" relationship="description">
        <a href="https://www.linkedin.com/in/andrea-de-faveri-dev/"
        target="_blank" rel="noopener noreferrer"
        >
          <LinkedinOutlined className="ant-icon" />
        </a>
        </Tooltip>
      </div>
      <div className="footer-btn-container">
          <Button className="footer-btn" text="Vuelve arriba" type="medium" onClick={scrollToTop}/>
        </div>
      </div>
    );
  };
  
  export default Footer;