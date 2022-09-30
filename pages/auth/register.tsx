import type { NextPage } from "next";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage: NextPage = () => {
  const [registerData, setRegisterData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ registerData });
  };

  return (
    <div className='w-full h-full grid place-items-center'>
      <form
        className='min-w-[600px] shadow shadow-slate-300 p-6 rounded divide-y'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='flex flex-col gap-y-6 py-3'>
          <div className='w-full'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='example@example.com'
              value={registerData.name}
              onChange={handleChange}
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='example@example.com'
              value={registerData.email}
              onChange={handleChange}
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Password
            </label>
            <input
              name='password'
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='********'
              value={registerData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
            >
              Login
            </button>
          </div>
        </div>
        <div className='py-3'>aa</div>
      </form>
    </div>
  );
};

export default RegisterPage;
