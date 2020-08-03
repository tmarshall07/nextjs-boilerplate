import React, { ReactNode } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background: ${(props) => props.background};
`;

const Container = styled.div`
  width: 120rem;
`;

type Props = {
  background: string;
  children: ReactNode;
};

const Block: React.FC<Props> = (props: Props) => {
  const { children, background } = props;

  return (
    <Wrapper background={background}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Block;
