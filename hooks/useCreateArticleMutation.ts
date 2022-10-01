import { gql, useMutation } from "@apollo/client";

type PostArticleData = {
  post: Post;
};

type Post = {
  createdAt: string;
  id: number;
  description: string;
  url: string;
};

type CreateArticleVars = {
  description: string;
  url: string;
};

const POST_ARTICLE = gql`
  mutation Post($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      createdAt
      id
      description
      url
    }
  }
`;

const useCreateArticleMutation = () => {
  return useMutation<PostArticleData, CreateArticleVars>(POST_ARTICLE);
};

export default useCreateArticleMutation;
