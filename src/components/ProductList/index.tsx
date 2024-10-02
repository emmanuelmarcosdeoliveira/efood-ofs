import Produto from '../../models/Produto';
import CardProduct from '../CardProduct';
import { Container, List } from './styles';

type Props = {
  produtos: Produto[];
};

const ProductList = ({ produtos }: Props) => {
  return (
    <Container className="wrapper">
      <List>
        {produtos.map(produto => (
          <CardProduct
            key={produto.id}
            img={produto.image}
            title={produto.title}
            description={produto.description}
            btn={produto.button}
          />
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
