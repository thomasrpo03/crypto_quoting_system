import styled from "@emotion/styled";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: transparent;
  padding: 10px;
  text-align: center;
  grid-column: 1 / -1;
  font-size: 14px;
  color: #fff;
  gap: 10px;
  display: flex;
  justify-content: center;
  font-family: "Geologica", sans-serif;
  font-size: 14px;
  border-top: 3px solid #fff;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: underline;
    color: #00b819;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      Developed by Thomas Restrepo Orrego
      <FooterLink href="https://github.com/thomasrpo03" target="_blank">
        <FaGithub />
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/thomas-restrepo03/"
        target="_blank"
      >
        <FaLinkedinIn />
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
