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
