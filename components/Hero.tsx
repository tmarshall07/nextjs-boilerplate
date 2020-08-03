import React from 'react';

import styled, { css } from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ${(props: ContainerProps) =>
    props.backgroundColor &&
    css`
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

type Props = {
  imageSrc: string;
  imageAlt: string;
  backgroundColor: string;
};

const Hero: React.FC<Props> = (props: Props) => {
  const { imageSrc, imageAlt, backgroundColor } = props;

  return (
    <Container backgroundColor={backgroundColor}>
      <ImageContainer>
        <img src={imageSrc} alt={imageAlt} />
      </ImageContainer>
    </Container>
  );
};

export default Hero;
