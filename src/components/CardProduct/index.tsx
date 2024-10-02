import Button from '../Button';
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
      <Button title="Veja mais detalhes do Produto" type="button">
        {btn}
      </Button>
    </CardProduto>
  );
};

export default CardProduct;
