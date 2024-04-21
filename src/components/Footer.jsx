import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav className="maxWidth">
        <div>
          Copyright &copy; 2021 <span className="name">Umair Faheem</span>
        </div>
        <div className="socials">
          <a href="https://github.com/UmairFaheem042" target="_blank">
            GitHub
          </a>
          <a href="https://www.instagram.com/design.frontend/" target="_blank">
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/umair-faheem-b48765228/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://www.youtube.com/@TheProjectCode042" target="_blank">
            YouTube
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
