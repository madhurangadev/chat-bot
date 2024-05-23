import { create } from "zustand";
import { ChatStoreType } from "@/types";

const chatStore = create<ChatStoreType>((set) => ({
  currentThread: [
  ],
  loading: false,
  threadId: null,
  userId: "google_100014850986990312730",
  addToCurrentThread: (obj) =>
    set((state) => ({
      ...state,
      currentThread: [...state.currentThread, obj],
    })),
}
)) ;

export default chatStore;

