import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

export function Button({
  name,
  type,
  disabled,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonContainer type={type} disabled={disabled}>
      {name}
    </ButtonContainer>
  );
}
