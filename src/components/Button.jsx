// pokemon 컬러....
// pokemon logo main colors: #0075BE and #FFCC00,
// pokemon ball colors: #ee1515, 	#f00000, 	#222224

import styled from "styled-components";

const Button = styled.button`
  background-color: #ee1515;
  color: white;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 10px;

  &:hover {
    background-color: #0075be;
    color: #ffcc00;
  }
`;

export default Button;
