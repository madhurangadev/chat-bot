"use client";
import {
  Intro,
  TextInput,
  UserMessage,
  Assistant,
  BouncingDotsLoader,
  NameField,
} from "@/components";
import chatStore from "@/store/chatStore";
import themeStore from "@/store/themeStore";
import { sendMessage } from "../../services/api";
import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

export const ChatModal = () => {
  const scrollToEndRef = useRef<HTMLDivElement>(null);
  const { addToCurrentThread, currentThread, threadId } = chatStore(
    (state) => state
  );
  const { primaryColor } = themeStore((state) => state);

  const [text, setText] = useState("");
  const [enableNameField, setEnableNameField] = useState(true);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [enableEmojis, setEnableEmojis] = useState(false);

  useEffect(() => {
    if (!loading) {
      scrolToEnd();
    }
  }, [loading]);

  useEffect(() => {
    if (currentThread) {
      scrolToEnd();
    }
  }, [currentThread]);


  useEffect(() => {
    if (currentThread.length !== 0) {
      setEnableNameField(false);
    }
  }, [currentThread]);

  const sendUserMessage = async () => {
    setLoading(true);
    try {
      const payload = {
        threadId,
        content: text,
      };
      addToCurrentThread({
        type: "user",
        message: text,
      });

      const { textPart1 } = await sendMessage(payload);
      addToCurrentThread({
        type: "assistant",
        message: textPart1,
      });
      setLoading(false);
      setText('')
    } catch {
      setLoading(false);
      setText('')
    }
  };

  const renderChat = () => {
    return currentThread.map((chat, index) => {
      if (chat?.type === "user") {
        return <UserMessage key={index} message={chat.message} />;
      } else {
        return <Assistant key={index} message={chat.message} />;
      }
    });
  };

  const scrolToEnd = () => {
    scrollToEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  return (
    <div className="flex relative flex-col overflow-auto rounded-lg bg-white-100 w-full h-full justify-between">
      <div>
        <div
          style={{
            backgroundColor: primaryColor,
            marginBottom: currentThread.length === 0 ? 0 : 4,
          }}
          className="h-12 items-center w-full flex justify-center"
        >
          <p className="font-inter">Imersian</p>
        </div>
        {currentThread.length === 0 && <Intro />}
      </div>
      <div className="flex flex-col overflow-y-scroll flex-1">
        {renderChat()}
        <div ref={scrollToEndRef} />
      </div>
      {enableEmojis && (
        <div className="absolute w-full bottom-11 overflow-scroll">
          <EmojiPicker
            width="100%"
            height={350}
            searchDisabled
            onEmojiClick={(emo) => {
              setText((prevText) => prevText + emo.emoji);
              setEnableEmojis(false);
            }}
          />
        </div>
      )}
      {enableNameField && <NameField setText={setName} text={name} />}

      {loading ? (
        <div className="flex w-full justify-center items-center h-10">
          <BouncingDotsLoader />
        </div>
      ) : (
        <TextInput
          disableSend={name.length === 0 && enableNameField}
          onSubmit={sendUserMessage}
          setText={setText}
          text={text}
          setEnableEmojis={setEnableEmojis}
          enableEmojis={enableEmojis}
        />
      )}
    </div>
  );
};
