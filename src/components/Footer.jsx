import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer" style={{ width: "317px", height: "64px", left: "116px", top: "760px", background: "#717181", position: "absolute" }}>
    <Row>
    <Col md={12} className="home-about-social">
      <ul className="home-about-social-links ">
        <li className="social-icons">
          <a
            href="https://github.com/tugceozgur"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons "
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/nolleys23"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons "
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/tugce-ozgur-oztetik-a32b65a5/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons "
          >
            <FaLinkedinIn />
          </a>
        </li>
        {/* <li className="social-icons">
          <a
            href="..."
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillInstagram />
          </a>
        </li> */}
        <li className="social-icons">
            <a
                href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcRwRrkDbscPVzsHVXkqCBsnTMhgFWkhLrsDQftmSsrvPwBbzGdJTtXVkMJSCssczQtBpThQb"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
            >
                <AiFillMail />
            </a>
        </li>
      </ul>
    </Col>
    </Row>
    </div>
  );
}

export default Footer;