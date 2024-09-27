import { Rest } from '../../pages/Home';
import CardProduct from '../CardProduct';
import { Container, List } from './styles';

type Props = {
  produtos: Rest[];
};

const ProductList = ({ produtos }: Props) => {
  return (
    <Container className="wrapper">
      <List>
        {produtos.map(produto => (
          <CardProduct
            key={produto.id}
            id={produto.id}
            foto={produto.capa}
            nome={produto.nome}
            descricao={produto.descricao}
          />
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
