import imageBanner from '../../assets/images/Italian-food.png';
import { Imagem } from './styles';

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${imageBanner})` }}>
      <div className="wrapper">
        <span>Italiana</span>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </Imagem>
  );
};

export default Banner;
