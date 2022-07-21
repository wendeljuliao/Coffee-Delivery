import { InputField } from "./styles";

interface IInputProps {
  placeholder: string;
  width: string;
}

export function Input({ placeholder, width }: IInputProps) {
  return <InputField placeholder={placeholder} width={width} />;
}
