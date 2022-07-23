import { ChangeEvent, InputHTMLAttributes, InvalidEvent } from "react";
import { useFormContext } from "react-hook-form";
import { ContainerOpcional, InputField } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  width: string;
  valueField?: string;
  setValueField?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInvalidInput?: (e: InvalidEvent<HTMLInputElement>) => void;
  handleCepFormatted?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  placeholder,
  maxLength,
  width,
  required,
  handleCepFormatted,
  valueField,
  setValueField,
}: IInputProps) {
  const { register } = useFormContext();

  if (required) {
    return (
      <InputField
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        width={width}
        {...register(id)}
        required={required}
        onChange={handleCepFormatted}
      />
    );
  } else {
    return (
      <ContainerOpcional isEmpty={valueField?.length === 0}>
        <InputField
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          value={valueField}
          onChange={setValueField}
          width={width}
          required={required}
        />
      </ContainerOpcional>
    );
  }
}
