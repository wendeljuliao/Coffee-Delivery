import { ReactNode } from "react";
import { SelectStyle } from "./styles";

interface ISelectProps {
  icon: ReactNode;
  name: string;
  methodPayment: string | null;
  setMethodPayment: (method: string) => void;
}

export function Select({
  icon,
  name,
  methodPayment,
  setMethodPayment,
}: ISelectProps) {
  function choosePaymentMethod(name: string) {
    setMethodPayment(name);
  }

  return (
    <SelectStyle
      disabled={name === methodPayment}
      name={name}
      methodPayment={methodPayment}
      onClick={() => choosePaymentMethod(name)}
    >
      {icon}
      <label>{name}</label>
    </SelectStyle>
  );
}
