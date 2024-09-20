import styled from 'styled-components';
import backImage from '../../assets/images/background-image.png';

export const MyHeader = styled.header`
  min-height: 384px;
  height: 100%;
  background: url(${backImage});
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    min-height: 192px;
    height: 100%;
  }
  img {
    margin-top: 20px;
    margin-bottom: 138px;
    @media (max-width: 768px) {
      margin-bottom: 36px;
    }
  }
  p {
    text-align: center;
    font-size: 36px;
    line-height: 42px;
    font-weight: 900;
    max-width: 539px;
    width: 100%;

    @media (max-width: 786px) {
      font-size: 22px;
      line-height: 1.2;
      max-width: 352px;
      width: 100%;
    }
  }
`;
