import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Block from './Block';

// import colors from '../helpers/colors';

import { Wrapper, Content } from '../styles/page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Page() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Block>
          <Container />
        </Block>
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default Page;
