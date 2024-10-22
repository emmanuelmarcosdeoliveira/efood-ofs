import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import RestaurantList from '../../components/RestaurantList';

export type Cardapio = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};
export type Rest = {
  id: number;
  titulo: string;
  destacado?: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
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
