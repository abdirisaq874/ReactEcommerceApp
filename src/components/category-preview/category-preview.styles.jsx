import styled from "styled-components"
import { Link } from "react-router-dom";

export const CategoryPreviewContainerStyle  = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
  export const TitleStyle= styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  `

  export const PreviewStyle =styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  `