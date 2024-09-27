import { useEffect, useState } from 'react';
//import italian from '../../assets/images/Italian-food.png';
//import Japonese from '../../assets/images/japones.png';
import Header from '../../components/Header';
import RestaurantList from '../../components/RestaurantList';
//import Restaurante from '../../models/Restaurante';
// const listaRestaurante: Restaurante[] = [
//   {
//     id: 1,
//     image: Japonese,
//     tags: ['Destque da Semana', 'Japonesa'],
//     title: 'Hioki Sushi',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//   },
//   {
//     id: 2,
//     image: italian,
//     tags: ['Italiana'],
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//   },
//   {
//     id: 3,
//     image: italian,
//     tags: ['Italiana'],
//     title: 'La Doce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//   },
//   {
//     id: 4,
//     image: Japonese,
//     tags: ['Japonesa'],
//     title: 'Hioki Sushi',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//   },
// ];

export type Rest = {
  nome: string;
  id: number;
  titulo: string;
  destacado?: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [
    {
      foto: string;
      preco?: number;
      id: number;
      nome: string;
      descricao: string;
      porcao?: string;
    },
  ];
};

const Home = () => {
  const [listRest, setListRest] = useState<Rest[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(response => response.json())
      .then(response => setListRest(response));
  }, []);

  return (
    <>
      <Header />
      <RestaurantList restaurantes={listRest} />
    </>
  );
};

export default Home;
