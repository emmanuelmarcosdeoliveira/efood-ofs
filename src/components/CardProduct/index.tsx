import { ButtonContainer } from '../Button/styles';
import { CardProduto } from './styles';

type CardProps = {
  img: string;
  title: string;
  description: string;
  btn: string;
};

const CardProduct = ({ img, title, description, btn }: CardProps) => {
  return (
    <CardProduto>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonContainer title="Veja mais detalhes do Produto" type="button">
        {btn}
      </ButtonContainer>
    </CardProduto>
  );
};

export default CardProduct;
