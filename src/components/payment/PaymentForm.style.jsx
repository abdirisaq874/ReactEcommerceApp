import Styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainerStyle = Styled.div`

height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const FormContainerStyle = Styled.form`

height: 100px;
min-width: 500px;
`;

export const PaymentButton = Styled(Button)`
    margin-left:auto;
    margin-top:30px;
`