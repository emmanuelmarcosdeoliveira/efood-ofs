import Restaurante from '../../models/Restaurante';
import CardRestaurant from '../CardRestaurant';
import { Container, List } from './styles';
type Props = {
  restaurantes: Restaurante[];
};

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="wrapper">
        <List>
          {restaurantes.map(restaurante => (
            <CardRestaurant
              background={'color1'}
              key={restaurante.id}
              img={restaurante.image}
              tag={restaurante.tags}
              title={restaurante.title}
              description={restaurante.description}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};
export default RestaurantList;
