import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import colors from '../styles/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 1.5rem;

  background: ${lighten(0.55, colors.grey)};
`;

const Text = styled.p`
  margin: 0;
  color: ${lighten(0.25, colors.grey)};
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        Made with&nbsp;
        <span role="img" aria-label="pickle">
          🥒
        </span>
        &nbsp;by Tanner &nbsp;-&nbsp;
        {new Date().getFullYear()}
      </Text>
    </Container>
  );
};

export default Footer;
