import { TitleRestaurant } from './styles';

export type TitleProps = {
  children: string;
  color: 'color1' | 'color2';
};

const Title = ({ children, color }: TitleProps) => {
  return <TitleRestaurant color={color}>{children}</TitleRestaurant>;
};

export default Title;
