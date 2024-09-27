import { Rest } from '../../pages/Home';
import { Imagem } from './styles';

type Props = {
  produtos: Rest[];
};

const Banner = ({ produtos }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${produtos})` }}>
      <div className="wrapper">
        <span>Italiana</span>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </Imagem>
  );
};

export default Banner;
