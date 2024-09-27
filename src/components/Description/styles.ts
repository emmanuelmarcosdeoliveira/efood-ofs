import styled from 'styled-components';

import { DescriptionProps } from '.';

export const DescriptionPar = styled.div<DescriptionProps>`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  padding-block: 16px;
  height: 140px;
  color: ${props => (props.color === 'color1' ? '#E66767' : '#FFEBD9')};
`;
