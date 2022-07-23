import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({} as any);

interface IUserContextProviderProps {
  children: ReactNode;
}

interface IUserInfos {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  methodPayment: string;
}

export function UserProvider({ children }: IUserContextProviderProps) {
  const [dataUser, setDataUser] = useState({});

  function saveDataUser(data: IUserInfos) {
    setDataUser(data);
  }

  return (
    <UserContext.Provider value={{ dataUser, saveDataUser }}>
      {children}
    </UserContext.Provider>
  );
}
