import { ReactNode } from "react";
import { SelectStyle } from "./styles";

interface ISelectProps {
  icon: ReactNode;
  name: string;
}

export function Select({ icon, name }: ISelectProps) {
  return (
    <SelectStyle>
      {icon}
      <label>{name}</label>
    </SelectStyle>
  );
}
