// export interface ChatStoreType = {
//   currentThread: [];
//   loading: boolean;
//   threadId: null | string;
//   userId: null | string;
//   addToCurrentThread: ()=>any;
// };

export type ChatStoreType = {
  currentThread: [];
  loading: boolean;
  threadId: null | string;
  userId: null | string;
  addToCurrentThread: (obj: any) => void;
};

export type ThemeStoreType = {
  primaryColor: string;
  avatar: string;
  avatarColor: string;
  intro: string;
};
