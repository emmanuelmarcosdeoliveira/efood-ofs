class Restaurante {
  image: string;
  tags: string[];
  title: string;
  description: string;
  id: number;
  constructor(
    id: number,
    image: string,
    tags: string[],
    title: string,
    description: string,
  ) {
    this.id = id;
    this.image = image;
    this.tags = tags;
    this.title = title;
    this.description = description;
  }
}

export default Restaurante;
