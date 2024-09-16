"use client";

export function Share() {
  async function handleClick() {
    try {
      await navigator.share({
        title: "8by8 Challenge",
        text: "Help me win my challenge!",
        url: "https://challenge.8by8.us",
      });
    } catch (e) {
      console.log(e);
      alert("Oops! Something went wrong! Check the console for more info.");
    }
  }

  return <button onClick={handleClick}>Share</button>;
}
