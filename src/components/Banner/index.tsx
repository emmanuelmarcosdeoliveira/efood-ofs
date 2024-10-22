import { useEffect, useState } from 'react';
import { Rest } from '../../pages/Home';
import { Image } from './styles';

const Banner = () => {
  const [rest, setRest] = useState<Rest>();
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(response => response.json())
      .then(response => setRest(response));
  }, []);

  return (
    <Image style={{ backgroundImage: `url(${rest?.capa})` }}>
      <div className="wrapper">
        <span>{rest?.tipo}</span>
        <h2>{rest?.titulo}</h2>
      </div>
    </Image>
  );
};
export default Banner;
