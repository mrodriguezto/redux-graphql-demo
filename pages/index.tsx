import Article from "components/Article";
import type { NextPage } from "next";
import { useState } from "react";
import { IArticle } from "types";

type FormData = {
  description: string;
  url: string;
};

const HomePage: NextPage = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ newData });
  };

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
      <div className='w-full py-6'>
        <Article article={exampleArticle} />
        <Article article={exampleArticle} />
      </div>
    </div>
  );
};

const exampleArticle: IArticle = {
  createdAt: "aaaaaa",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna diam, convallis ac euismod quis, elementum eget nibh. Phasellus ultrices lectus eu ante condimentum sodales. Ut faucibus elit non lacus feugiat, at tempus metus scelerisque. Integer feugiat vehicula gravida. Ut elementum odio vitae laoreet imperdiet. In non pellentesque nisi. Ut eu semper justo, non suscipit massa. Etiam efficitur, eros vel iaculis dapibus, massa leo elementum lacus, non iaculis orci libero non ante. Etiam volutpat quam sit amet tristique luctus. Integer egestas vitae quam ut ultrices. Mauris at faucibus massa, ac condimentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies felis quis sagittis imperdiet. Morbi non lacus mi. Pellentesque ultricies eleifend efficitur.",
  id: 0,
  url: "123456",
  postedBy: {
    id: 0,
    email: "miguel@gmail.com",
    name: "Miguel",
  },
};

export default HomePage;
