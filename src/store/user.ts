import { create } from "zustand";

const useDataStore = create((set) => ({
  payload: {
    articleData: {
      additionalComments: "",
      dateAndTime: "",
      introduction: "",
      features: "",
      evidences: "",
      justification: "",
      differentiator: "",
      quotes: "",
      boilerplate: "",
      keyMessages: {
        importantMessage: "",
        relevantMessage: "",
      },
      announcement: {
        originator: "",
        type: "New product",
      },
      geographicalFocus: {
        country: "",
        city: "",
      },
    },
    apiKey: "",
  },
  addToPayload: (obj) => set((state) => ({ ...state, payload: { ...obj } })),
}));

export default useDataStore;
