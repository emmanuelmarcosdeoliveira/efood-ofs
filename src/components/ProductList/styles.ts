import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
`;

export const List = styled.ul`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`;
