import styled from "styled-components";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// Background
export const StyledBackground = styled.div`
  background-color: #23252c;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Div for business card
export const StyledDiv = styled.div`
  width: 30%;
  margin: 3em;

  @media only screen and (max-width: 1200px) {
    width: 40%;
  }

  @media only screen and (max-width: 900px) {
    width: 60%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }

  @media only screen and (max-width: 430px) {
    width: 100%;
  }
`;

// Image styling
export const StyledImage = styled.img`
  border-radius: 20px;
  width: 100%;
  margin: 0;
`;

// Styling for card
export const CardDiv = styled.div`
  background-color: #1a1b21;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em 3em;
  border-radius: 20px;

  @media only screen and (max-width: 355px) {
    padding: 0;
  }
`;

export const StyledName = styled.h1`
  color: white;
  margin-bottom: 0;
`;

export const StyledJob = styled.p`
  color: #f3bf99;
  font-size: 18px;
`;

export const StyledA = styled.a`
  color: #f5f5f5;
  text-decoration: none;
`;

// Styling link to look like a button
export const StyledMail = styled.a`
  background-color: white;
  color: black;
  display: flex;
  width: 85%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0.625em 1.25em;
  margin-top: 1.875em;
  margin-bottom: 3.125em;
  text-decoration: none;
`;

// Position for the text
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

export const StyledTitle = styled.h2`
  color: white;
  margin: 0;
`;

export const StyledP = styled.p`
  color: white;
  margin: 0.625em;
`;

export const IconDiv = styled.div`
  display: flex;
  margin-top: 3em;

  @media only screen and (max-width: 355px) {
    flex-wrap: wrap;
  }
`;

export const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #918e9b;
  width: 40px;
  height: 40px;
  margin: 15px;
  border-radius: 5px;
`;

// Icons

export const MailIcon = styled(AiOutlineMail)``;

export const TwitterIcon = styled(AiOutlineTwitter)`
  fill: black;
  width: 30px;
  height: 30px;
`;

export const FbIcon = styled(FaFacebookF)`
  fill: black;
  width: 30px;
  height: 30px;
`;

export const InstaIcon = styled(AiOutlineInstagram)`
  fill: black;
  width: 30px;
  height: 30px;
`;

export const InIcon = styled(FaLinkedinIn)`
  fill: black;
  width: 30px;
  height: 30px;
`;

export const GithubIcon = styled(AiFillGithub)`
  fill: black;
  width: 30px;
  height: 30px;
`;
