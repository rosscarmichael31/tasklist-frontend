import styled from "styled-components";

const Main = styled.main`
  padding: 2em;
  text-align: center;
`;

const Heading = styled.h1`
  size: x-large;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    0deg,
    rgba(34, 195, 189, 0.6) 0%,
    rgba(45, 117, 253, 0.6) 100%
  );
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const styles = { Main, Heading, Wrapper, Container };

export default styles;
