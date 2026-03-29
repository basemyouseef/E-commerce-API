// ProjectFooter.jsx
import React from "react";
import "./ProjectFooter.css";

const ProjectFooter = () => {
  return (
    <footer className="project-footer">
      <div className="fotter">
              <div className="footer-container">
        
        {/* About Project */}
        <div className="footer-about">
          <h2>Project Name</h2>
          <p>
            Our project aims to deliver a smooth and professional user experience
            for showcasing products responsively across all screens, with a clean
            and elegant design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#features">Features</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact Us</a>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>
            📧 <a href="mailto:Basemyousef405@gmail.com">Basemyousef405@gmail.com</a>
          </p>
          <p>
            📞 <a href="tel:+201287446788">+20 1287446788</a>
          </p>
          <p>
            💬 <a href="https://wa.me/201287446788" target="_blank" rel="noopener noreferrer">
              WhatsApp Chat
            </a>
          </p>

          {/* Social Media */}
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Our Project - All Rights Reserved</p>
      </div>
      </div>

    </footer>
  );
};

export default ProjectFooter;
