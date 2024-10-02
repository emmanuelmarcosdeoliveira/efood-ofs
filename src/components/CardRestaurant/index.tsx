import Button from '../Button';
import Description from '../Description';
import Star from '../Star';
import Tag from '../Tag';
import Title from '../Title';
import { Card, CardContent, ContainerTag, TitleCard } from './styles';

export type Props = {
  img: string;
  tag: string[];
  title: string;
  description: string;
  background: 'color1' | 'color2';
};

const CardRestaurant = ({
  img,
  title,
  tag,
  description,
  background,
}: Props) => {
  return (
    <Card background={background}>
      <img src={img} alt={title} />
      <CardContent>
        <TitleCard>
          <Title color="color1">{title}</Title>
          <Star />
        </TitleCard>
        <ContainerTag>
          {tag.map(item => (
            <Tag key={item} padding="medium">
              {item}
            </Tag>
          ))}
        </ContainerTag>
        <Description color="color1">{description}</Description>
        <Button to="/produto/" title="Clique para saber mais" type="link">
          Saiba Mais
        </Button>
      </CardContent>
    </Card>
  );
};
export default CardRestaurant;
