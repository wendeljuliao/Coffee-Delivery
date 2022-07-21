import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IButtonSmallProps {
  icon: ReactNode;
  name: string;
}

export function ButtonSmall({ icon, name }: IButtonSmallProps) {
  return (
    <ButtonContainer>
      {icon}
      <span>{name}</span>
    </ButtonContainer>
  );
}
