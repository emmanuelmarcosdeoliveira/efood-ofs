import styled from 'styled-components';
import { colors } from '../../styles/variables';
export const ContainerFooter = styled.footer`
  background-color: ${colors.color3};
  p {
    padding-top: 80px;
    padding-bottom: 40px;
    font-size: 10px;
    line-height: 1.2;
    font-weight: 400;
    max-width: 480px;
    width: 100%;
    text-align: center;
    margin-inline: auto;
  }
`;

export const Marca = styled.div`
  padding-top: 40px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
