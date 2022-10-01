// Same as NewsPage ("/") but with some differences:
// The request is made on the server (SSF) instead of the client (CSF).
// This means that the overall performance is higher compared to CSR
// at the cost of flexiblity to update the grapqhl query cache, which
// translates to having a hard time figuring out how to update the list
// of articles when making a mutation on the same page.
// And that's why i removed the mutation part :P

import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";

import Article from "components/Article";
import { IArticle, IFeedRes } from "types";
import client from "lib/api";

const GET_ARTICLES = gql`
  query Feed {
    feed {
      links {
        id
        description
        url
        createdAt
        postedBy {
          email
          name
          id
        }
      }
    }
  }
`;

type Props = {
  articles: IArticle[];
};

const NewsSSRPage: NextPage<Props> = ({ articles }) => {
  return (
    <div className='w-full h-full container shadow shadow-slate-300 p-4 rounded'>
      <div className='w-full py-6'>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await client.query<IFeedRes>({
    query: GET_ARTICLES,
  });

  return {
    props: {
      articles: data.feed.links,
    },
  };
};

export default NewsSSRPage;
