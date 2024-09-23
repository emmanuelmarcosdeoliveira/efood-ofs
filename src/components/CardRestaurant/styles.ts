import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles/variables';
export const Card = styled.div<
  Omit<Props, 'title' | 'description' | 'img' | 'tag'>
>`
  background-color: ${props =>
    props.background === 'color1' ? colors.color1 : colors.color2};
  width: 472px;
  height: 398px;
  position: relative;

  img {
    display: block;
    max-width: 100%;
  }
`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
