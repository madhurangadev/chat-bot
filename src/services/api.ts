// @ts-nocheck

import axios from "axios";

//core.imersian.com/ai-thread

export const sendMessage = async (inputs) => {
  let data = JSON.stringify(inputs);
  let config = {
    timeout: 60000,
    method: "post",
    url: "https://396znr0c5e.execute-api.ap-southeast-2.amazonaws.com/staging/openai/message",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    if (response?.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getThreadId = async (inputs) => {
  let data = JSON.stringify(inputs);
  let config = {
    timeout: 60000,
    method: "post",
    url: "https://396znr0c5e.execute-api.ap-southeast-2.amazonaws.com/staging/openai/thread",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    if (response?.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};
