import { Link } from 'react-router-dom';
import logo from '../../assets/svgs/logo-Effod.svg';
import { Menu, MyHeader, Navigation } from './styles';

const HeaderNavigate = () => {
  return (
    <MyHeader>
      <Menu className="wrapper">
        <Navigation>
          <ul>
            <li>
              <Link to="/">Restaurantes</Link>
            </li>
            <li>
              <Link to="/">
                <img src={logo} alt="Logo-EFood" />
              </Link>
            </li>
            <li>
              <Link to="/carrinho">0 produto(s) no carrinho</Link>
            </li>
          </ul>
        </Navigation>
      </Menu>
    </MyHeader>
  );
};

export default HeaderNavigate;
