import useLoginMutation from "hooks/useLoginMutation";
import type { NextPage } from "next";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const LoginPage: NextPage = () => {
  const [login, {}] = useLoginMutation();

  const [loginData, setLoginData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, errors } = await login({
      variables: {
        email: loginData.email,
        password: loginData.password,
      },
    });

    if (errors) alert("Ocurrió un error");

    if (data) {
      localStorage.setItem("token", data.login.token);
      alert("Sesión iniciada como: " + data.login.user.name);
    }
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
              value={loginData.email}
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
              value={loginData.password}
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
        <div className='py-3'>
          <pre>aa</pre>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
