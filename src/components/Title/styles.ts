import styled from 'styled-components';
import { TitleProps } from '.';
export const TitleRestaurant = styled.h3<TitleProps>`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  color: ${props => (props.color === 'color1' ? '#E66767' : '#FFEBD9')};
`;
