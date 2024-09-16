"use client";
import { useState, useEffect } from "react";

export function Share() {
  const [shareData, setShareData] = useState<ShareData | null>(null);

  useEffect(() => {
    loadData();

    async function loadData() {
      const response = await fetch("/player-ig.png");
      const blob = await response.blob();
      const file = new File([blob], "8by8 share image", { type: blob.type });
      setShareData({
        title: "8by8 Challenge",
        text: "Help me win my challenge!",
        url: "https://challenge.8by8.us",
        files: [file],
      });
    }
  });

  async function handleClick() {
    if (!shareData) return;

    try {
      await navigator.share(shareData);
    } catch (e) {
      console.log(e);
      alert("Oops! Something went wrong! Check the console for more info.");
    }
  }

  return shareData ? (
    <button onClick={handleClick}>Share</button>
  ) : (
    "Loading..."
  );
}
