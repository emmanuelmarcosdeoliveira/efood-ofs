import star from '../../assets/svgs/star.svg';
import { Stars } from './styles';
const Star = () => {
  return (
    <Stars>
      <span>4.6</span>
      <img src={star} alt="Estrelas" />
    </Stars>
  );
};

export default Star;
