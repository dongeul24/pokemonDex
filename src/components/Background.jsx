import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.height ? props.height : "100vh")};
  background-image: ${(props) =>
    props.background
      ? `url(${props.background})`
      : `url("/images/pokemon_background.jpg")`};
  background-size: ${(props) =>
    props.backgroundSize ? props.backgroundSize : "cover"};
  background-position: center;
  gap: 100px;
`;

export default Background;
