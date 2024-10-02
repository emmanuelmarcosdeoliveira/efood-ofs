import { useState } from 'react';
import imgProduct from '../../assets/images/marguerita.png';
import modalClose from '../../assets/svgs/close.svg';
import Button from '../Button';
import {
  BackModal,
  CardProduto,
  Modal,
  ModalContent,
  ModalHeader,
} from './styles';

type CardProps = {
  id: number;
  foto: string;
  nome: string;
  descricao: string;
};

const CardProduct = ({ id, foto, nome, descricao }: CardProps) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <CardProduto>
        id={id}
        <img src={foto} alt={nome} />
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <Button onClick={() => setModal(true)} title="Veja mais" type="button">
          Mais Detalhes
        </Button>
      </CardProduto>

      <BackModal className={modal ? 'visible' : ''}>
        <Modal>
          <ModalHeader>
            <img
              src={modalClose}
              alt="Fechar"
              onClick={() => setModal(false)}
            />
          </ModalHeader>
          <ModalContent>
            <div>
              <img src={imgProduct} alt="" />
            </div>
            <div>
              <h3>Pizza Marguerita</h3>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <span>Serve: 2 a 3 pessoas</span>
              <Button type="button" title="Ver detalhes do produto">
                Ver mais detalhes
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </BackModal>
    </>
  );
};

export default CardProduct;
