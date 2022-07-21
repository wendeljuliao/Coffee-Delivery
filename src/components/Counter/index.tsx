import { CounterStyle } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function Counter() {
  return (
    <CounterStyle>
      <Minus size={14} weight="bold" />
      <span>1</span>
      <Plus size={14} weight="bold" />
    </CounterStyle>
  );
}
