import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Modal = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  background-color: ${colors.color2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.header`
  color: ${colors.color3};
  text-align: right;
  padding: 8px;
  height: 32px;
`;
export const ModalContent = styled.div`
  display: flex;

  img {
    margin-right: 16px;
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-inline: 32px;
    margin-bottom: 32px;
  }
  p {
    color: ${colors.color3};
    padding-bottom: 16px;
  }
`;
