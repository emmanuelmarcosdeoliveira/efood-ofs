import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
};

const Button = ({ children, type, title, to, onClick }: Props) => {
  if (type === 'button') {
    <ButtonContainer title={title} onClick={onClick} type={'button'}>
      {children}
    </ButtonContainer>;
  }
  return (
    <ButtonLink to={to as string} title={title} type="link">
      {children}
    </ButtonLink>
  );
};

export default Button;
