import { Cardapio } from '../../pages/Home';
import CardProduct from '../CardProduct';
import { Container, List } from './styles';

type Props = {
  produtos: Cardapio[];
};

const ProductList = ({ produtos }: Props) => {
  return (
    <Container className="wrapper">
      <List>
        {produtos.map(produto => (
          <CardProduct
            key={produto.id}
            id={produto.id}
            foto={produto.foto}
            nome={produto.nome}
            descricao={produto.descricao}
          />
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
