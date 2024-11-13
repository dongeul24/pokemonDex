import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Background from "../components/Background";
import styled, { keyframes } from "styled-components";
// keyframes 사용: Keyframes는 CSS 애니메이션의 특정 지점을 정의하는 규칙으로, 애니메이션의 시작과 끝, 그리고 중간 단계를 설정할 수 있다고함!

// 통통 튀는 듯한 애니메이션 적용
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0); /* 해당 시점, 지점(?)마다 원래 위치로 돌아옴 */
  }
  40% {
    transform: translateY(-30px); /* 위로 튀어오름 */
  }
  60% {
    transform: translateY(-15px); /* 살짝 튀어오름 */
  }
`;

const Logo = styled.div`
  background-image: url("/images/pokemon_logo.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 30%;
  animation: ${bounceAnimation} 2s infinite; /* 애니메이션 */
`;

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dex");
  };

  return (
    <Background>
      <Logo></Logo>
      <Button onClick={handleNavigate}>포켓몬 도감 시작하기</Button>
    </Background>
  );
};

export default Home;
