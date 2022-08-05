import styled from "styled-components";
import { BaseButton,GoogleButton,InvertedButton } from "../button/button.styles";


export const CartDropDownContainerstyle = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},${GoogleButton},${InvertedButton}{
    margin-top : auto;
  }
`;

export const CartItemsstyle = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessagestyle = styled.span`
  display : flex;
  height : 999%;
  font-size: 18px;
  justify-content : center;
  align-items : center;
  color : grey;
`;

// button {
//   margin-top: auto;
// }
