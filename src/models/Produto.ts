class Produto {
  image: string;
  title: string;
  description: string;
  id: number;
  button: string;
  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    button: string,
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.button = button;
  }
}

export default Produto;
