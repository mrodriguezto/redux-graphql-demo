// Same as NewsSSRPage ("/news-ssr") but with some differences:
// The request is made on the client (CSF) instead of the server (SSF).
// This means that the overall performance is lower compared to SSR, but
// in return we have the flexibility to update the grapqhl cache making
// mutations thanks to Apollo :)

import { useState } from "react";
import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";

import Article from "components/Article";
import { IFeedRes } from "types";
import useCreateArticleMutation from "hooks/useCreateArticleMutation";
import ClientOnly from "components/ClientOnly";

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

type FormData = {
  description: string;
  url: string;
};

const HomePage: NextPage = () => {
  const { data, error, loading } = useQuery<IFeedRes>(GET_ARTICLES);
  const [postArticle] = useCreateArticleMutation();

  const [newData, setNewData] = useState<FormData>({
    description: "",
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!localStorage.getItem("token")) return alert("Not authenticated");

    const { data, errors } = await postArticle({
      variables: {
        description: newData.description,
        url: newData.url,
      },
      refetchQueries: [
        {
          query: GET_ARTICLES,
        },
        "Feed",
      ],
    });

    if (errors) alert("Something went wrong");

    if (data) alert("Added new article");
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong :[</div>;

  return (
    <div className='w-full h-full container shadow shadow-slate-300 p-4 rounded'>
      <form
        className='w-full border-b p-4 flex flex-col gap-y-4'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='w-full'>
          <label
            htmlFor='description'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            Description
          </label>
          <input
            type='text'
            id='description'
            name='description'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            value={newData.description}
            onChange={handleChange}
          />
        </div>
        <div className='w-full'>
          <label
            htmlFor='url'
            className='block mb-2 text-sm font-medium text-gray-900 '
          >
            URL
          </label>
          <input
            name='url'
            type='text'
            id='url'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            value={newData.url}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
          >
            Save
          </button>
        </div>
      </form>

      <ClientOnly className='w-full py-6'>
        {data!.feed.links.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ClientOnly>
    </div>
  );
};

export default HomePage;
