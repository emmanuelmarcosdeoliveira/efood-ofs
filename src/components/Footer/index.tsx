import { Link } from 'react-router-dom';
import facebook from '../../assets/svgs/facebook.svg';
import instagran from '../../assets/svgs/instagram.svg';
import logo from '../../assets/svgs/logo-Effod.svg';
import twiter from '../../assets/svgs/twitter.svg';
import { ContainerFooter, Marca, SocialLinks } from './styles';
const Footer = () => {
  return (
    <ContainerFooter>
      <div className="wrapper">
        <Marca>
          <Link to="/">
            <img src={logo} alt="Logo Efood" />
          </Link>
        </Marca>
        <SocialLinks>
          <a href="/">
            <img src={instagran} alt="Logo Efood" />
          </a>
          <a href="/">
            <img src={facebook} alt="Logo Efood" />
          </a>
          <a href="/">
            <img src={twiter} alt="Logo Efood" />
          </a>
        </SocialLinks>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
