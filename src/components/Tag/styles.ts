import styled from 'styled-components';
import { TagProps } from '.';
import { colors } from '../../styles/variables';

export const TagContainer = styled.div<TagProps>`
  display: block;
  width: max-content;
  background-color: ${colors.color2};
  color: ${colors.color3};
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  padding: ${props => (props.padding === 'smal' ? '4px 6px' : '6px 11px')};
`;
