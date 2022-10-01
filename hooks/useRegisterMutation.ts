import { gql, useMutation } from "@apollo/client";

type RegisterData = {
  signup: Signup;
};

type Signup = {
  user: User;
};

type User = {
  email: string;
  id: number;
  name: string;
};

type RegisterVars = {
  email: string;
  password: string;
  name: string;
};

const CREATE_USER = gql`
  mutation Signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      user {
        email
        id
        name
      }
    }
  }
`;

const useRegisterMutation = () => {
  return useMutation<RegisterData, RegisterVars>(CREATE_USER);
};

export default useRegisterMutation;
