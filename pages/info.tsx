import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Wrapper, Content } from '../styles/page';

const Info: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default Info;
