import { css } from 'styled-components';

const button = css`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-smooth);
  padding: 1.25rem 1.75rem;
  position: relative;
  overflow: hidden;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--green-tint);
    outline: none;
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--green);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition-smooth);
    color: var(--green);
    &:hover,
    &:focus,
    &:active {
      color: var(--green);
      outline: 0;
      &:after {
        width: 100%;
        opacity: 1;
      }
      & > * {
        color: var(--green) !important;
        transition: var(--transition-smooth);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--green);
      transition: var(--transition-smooth);
      opacity: 0.5;
    }
  `,

  button,

  smallButton: css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition-smooth);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
      transform: translateY(-1px);
      box-shadow: var(--shadow-sm);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius-lg);
    padding: clamp(1rem, 2vw, 1.25rem) clamp(1.5rem, 3vw, 1.75rem);
    font-size: clamp(13px, 2.5vw, 14px);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition-smooth);
    font-weight: 500;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      border-color: var(--green);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: var(--shadow-md);
    transition: var(--transition-smooth);

    &:hover,
    &:focus {
      box-shadow: var(--shadow-lg);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
