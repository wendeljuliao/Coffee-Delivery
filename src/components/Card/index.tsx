import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Counter } from "../Counter";
import { IconButton } from "../IconButton";
import { CardContainer, TagsContainer, InfosBuy, ActionsBuy } from "./styles";

interface ICardProps {
  name: string;
  description: string;
  tags: string[];
  price: number;
  img: string;
}

export function Card({ name, description, tags, price, img }: ICardProps) {
  const numeroFormatado = String(price).padEnd(4, "0").replace(".", ",");
  return (
    <CardContainer>
      <img src={img} alt={name} />

      <TagsContainer>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </TagsContainer>

      <label>{name}</label>
      <p>{description}</p>

      <InfosBuy>
        <p>
          R$ <span>{numeroFormatado}</span>
        </p>
        <ActionsBuy>
          <Counter />
          <IconButton />
        </ActionsBuy>
      </InfosBuy>
    </CardContainer>
  );
}
