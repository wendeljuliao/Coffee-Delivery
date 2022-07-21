import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IButtonSmallProps {
  icon: ReactNode;
  name: string;
  handleRemoveCoffeeCart: () => void;
}

export function ButtonSmall({
  icon,
  name,
  handleRemoveCoffeeCart,
}: IButtonSmallProps) {
  return (
    <ButtonContainer onClick={handleRemoveCoffeeCart}>
      {icon}
      <span>{name}</span>
    </ButtonContainer>
  );
}
