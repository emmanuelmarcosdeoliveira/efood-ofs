import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const ButtonContainer = styled.button`
  background-color: ${colors.color3};
  color: ${colors.color2};
  display: block;
  width: 304px;
  height: 24px;
  text-align: center;
  padding: 4px 6px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  border: none;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  background-color: ${colors.color2};
  color: ${colors.color3};
  display: inline-block;
  padding: 4px 6px;
  font-size: 14;
  font-weight: 700;
  line-height: 1.2;
`;
