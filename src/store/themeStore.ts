import { create } from "zustand";
import { ThemeStoreType } from "@/types";

const themeStore = create<ThemeStoreType>((set) => ({
  primaryColor: "#4c5270",
  avatar: "V",
  avatarColor: "#20222f",
  intro:"Hi there ! I'm Ven, one of the Founders of Imersian. Ask me any question i'll get back to you as soon as i can."
}));

export default themeStore;
