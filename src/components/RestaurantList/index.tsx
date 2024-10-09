// import Restaurante from '../../models/Restaurante';
import { Rest } from '../../pages/Home';
import CardRestaurant from '../CardRestaurant';
import { Container, List } from './styles';
type Props = {
  restaurantes: Rest[];
};

const RestaurantList = ({ restaurantes }: Props) => {
  const getInfos = (restaurantes: Rest) => {
    const infos = [restaurantes.tipo];
    if (restaurantes.destacado) {
      infos.push('Destque da Semana');
    }
    return infos;
  };
  return (
    <Container>
      <div className="wrapper">
        <List>
          {restaurantes.map(restaurante => (
            <CardRestaurant
              id={restaurante.id}
              background={'color1'}
              img={restaurante.capa}
              infos={getInfos(restaurante)}
              nota={restaurante.avaliacao}
              title={restaurante.titulo}
              description={restaurante.descricao}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};
export default RestaurantList;
