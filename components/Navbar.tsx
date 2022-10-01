import Link from "next/link";

const sections = [
  {
    path: "/",
    title: "News",
  },
  {
    path: "/news-ssr",
    title: "News with SSR",
  },
  {
    path: "/auth/register",
    title: "Register",
  },
  {
    path: "/auth/login",
    title: "Login",
  },
];

const Navbar = () => {
  return (
    <header
      className='fixed transition duration-150 ease-in-out w-full px-4 sm:px-8 md:px-14 
        z-20 bg-slate-900 text-gray-50 flex items-center justify-between h-20 md:h-16 shadow-sm shadow-black'
    >
      <nav className='hidden sm:flex'>
        <ul className='flex gap-x-3 items-center'>
          {sections.map((section) => (
            <li key={section.path}>
              <Link href={section.path}>
                <a className='border border-cyan-400 py-2 px-4 rounded-lg hover:bg-slate-800 hover:ring-1 hover:ring-cyan-400'>
                  {section.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
