import styled from 'styled-components';
import backImage from '../../assets/images/background-image.png';

export const MyHeader = styled.header`
  background: url(${backImage}) center;
  min-height: 186px;
  height: 100%;
`;

export const Menu = styled.header`
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 1.3;
  padding-top: 64px;
  @media (max-width: 768px) {
    padding-top: 32px;
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      li {
        padding-block: 0.5rem;
      }
    }
  }
`;
