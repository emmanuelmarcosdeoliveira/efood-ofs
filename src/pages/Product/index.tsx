import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import HeaderNavigate from '../../components/HeaderNavigate';
import ProductList from '../../components/ProductList';
import { Rest } from '../Home';

// const listaProdutos: Produto[] = [
//   {
//     id: 1,
//     image: pizza,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: (
//       <Button type="button" title="Ver mais">
//         Ver mais
//       </Button>
//     ),
//   },
//   {
//     id: 1,
//     image: pizza,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: (
//       <Button type="button" title="Ver mais">
//         Ver mais
//       </Button>
//     ),
//   },
//   {
//     id: 1,
//     image: pizza,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: (
//       <Button type="button" title="Ver mais">
//         Ver mais
//       </Button>
//     ),
//   },
//   {
//     id: 1,
//     image: pizza,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: (
//       <Button type="button" title="Ver mais">
//         Ver mais
//       </Button>
//     ),
//   },
//   {
//     id: 1,
//     image: pizza,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: (
//       <Button type="button" title="Ver mais">
//         Ver mais
//       </Button>
//     ),
//   },
//   {
//     id: 1,
//     image: pizza,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     button: (
//       <Button type="button" title="Ver mais">
//         Ver mais
//       </Button>
//     ),
//   },
// ];

const Product = () => {
  const { id } = useParams();
  const [produtos, setProdutos] = useState<Rest[]>([]);

  if (!produtos) {
    return <h3>Carregando...</h3>;
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(response => response.json())
      .then(response => setProdutos(response));
  }, []);
  return (
    <main>
      <HeaderNavigate />
      <Banner produtos={produtos} />
      <ProductList produtos={produtos} />
    </main>
  );
};

export default Product;
