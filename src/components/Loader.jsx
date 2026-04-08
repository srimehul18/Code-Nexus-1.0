import { useEffect, useState } from "react";

export default function Loader() {
  const messages = [
    "🤖 Thinking...",
    "📚 Analyzing your input...",
    "✨ Generating smart response...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return <p>{messages[index]}</p>;
}