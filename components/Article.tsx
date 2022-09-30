import Link from "next/link";
import { IArticle } from "types";

type Props = {
  article: IArticle;
};

const Article = ({ article }: Props) => {
  return (
    <div className='w-full py-2 px-10 flex flex-col gap-y-3 mb-6'>
      <div className='flex divide-x items-center'>
        <p className='text-blue-500 pr-3'>{article.postedBy.name}</p>
        <p className='text-slate-400 text-sm pl-3'>{article.postedBy.email}</p>
      </div>
      <div className='text-sm text-slate-700'>{article.description}</div>
      <div className='text-sm flex justify-between'>
        <Link href={article.url}>
          <a className='text-blue-300 hover:text-blue-400'>Go to site</a>
        </Link>
        <div className='text-slate-300 '>{article.createdAt}</div>
      </div>
    </div>
  );
};

export default Article;
