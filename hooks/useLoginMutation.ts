import { gql, useMutation } from "@apollo/client";
import { ILoginData } from "types";

type LoginData = {
  login: ILoginData;
};

type LoginMutationVars = {
  email: string;
  password: string;
};

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        id
        name
      }
    }
  }
`;

const useLoginMutation = () => {
  return useMutation<LoginData, LoginMutationVars>(LOGIN_USER);
};

export default useLoginMutation;
