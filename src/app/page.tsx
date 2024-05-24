"use client";
import Image from "next/image";
import chatStore from "@/store/chatStore";
import themeStore from "@/store/themeStore";
import { ChatModal } from "@/components";
import { getThreadId } from "../services/api";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const threadId = chatStore((state) => state.threadId);
  const userId = chatStore((state) => state.userId);
  const searchParams = useSearchParams();
  const { width, height } = themeStore((state) => state);

  const primaryColorParam = searchParams.get("pcolor");
  const widthParam = searchParams.get("width");
  const heightParam = searchParams.get("height");
  const avatarParam = searchParams.get("avatar");
  const avatarColorParam = searchParams.get("avatarc");
  const introParam = searchParams.get("intro");

  // Set query params
  useEffect(() => {
    if (widthParam) themeStore.setState({ width: widthParam });
    if (heightParam) themeStore.setState({ height: heightParam });
    if (primaryColorParam)
      themeStore.setState({ primaryColor: `#${primaryColorParam}` });
    if (avatarParam) themeStore.setState({ avatar: avatarParam });
    if (avatarColorParam)
      themeStore.setState({ avatarColor: `#${avatarColorParam}` });
    if (introParam) themeStore.setState({ intro: introParam });
  }, [
    widthParam,
    heightParam,
    primaryColorParam,
    avatarParam,
    avatarColorParam,
    introParam,
  ]);

  useEffect(() => {
    if (threadId) return;
    async function fetchThreadId() {
      const data = {};

      const { threadId } = await getThreadId(data);
      if (threadId) {
        chatStore.setState({ threadId });
      }
    }

    fetchThreadId();
  }, [threadId, userId]);

  return (
    <main
      className="flex bg-transparent"
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <ChatModal />
    </main>
  );
}
