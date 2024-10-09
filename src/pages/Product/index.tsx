import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import HeaderNavigate from '../../components/HeaderNavigate';
import ProductList from '../../components/ProductList';
import { Rest } from '../Home';

const Product = () => {
  const { id } = useParams();
  const [produtos, setProdutos] = useState<Rest[]>([]);

  if (!produtos) {
    return <h3>Carregando...</h3>;
  }

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(response => response.json())
      .then(response => setProdutos(response?.cardapio));
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
