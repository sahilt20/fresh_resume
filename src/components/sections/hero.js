import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  padding-top: calc(var(--nav-height) + 40px);

  @media (max-width: 768px) {
    padding-top: calc(var(--nav-height) + 20px);
  }

  @media (max-width: 480px) {
    padding-top: calc(var(--nav-height) + 10px);
  }

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: var(--transition-smooth);

    @media (max-width: 768px) {
      margin: 0 0 24px 2px;
    }

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }

    &:hover {
      color: var(--green-tint);
      transform: translateX(2px);
    }
  }

  h2 {
    margin: 0 0 16px 0;
    transition: var(--transition-smooth);

    @media (max-width: 768px) {
      margin: 0 0 12px 0;
    }
  }

  h3 {
    margin: 0 0 0 0;
    color: var(--slate);
    line-height: 1.1;
    transition: var(--transition-smooth);

    @media (max-width: 768px) {
      line-height: 1.2;
    }
  }

  p {
    margin: 30px 0 0;
    max-width: 540px;
    line-height: 1.7;
    transition: var(--transition-smooth);

    @media (max-width: 768px) {
      max-width: 100%;
      margin: 24px 0 0;
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    @media (max-width: 480px) {
      margin-top: 40px;
      width: 100%;
      max-width: 320px;
      text-align: center;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);
      transition: left 0.5s ease;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px -15px var(--green-tint);
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hey there, I'm</h1>;
  const two = <h2 className="big-heading">Sahil Tanwar.</h2>;
  const three = <h3 className="big-heading">I automate the boring stuff so engineers can build cool things.</h3>;
  const four = (
    <p>
      DevOps engineer turned automation wizard. I build CI/CD pipelines that deploy faster than you can say
      "it works on my machine," write infrastructure-as-code that treats servers like cattle (not pets),
      and craft data pipelines that move billions of events without breaking a sweat. Currently at{' '}
      <a href="https://www.deloitte.com/uk/en/about.html" target="_blank" rel="noreferrer">
        Deloitte UK
      </a>
      , teaching systems to deploy themselves and data to flow effortlessly.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
