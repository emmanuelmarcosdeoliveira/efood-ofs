import star from '../../assets/svgs/star.svg';
import Button from '../Button';
import Description from '../Description';
import Tag from '../Tag';
import Title from '../Title';
import { Card, CardContent, CardImg, ContainerTag, TitleCard } from './styles';

export type Props = {
  img: string;
  infos: string[];
  title: string;
  description: string;
  nota: number;
  id: number;
  background: 'color1' | 'color2';
};

// const getDescription = (description: string) => {
//   if (description.length > 200) {
//     return description.slice(0, 197) + '...';
//   }
//   return description;
// };

const CardRestaurant = ({
  img,
  title,
  infos,
  description,
  nota,
  id,
}: Props) => {
  return (
    <Card>
      <CardImg>
        <img src={img} alt={title} />
      </CardImg>
      <CardContent>
        <TitleCard>
          <Title color="color1">{title}</Title>
          <div>
            <img src={star} alt="estrela" />
            <p>{nota}</p>
          </div>
        </TitleCard>
        <ContainerTag>
          {infos.map(info => (
            <Tag key={id}>{info}</Tag>
          ))}
        </ContainerTag>
        <Description color="color1">{description}</Description>
        <Button
          to={`/produto/${id}`}
          title="Clique para saber mais"
          type="link"
        >
          Saiba Mais
        </Button>
      </CardContent>
    </Card>
  );
};
export default CardRestaurant;
