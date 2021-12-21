import Header from "./sections/Header";
import MoreInfo from "./sections/MoreInfo";
import Cards from "./sections/Cards";
import Plans from "./sections/Plans";
import Reviews from "./sections/Reviews";
import Form from "./sections/Form";
import Footer from "./sections/Footer";
import styled from "styled-components";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <MoreInfo />
        <Cards />
        <Plans />
        <Reviews />
        <Form />
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #f8f9fa;
`

export default App;
