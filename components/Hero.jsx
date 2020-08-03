import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${(props) => props.backgroundColor && css`
    background: ${props.backgroundColor};
  `}
`;

const ImageContainer = styled.div`
  max-width: 600px;
  padding: 5rem;
  img {
    width: 100%;
  }
`;

function Hero(props) {
  const {
    imageSrc,
    imageAlt,
    backgroundColor,
  } = props;

  return (
    <Container
      backgroundColor={backgroundColor}
    >
      <ImageContainer>
        <img
          src={imageSrc}
          alt={imageAlt}
        />
      </ImageContainer>
    </Container>
  );
}

Hero.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Hero.defaultProps = {
  imageSrc: '',
  imageAlt: '',
  backgroundColor: 'none',
};

export default Hero;
