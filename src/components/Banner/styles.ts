import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Imagem = styled.div`
  width: 100%;
  min-height: 280px;
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }
  span {
    position: relative;
    color: ${colors.color1};
    font-size: 32px;
    line-height: 1.2;
    display: block;
    font-weight: 100;
    padding-top: 24px;
    padding-bottom: 156px;
  }
  h2 {
    font-size: 32px;
    font-weight: 900;
    line-height: 1.2;
    color: ${colors.color1};
    letter-spacing: 0.2ch;
    position: absolute;
  }
`;
