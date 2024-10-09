import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const CardProduto = styled.div`
  width: 320px;
  height: 415px;
  padding: 8px;
  background-color: ${colors.color2};
  img {
    display: block;
    object-fit: cover;
    width: 304px;
    height: 167px;
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
    height: 180px;
  }
`;

export const BackModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: none;
  &.visible {
    display: block;
  }
`;

export const Modal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.color2};
  width: 1024px;
  height: 334px;
`;

export const ModalContent = styled.div`
  display: flex;
  color: ${colors.color3};
  img {
    margin-right: 24px;
    margin-left: 32px;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 1.2;
  }
  p {
    padding-block: 16px;
    max-width: 656px;
    width: 100%;
  }
  span {
    display: block;
    padding-bottom: 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    display: block;
    padding: 8px;
    cursor: pointer;
  }
`;
