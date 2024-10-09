import { Rest } from '../../pages/Home';
import { Image } from './styles';

type Props = {
  produtos: Rest[];
};

const Banner = ({ produtos }: Props) => {
  return (
    <Image style={{ backgroundImage: `url(${produtos})` }}>
      <div className="wrapper">
        <span>Italiana</span>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </Image>
  );
};

export default Banner;
