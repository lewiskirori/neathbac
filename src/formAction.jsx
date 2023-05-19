import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export const actions = () => {
  const { register } = useContext(AuthContext);

  const createUser = (
    firstname,
    lastname,
    email,
    phone,
    password,
    gender,
    role
  ) => {
    register(firstname, lastname, email, phone, password, gender, role);
  };
};
