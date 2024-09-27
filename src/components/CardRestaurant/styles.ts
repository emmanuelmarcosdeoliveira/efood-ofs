import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Card = styled.div`
  background-color: ${colors.color1};
  width: 472px;
  height: 518px;
  position: relative;
  img {
    display: block;
    width: 100%;
  }
`;

export const CardImg = styled.image`
  img {
    display: block;
    width: 470px;
    height: 313px;
  }
`;
export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 17px;
      display: block;
      margin-bottom: 4px;
    }
    p {
      margin-left: 8px;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

export const ContainerTag = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
  margin-right: 16px;
  position: absolute;
  top: 16px;
  right: 0;
`;

export const CardContent = styled.div`
  padding: 8px;
  div {
    display: flex;
  }
`;
