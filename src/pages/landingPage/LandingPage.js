import {
  CardDiv,
  FbIcon,
  GithubIcon,
  IconBackground,
  IconDiv,
  InIcon,
  InstaIcon,
  MailIcon,
  StyledA,
  StyledBackground,
  StyledDiv,
  StyledImage,
  StyledJob,
  StyledMail,
  StyledName,
  StyledP,
  StyledTitle,
  TwitterIcon,
  TextDiv,
} from "../../components/StyledComponents";

import image from "../../images/htdde.jpg";

export const LandingPage = () => {
  return (
    <StyledBackground>
      <StyledDiv>
        <StyledImage src={image} />
        <CardDiv>
          <StyledName>Patrick Bateman</StyledName>
          <StyledJob>Vice president at mergers and acquisitions</StyledJob>
          <StyledA
            href="https://thomasr1997.github.io/Paul-Allen-s-card/"
            target="_blank"
          >
            My colleague's card
          </StyledA>

          <StyledMail href="mailto: thomas.kodehode@gmail.com">
            <MailIcon />
            Email
          </StyledMail>

          <TextDiv>
            <StyledTitle>About</StyledTitle>

            <StyledP>
              I have all the characteristics of a human being: blood, flesh,
              skin, hair; but not a single, clear, identifiable emotion, except
              for greed and disgust. Something horrible is happening inside of
              me and I don't know why. My nightly bloodlust has overflown into
              my days. I feel lethal, on the verge of frenzy. I think my mask of
              sanity is about to slip.
            </StyledP>

            <StyledTitle>Interests</StyledTitle>

            <StyledP>
              Yes it is! In '87, Huey released this, Fore, their most
              accomplished album. I think their undisputed masterpiece is "Hip
              to be Square", a song so catchy, most people probably don't listen
              to the lyrics. But they should, because it's not just about the
              pleasures of conformity, and the importance of trends, it's also a
              personal statement about the band itself.
            </StyledP>
          </TextDiv>

          <IconDiv>
            <IconBackground>
              <StyledA
                href="https://thomasr1997.github.io/portfolio/"
                target="_blank"
              >
                <TwitterIcon />
              </StyledA>
            </IconBackground>

            <IconBackground>
              <StyledA
                href="https://thomasr1997.github.io/portfolio/"
                target="_blank"
              >
                <FbIcon />
              </StyledA>
            </IconBackground>

            <IconBackground>
              <StyledA
                href="https://thomasr1997.github.io/portfolio/"
                target="_blank"
              >
                <InstaIcon />
              </StyledA>
            </IconBackground>

            <IconBackground>
              <StyledA
                href="https://thomasr1997.github.io/portfolio/"
                target="_blank"
              >
                <InIcon />
              </StyledA>
            </IconBackground>

            <IconBackground>
              <StyledA
                href="https://thomasr1997.github.io/portfolio/"
                target="_blank"
              >
                <GithubIcon />
              </StyledA>
            </IconBackground>
          </IconDiv>
        </CardDiv>
      </StyledDiv>
    </StyledBackground>
  );
};
