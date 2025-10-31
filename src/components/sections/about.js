import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1000px;
  position: relative;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: clamp(40px, 7vw, 60px);
    align-items: center;
    transition: var(--transition-smooth);

    @media (max-width: 768px) {
      display: block;
      grid-gap: clamp(40px, 6vw, 60px);
    }

    @media (max-width: 480px) {
      grid-gap: 40px;
    }
  }
`;

const StyledText = styled.div`
  p {
    margin-bottom: clamp(16px, 3vw, 20px);
    transition: var(--transition-smooth);
    line-height: 1.7;

    @media (max-width: 768px) {
      line-height: 1.6;
    }
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 1fr));
    gap: clamp(10px, 2vw, 14px);
    padding: 0;
    margin: clamp(28px, 5vw, 32px) 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(140px, 1fr));
      gap: 12px;
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, minmax(110px, 1fr));
      gap: 10px;
    }

    li {
      position: relative;
      padding: clamp(10px, 2vw, 12px) clamp(12px, 2.5vw, 16px);
      padding-left: clamp(28px, 3vw, 32px);
      font-family: var(--font-mono);
      font-size: clamp(12px, 2.2vw, 13px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: rgba(100, 255, 218, 0.03);
      border-radius: var(--border-radius);
      border: 1px solid rgba(100, 255, 218, 0.1);
      cursor: default;

      @media (max-width: 480px) {
        padding: 10px 12px;
        padding-left: 28px;
        font-size: 12px;
      }

      &:before {
        content: '▹';
        position: absolute;
        left: clamp(10px, 2vw, 12px);
        color: var(--green);
        font-size: clamp(14px, 2.5vw, 16px);
        line-height: 12px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover {
        background: rgba(100, 255, 218, 0.08);
        border-color: rgba(100, 255, 218, 0.3);
        transform: translateX(5px);
        box-shadow: 0 4px 12px rgba(100, 255, 218, 0.1);

        &:before {
          color: var(--green);
          transform: translateX(-3px) scale(1.2);
        }
      }

      @media (max-width: 768px) {
        &:hover {
          transform: translateX(3px);
        }
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 350px;
  margin-left: auto;
  transition: var(--transition-smooth);

  @media (max-width: 768px) {
    margin: clamp(40px, 6vw, 50px) auto 0;
    width: 70%;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    width: 80%;
    max-width: 260px;
    margin: 40px auto 0;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius-lg);
    background: linear-gradient(135deg, var(--green) 0%, rgba(100, 255, 218, 0.7) 100%);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background: linear-gradient(135deg, rgba(100, 255, 218, 0.9) 0%, var(--green) 100%);
      outline: 0;
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 20px 40px -15px rgba(100, 255, 218, 0.3);

      &:after {
        top: 24px;
        left: 24px;
        border-color: var(--green);
        box-shadow: 0 20px 40px -15px rgba(2, 12, 27, 0.7);
      }

      .img {
        filter: grayscale(0%) contrast(1.1) brightness(1.05);
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius-lg);
      mix-blend-mode: multiply;
      filter: grayscale(80%) contrast(1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius-lg);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
      opacity: 0.3;
    }

    &:after {
      border: 2px solid rgba(100, 255, 218, 0.5);
      top: 20px;
      left: 20px;
      z-index: -1;
      box-shadow: var(--shadow-md);

      @media (max-width: 480px) {
        top: 16px;
        left: 16px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Docker', 'Jenkins', 'Bamboo', 'AWS', 'Azure DevOps', 'Terraform', 'Kafka', 'Python', 'Fast API', 'Mulesoft', 'Control-M', 'ELK', 'Pandas', 'Flask', 'SQL', 'Oracle', 'PL/SQL', 'SAP HANA'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              In 2015, I had an epiphany: clicking buttons in a UI is for chumps. Since then, I've been on a mission
              to automate myself out of repetitive work at Fidelity International, Gartner, and now Deloitte UK. The
              result? Systems that deploy themselves, heal themselves, and tell you what's wrong before your boss does.
            </p>

            <p>
              My specialty is turning manual nightmares into automated dreams. I write Terraform configs that spin up
              entire environments faster than you can brew coffee. I build Jenkins and Bamboo pipelines that test,
              build, and deploy without human intervention (because humans click the wrong button). I containerize
              everything with Docker because "it works on my machine" is not a deployment strategy. Then I hook it
              all up to monitoring that's so detailed, you'll know your app is slow before your users start rage-clicking.
            </p>

            <p>
              But automation without data is just busy work with extra steps. So I also build real-time data pipelines
              using Kafka, orchestrate batch jobs with Control-M, and integrate systems that were never meant to talk
              (looking at you, legacy SAP and modern REST APIs). Think Mulesoft integrations, FastAPI microservices,
              and ETL pipelines that process billions of records while you sleep.
            </p>

            <p>
              Currently helping teams at Deloitte not fear deployments and actually trust their data. Here's what I
              play with daily:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
