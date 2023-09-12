import { AddCart, Card, Description, ProductImg, Title } from "./styles";

export type Props = {
  img: string;
  nome: string;
  descricao: string;
  id: number;
};

const Product = ({ img, nome, descricao }: Props) => {
  return (
    <Card>
      <div>
        <ProductImg src={img} alt={nome} />
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <AddCart>Adicionar ao carrinho</AddCart>
      </div>
    </Card>
  );
};

export default Product;
