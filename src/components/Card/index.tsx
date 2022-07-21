import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { Counter } from "../Counter";
import { IconButton } from "../IconButton";
import { CardContainer, TagsContainer, InfosBuy, ActionsBuy } from "./styles";

interface ICardProps {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
  img: string;
}

export function Card({
  id,
  name,
  description,
  tags,
  price,
  quantity,
  img,
}: ICardProps) {
  const { addCoffeeInCart } = useContext(CoffeesContext);

  function addInCart() {
    addCoffeeInCart(id);
  }

  const numberFormatted = String(price).padEnd(4, "0").replace(".", ",");
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
          R$ <span>{numberFormatted}</span>
        </p>
        <ActionsBuy>
          <Counter idCoffee={id} quantity={quantity} />
          <IconButton handleAddCoffeeInCart={addInCart} />
        </ActionsBuy>
      </InfosBuy>
    </CardContainer>
  );
}
