import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IButton {
  name: string;
}

export function Button({ name }: IButton) {
  return <ButtonContainer>{name}</ButtonContainer>;
}
