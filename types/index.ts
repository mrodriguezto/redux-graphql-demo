export type IArticle = {
  id: number;
  createdAt: string;
  description: string;
  url: string;
  postedBy: IUser;
};

export type IUser = {
  id: number;
  email: string;
  name: string;
};

export type ILoginData = {
  token: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
};

export type IFeedRes = {
  feed: Feed;
};

export type Feed = {
  links: IArticle[];
};
