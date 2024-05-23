"use client";
import Image from "next/image";
import chatStore from "@/store/chatStore";
import { ChatModal } from "@/components";
import { getThreadId } from "../services/api";
import { useEffect } from "react";

export default function Home() {
  const threadId = chatStore((state) => state.threadId);
  const userId = chatStore((state) => state.userId);

  useEffect(() => {
    if (threadId) return;
    async function fetchThreadId() {
      const data = {
        // userId,
      };

      const { threadId } = await getThreadId(data);
      if (threadId) {
        chatStore.setState({ threadId });
      }
    }

    fetchThreadId();
  }, [threadId, userId]);

  return (
    <main className="flex bg-transparent w-[400px]">
      <ChatModal />
    </main>
  );
}
