import Header from '../components/Header';
import Footer from '../components/Footer';

import { Wrapper, Content } from '../styles/page';

function Home() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Footer />
      </Content>
    </Wrapper>
  );
}

export default Home;
