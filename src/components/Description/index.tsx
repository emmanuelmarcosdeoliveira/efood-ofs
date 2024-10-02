import { DescriptionPar } from './styles';

export type DescriptionProps = {
  children: string;
  color: 'color1' | 'color2';
};

const Description = ({ children, color }: DescriptionProps) => {
  return <DescriptionPar color={color}>{children}</DescriptionPar>;
};

export default Description;
