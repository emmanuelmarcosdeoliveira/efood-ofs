import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const CardProduto = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  background-color: ${colors.color2};
  img {
    display: block;
    object-fit: cover;
  }
  h3 {
    padding-top: 8px;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 900px;
    color: ${colors.color3};
  }
  p {
    padding-block: 8px;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 400px;
    color: ${colors.color3};
  }
`;
