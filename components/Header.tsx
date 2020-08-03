import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';
import { transparentize, lighten, darken } from 'polished';

import colors from '../styles/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 1rem 0;
`;

const LinkContainer = styled.div`
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 3px;

  color: ${colors.grey};

  :not(:last-child) {
    margin-right: 1rem;
  }

  transition: 50ms all ease-in-out;

  :hover {
    background: ${transparentize(0.95, 'black')};
  }
  :active {
    background: ${transparentize(0.9, 'black')};
  }

  &.active {
    background: ${lighten(0.4, colors.themeBlue)};
    color: ${darken(0.05, colors.themeBlue)};

    &.purple {
      background: ${lighten(0.5, colors.themePurple)};
      color: ${colors.themePurple};
    }

    &.orange {
      background: ${lighten(0.34, colors.themeOrange)};
      color: ${darken(0.15, colors.themeOrange)};
    }
  }
`;

const LinkText = styled.p`
  margin: 0;

  font-size: 2rem;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500,700&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>
        {`
          html {
            font-size: 62.5%;
            font-family: Quicksand;
          }
          body {
            margin: 0;
          }
          p {
            font-size: 1.6rem;
          }
          h1 {
            font-size: 3.2rem;
          }
          h2 {
            font-size: 2.4rem;
          }
          h3 {
            font-size: 1.8rem;
          }
          h4 {
            font-size: 1.6rem;
          }
          h5 {
            font-size: 1.6rem;
          }
          img {
            display: block;
          }
        `}
      </style>
      <Link href="/">
        <LinkContainer>
          <LinkText>Home</LinkText>
        </LinkContainer>
      </Link>
      <Link href="/info">
        <LinkContainer>
          <LinkText>Info</LinkText>
        </LinkContainer>
      </Link>
    </Container>
  );
};

export default Header;
