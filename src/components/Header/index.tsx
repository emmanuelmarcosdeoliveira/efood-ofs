import { Link } from 'react-router-dom';
import logo from '../../assets/svgs/logo-Effod.svg';
import { MyHeader } from './styles';
const Header = () => {
  return (
    <MyHeader>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo Effod" />
        </Link>
      </div>
      <div>
        <p>Viva experiências gastronômicas no conforto da sua casa</p>
      </div>
    </MyHeader>
  );
};

export default Header;
